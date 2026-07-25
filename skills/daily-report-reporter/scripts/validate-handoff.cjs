#!/usr/bin/env node
const fs = require('fs');

const REQUIRED = [
  'International', 'Ohio', 'United States', 'Valencia', 'Spain', 'European Union',
  'NBA', 'EuroLeague', 'Spanish basketball', 'Formula 1', 'IndyCar', 'NFL',
  'College football', 'MLS', 'La Liga', 'Premier League', 'Ohio State football',
  'Manchester City', 'Real Madrid', 'Valencia Basket', 'Columbus Crew',
  'Valencia social calendar', 'EU video-game events', 'Finance'
];

function key(value) { return String(value || '').trim().toLowerCase(); }
function fail(errors, message) { errors.push(message); }
function sourcesFor(card) { return Array.isArray(card.sources) ? card.sources : Array.isArray(card.bibliography) ? card.bibliography : []; }

function validate(input) {
  const errors = [];
  const sections = Array.isArray(input.sections)
    ? input.sections
    : Array.isArray(input.assignments)
      ? input.assignments.map(item => ({ name: item.assignment, type: item.type || item.assignment, cards: item.finalCards || item.cards || item.candidates || [] }))
      : [];
  if (!sections.length) fail(errors, 'handoff must contain sections or assignments');

  const byName = new Map(sections.map(section => [key(section.name || section.assignment), section]));
  for (const name of REQUIRED) {
    const section = byName.get(key(name));
    if (!section) { fail(errors, `missing assignment: ${name}`); continue; }
    if (!Array.isArray(section.cards) || !section.cards.length) fail(errors, `assignment has no cards: ${name}`);
  }

  const finance = sections.find(section => key(section.type) === 'finance' || key(section.name) === 'finance');
  if (finance) {
    if (finance.cards.length !== 5) fail(errors, `Finance must contain exactly 5 cards, got ${finance.cards.length}`);
    const counts = finance.cards.reduce((map, card) => { const region = key(card.region); map[region] = (map[region] || 0) + 1; return map; }, {});
    for (const [region, expected] of [['usa', 2], ['eu', 2], ['asia', 1]]) {
      if (counts[region] !== expected) fail(errors, `Finance ${region} distribution must be ${expected}, got ${counts[region] || 0}`);
    }
  }

  for (const section of sections) for (const card of section.cards || []) {
    for (const field of ['title', 'summary', 'status', 'confidence', 'why']) if (!card[field]) fail(errors, `card missing ${field}: ${card.title || '(untitled)'}`);
    if (!Array.isArray(card.detail) || card.detail.length < 2 || card.detail.length > 4 || card.detail.some(paragraph => typeof paragraph !== 'string' || !paragraph.trim())) fail(errors, `card detail must contain 2-4 non-empty paragraphs: ${card.title || '(untitled)'}`);
    const sources = sourcesFor(card);
    const sensitive = key(card.type) === 'finance' || key(section.type) === 'finance' || key(card.status) === 'rumor watch' || card.rumor === true || card.contested === true;
    if (sources.length < (sensitive ? 3 : 2)) fail(errors, `card has too few sources: ${card.title || '(untitled)'}`);
    if (sensitive && sources.some(source => !source.url)) fail(errors, `sensitive card has a source without URL: ${card.title || '(untitled)'}`);
    if (card.rumor === true || key(card.status) === 'rumor watch') {
      if (!/rumou?r/i.test(card.status || '')) fail(errors, `rumor card must be labeled Rumor watch: ${card.title || '(untitled)'}`);
      if (!['low', 'medium'].includes(key(card.confidence))) fail(errors, `rumor card must have low or medium confidence: ${card.title || '(untitled)'}`);
      const independent = sources.filter(source => /independent|straight/i.test(`${source.source_type || ''} ${source.label || ''}`));
      if (independent.length < 2) fail(errors, `rumor card needs two independent reports: ${card.title || '(untitled)'}`);
    }
    if (key(card.type) === 'finance' || key(section.type) === 'finance') {
      for (const field of ['region', 'as_of', 'instruments', 'movement', 'drivers']) if (!card[field] || (Array.isArray(card[field]) && !card[field].length)) fail(errors, `finance card missing ${field}: ${card.title || '(untitled)'}`);
    }
  }
  return errors;
}

function demo() {
  const source = (label, type) => ({ label, source_type: type, url: 'https://example.com/source' });
  const card = (title, type = 'News', extra = {}) => ({ title, summary: 'Verified mock summary.', detail: ['Verified facts are stated directly and the change is identified.', 'The development matters because it affects the assignment.', 'Relevant context gives the reader the shortest useful history.', 'The next step and remaining uncertainty are stated plainly.'], status: 'Verified', confidence: 'High', why: 'Directly relevant to the assignment.', sources: [source('Official', 'primary'), source('Independent', 'independent')], type, ...extra });
  const sections = REQUIRED.filter(name => name !== 'Finance').map(name => ({ name, type: name === 'Ohio State football' || ['Manchester City', 'Real Madrid', 'Valencia Basket', 'Columbus Crew'].includes(name) ? 'Followed club' : 'News', cards: [card(name)] }));
  sections.push({ name: 'Finance', type: 'Finance', cards: [['USA', 'Market movement'], ['USA', 'Primary driver'], ['EU', 'Market movement'], ['EU', 'Primary driver'], ['Asia', 'Regional overview']].map(([region, kind], index) => card(`Finance ${index + 1}`, 'Finance', { region, as_of: '2026-07-25T10:00:00+02:00', instruments: ['Mock index'], movement: 'Up modestly', drivers: ['Mock driver'], finance_kind: kind, sources: [source('Official', 'primary'), source('Independent', 'independent'), source('Data', 'data')] })) });
  const errors = validate({ sections });
  if (errors.length) throw new Error(errors.join('\n'));
  const bad = JSON.parse(JSON.stringify({ sections }));
  bad.sections[0].cards[0].sources = [];
  if (!validate(bad).some(error => /too few sources/.test(error))) throw new Error('self-test did not reject missing sources');
  const badDetails = JSON.parse(JSON.stringify({ sections }));
  badDetails.sections[0].cards[0].detail = ['Only one paragraph'];
  if (!validate(badDetails).some(error => /2-4/.test(error))) throw new Error('self-test did not reject malformed details');
  const badFinance = JSON.parse(JSON.stringify({ sections }));
  badFinance.sections.find(section => section.name === 'Finance').cards.pop();
  if (!validate(badFinance).some(error => /exactly 5/.test(error))) throw new Error('self-test did not reject Finance count');
  const badRumor = JSON.parse(JSON.stringify({ sections }));
  badRumor.sections[0].cards[0] = card('Unlabeled rumor', 'Sports', { rumor: true, confidence: 'Low', sources: [source('Report one', 'independent'), source('Report two', 'independent'), source('Official', 'primary')] });
  if (!validate(badRumor).some(error => /Rumor watch/.test(error))) throw new Error('self-test did not reject unlabeled rumor');
  return true;
}

if (process.argv[2] === '--self-test') { demo(); console.log('handoff validator self-test passed'); process.exit(0); }
const path = process.argv[2];
if (!path) { console.error('Usage: node validate-handoff.cjs <handoff.json>'); process.exit(2); }
const errors = validate(JSON.parse(fs.readFileSync(path, 'utf8')));
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log('handoff valid');
