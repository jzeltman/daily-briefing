# Confirmed source manifest

Version: `2026-07-25.1`  
Maintenance: review domains manually; each scheduled run should report broken or degraded entries. These stable domains are minimum starting points. Reporters may add relevant sources and must preserve the actual URL used in the bibliography.

Source roles: `primary` is an official institution, league, team, event organizer, exchange, or data provider; `independent` is established reporting; `analysis` is optional context or viewpoint material.

## News and public affairs

| Assignment | Confirmed primary / official | Confirmed independent | Geography / preferred use |
|---|---|---|---|
| International | UN News (https://news.un.org), NATO (https://www.nato.int) | Reuters (https://www.reuters.com), AP (https://apnews.com) | International; diplomacy, security, humanitarian developments |
| Ohio | Ohio.gov (https://ohio.gov), Ohio Legislature (https://www.legislature.ohio.gov) | Ohio Capital Journal (https://ohiocapitaljournal.com), WOSU (https://www.wosu.org) | Ohio; state policy and local impact |
| United States | USA.gov (https://www.usa.gov), Congress.gov (https://www.congress.gov) | AP (https://apnews.com), Reuters (https://www.reuters.com) | United States; federal action and national consequences |
| Valencia, Spain | Ajuntament de València (https://www.valencia.es), Generalitat Valenciana (https://www.gva.es) | Levante-EMV (https://www.levante-emv.com), Las Provincias (https://www.lasprovincias.es) | Valencia; city services, regional decisions, local impact |
| Spain | La Moncloa (https://www.lamoncloa.gob.es), INE (https://www.ine.es) | El País (https://elpais.com), Reuters (https://www.reuters.com) | Spain; official data, government, independent context |
| European Union | European Commission (https://commission.europa.eu), Eurostat (https://ec.europa.eu/eurostat) | Reuters (https://www.reuters.com), Politico Europe (https://www.politico.eu) | EU; regulation, institutions, economic data |

Fallback patterns: `assignment latest date`, `site:official-domain announcement date`, and `assignment Reuters AP date`. Use local-language queries for Valencia and Spain when useful.

## Sports leagues and competitions

| Assignment | Confirmed primary / official | Confirmed independent | Geography / preferred use |
|---|---|---|---|
| NBA | NBA (https://www.nba.com) | ESPN NBA (https://www.espn.com/nba), The Athletic (https://www.nytimes.com/athletic) | United States; scores, schedules, transactions, reporting |
| EuroLeague | EuroLeague (https://www.euroleaguebasketball.net) | Eurohoops (https://www.eurohoops.net), BasketNews (https://basketnews.com) | Europe; competition and roster reporting |
| Spanish basketball / ACB | ACB (https://www.acb.com) | Eurohoops (https://www.eurohoops.net), Gigantes (https://www.gigantes.com) | Spain; fixtures, standings, league context |
| Formula 1 | Formula 1 (https://www.formula1.com), FIA (https://www.fia.com) | Autosport (https://www.autosport.com), BBC Sport F1 (https://www.bbc.com/sport/formula1) | Global; official results, rulings, race reporting |
| IndyCar | IndyCar (https://www.indycar.com) | RACER (https://racer.com), Motorsport.com (https://www.motorsport.com) | United States; results, schedules, paddock reporting |
| NFL | NFL (https://www.nfl.com) | ESPN NFL (https://www.espn.com/nfl), AP NFL (https://apnews.com/hub/nfl) | United States; transactions, schedule, games |
| College football | NCAA (https://www.ncaa.com), Big Ten (https://bigten.org) | ESPN college football (https://www.espn.com/college-football), The Athletic (https://www.nytimes.com/athletic) | United States; rules, conference, reporting |
| MLS | MLS (https://www.mlssoccer.com) | The Athletic MLS (https://www.nytimes.com/athletic), ESPN soccer (https://www.espn.com/soccer) | United States / Canada; matches and league context |
| La Liga | LaLiga (https://www.laliga.com) | Reuters sport (https://www.reuters.com/lifestyle/sports), ESPN soccer (https://www.espn.com/soccer) | Spain; fixtures, results, reporting |
| Premier League | Premier League (https://www.premierleague.com) | BBC Sport football (https://www.bbc.com/sport/football), Reuters sport (https://www.reuters.com/lifestyle/sports) | England; fixtures, results, reporting |

## Followed teams and clubs

| Assignment | Confirmed primary / official | Confirmed independent | Preferred use |
|---|---|---|---|
| Ohio State football | Ohio State (https://ohiostatebuckeyes.com), Big Ten (https://bigten.org) | Eleven Warriors (https://www.elevenwarriors.com), The Athletic (https://www.nytimes.com/athletic) | Team announcements, roster, schedule, camp |
| Manchester City | Manchester City (https://www.mancity.com), Premier League (https://www.premierleague.com) | BBC Sport (https://www.bbc.com/sport/football), The Athletic (https://www.nytimes.com/athletic) | Club news, fixtures, confirmed moves |
| Real Madrid | Real Madrid (https://www.realmadrid.com), LaLiga (https://www.laliga.com) | Reuters sport (https://www.reuters.com/lifestyle/sports), ESPN soccer (https://www.espn.com/soccer) | Club news, fixtures, confirmed moves |
| Valencia Basket | Valencia Basket (https://www.valenciabasket.com), ACB (https://www.acb.com) | Eurohoops (https://www.eurohoops.net), BasketNews (https://basketnews.com) | Club news, roster, schedule |
| Columbus Crew | Columbus Crew (https://www.columbuscrew.com), MLS (https://www.mlssoccer.com) | The Athletic MLS (https://www.nytimes.com/athletic), ESPN soccer (https://www.espn.com/soccer) | Club news, roster, schedule |

For sports fallback searches add `rumor`, `reported`, or `official` only when needed. A rumor-watch card needs two reputable independent reports and explicit attribution; do not elevate an unconfirmed social post.

## Events

| Assignment | Confirmed primary / official | Confirmed independent | Geography / preferred use |
|---|---|---|---|
| Valencia social calendar | Visit València (https://www.visitvalencia.com), Ajuntament de València (https://www.valencia.es) | Valencia Secreta (https://valenciasecreta.com), Time Out Valencia (https://www.timeout.com/valencia) | Valencia; dates, venues, access, current status |
| EU video-game events | Gamescom (https://www.gamescom.global), European Game Developer Federation (https://www.egdf.eu) | Eurogamer (https://www.eurogamer.net), IGN Europe (https://www.ign.com) | EU; conventions, showcases, esports, developer events |

Fallback patterns: `city event date venue official`, `event name tickets official`, and `Europe games convention date official`. Verify that the event has not passed or been cancelled.

## Finance

| Assignment | Confirmed primary / official | Confirmed independent | Preferred use |
|---|---|---|---|
| Finance-USA | Federal Reserve (https://www.federalreserve.gov), NYSE (https://www.nyse.com), Nasdaq (https://www.nasdaq.com) | Reuters Markets (https://www.reuters.com/markets), AP Business (https://apnews.com/hub/business) | USA movement and primary driver; use an as-of timestamp |
| Finance-EU | ECB (https://www.ecb.europa.eu), Euronext (https://www.euronext.com), Eurostat (https://ec.europa.eu/eurostat) | Reuters Markets (https://www.reuters.com/markets), Financial Times Markets (https://www.ft.com/markets) | EU movement and primary driver; use official data first |
| Finance-Asia | Bank of Japan (https://www.boj.or.jp/en), HKEX (https://www.hkex.com.hk), SGX (https://www.sgx.com) | Reuters Markets (https://www.reuters.com/markets), Nikkei Asia (https://asia.nikkei.com) | Regional movement and driver; name the markets represented |

Finance fallback patterns: `index movement as of date`, `central bank statement date`, `market driver Reuters date`, and `site:official-domain data`. Never convert market description into investment advice.

## Assignment overrides: optional context and fallback

These are optional context sources and query patterns for the matching confirmed entry above. They do not replace the primary-plus-independent minimum.

- International — analysis/viewpoint: Council on Foreign Relations (https://www.cfr.org); fallback: `international development site:un.org date`.
- Ohio — analysis/viewpoint: Ohio State University research (https://www.osu.edu); fallback: `Ohio issue official announcement date`.
- United States — analysis/viewpoint: Brookings (https://www.brookings.edu), Cato Institute (https://www.cato.org); fallback: `US agency announcement date Reuters AP`.
- Valencia, Spain — analysis/viewpoint: Valencia Plaza (https://valenciaplaza.com); fallback: `Valencia city council announcement date local impact`.
- Spain — analysis/viewpoint: Real Instituto Elcano (https://www.realinstitutoelcano.org); fallback: `Spain ministry data date Reuters`.
- European Union — analysis/viewpoint: Bruegel (https://www.bruegel.org), European Parliament Research Service (https://www.europarl.europa.eu/thinktank); fallback: `EU institution regulation date Reuters`.
- NBA — analysis/viewpoint: Basketball Reference (https://www.basketball-reference.com); fallback: `NBA team transaction official date`.
- EuroLeague — analysis/viewpoint: BasketNews (https://basketnews.com); fallback: `EuroLeague club announcement date`.
- Spanish basketball / ACB — analysis/viewpoint: Gigantes (https://www.gigantes.com); fallback: `ACB club signing schedule date`.
- Formula 1 — analysis/viewpoint: The Race (https://www.the-race.com); fallback: `F1 FIA statement race date`.
- IndyCar — analysis/viewpoint: RACER (https://racer.com); fallback: `IndyCar official result race date`.
- NFL — analysis/viewpoint: Pro Football Reference (https://www.pro-football-reference.com); fallback: `NFL team transaction official date`.
- College football — analysis/viewpoint: The Athletic (https://www.nytimes.com/athletic); fallback: `college football conference announcement date`.
- MLS — analysis/viewpoint: The Athletic (https://www.nytimes.com/athletic); fallback: `MLS club match official date`.
- La Liga — analysis/viewpoint: The Athletic (https://www.nytimes.com/athletic); fallback: `LaLiga club announcement official date`.
- Premier League — analysis/viewpoint: The Athletic (https://www.nytimes.com/athletic); fallback: `Premier League club statement official date`.
- Ohio State football — analysis/viewpoint: Eleven Warriors (https://www.elevenwarriors.com); fallback: `Ohio State football official roster schedule date`.
- Manchester City — analysis/viewpoint: The Athletic (https://www.nytimes.com/athletic); fallback: `Manchester City official announcement date`.
- Real Madrid — analysis/viewpoint: The Athletic (https://www.nytimes.com/athletic); fallback: `Real Madrid official announcement date`.
- Valencia Basket — analysis/viewpoint: Eurohoops (https://www.eurohoops.net); fallback: `Valencia Basket official roster schedule date`.
- Columbus Crew — analysis/viewpoint: The Athletic (https://www.nytimes.com/athletic); fallback: `Columbus Crew official match roster date`.
- Valencia social calendar — analysis/viewpoint: Valencia Secreta (https://valenciasecreta.com); fallback: `Valencia event venue tickets date`.
- EU video-game events — analysis/viewpoint: Eurogamer (https://www.eurogamer.net); fallback: `Europe games convention official tickets date`.
- Finance-USA — analysis/viewpoint: Financial Times Markets (https://www.ft.com/markets); fallback: `US index move market driver as of date`.
- Finance-EU — analysis/viewpoint: Financial Times Markets (https://www.ft.com/markets); fallback: `European index move ECB driver as of date`.
- Finance-Asia — analysis/viewpoint: Nikkei Asia (https://asia.nikkei.com); fallback: `Asia markets move China yen driver as of date`.
