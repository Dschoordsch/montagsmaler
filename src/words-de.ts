const words = [
  'Adler',
  'Affe',
  'Ahorn',
  'Alien',
  'Ameise',
  'Ameisenhaufen',
  'Ananas',
  'Apfel',
  'Apfelbaum',
  'Aprikose',
  'Armbanduhr',
  'Astronaut',
  'Aubergine',
  'Auto',
  'Avocado',
  'Balkon',
  'Ball',
  'Balletttänzerin',
  'Banane',
  'Baum',
  'Berg',
  'Berge',
  'Bett',
  'Biene',
  'Birke',
  'Birne',
  'Blitz',
  'Blume',
  'Blumentopf',
  'Bohnen',
  'Bommelmütze',
  'Bonbon',
  'Bratwurst',
  'Briefmarke',
  'Briefumschlag',
  'Brille',
  'Brokkoli',
  'Brücke',
  'Buch',
  'Bücherwurm',
  'Bügeleisen',
  'Champignon',
  'Clown',
  'Computer',
  'Cowboy',
  'Delfin',
  'Delphin',
  'Detektiv',
  'Dinosaurier',
  'Donner',
  'Drache',
  'Dschungel',
  'Eiche',
  'Eichhörnchen',
  'Eidechse',
  'Einhorn',
  'Eisberg',
  'Eisbär',
  'Eiscreme',
  'Eiszapfen',
  'Elefant',
  'Engel',
  'Erbsen',
  'Erdbeere',
  'Esel',
  'Eule',
  'Fahrrad',
  'Faultier',
  'Fee',
  'Feige',
  'Fensterbank',
  'Fernseher',
  'Feuerwehrauto',
  'Feuerwerk',
  'Fisch',
  'Flamingo',
  'Fledermaus',
  'Fliege',
  'Flugzeug',
  'Fluss',
  'Friseur',
  'Frosch',
  'Fuchs',
  'Fußball',
  'Fußballfeld',
  'Garage',
  'Gepard',
  'Gespenst',
  'Gewitter',
  'Giraffe',
  'Gitarre',
  'Globus',
  'Glühbirne',
  'Gorilla',
  'Granatapfel',
  'Gras',
  'Gurke',
  'Hai',
  'Hamster',
  'Handschuh',
  'Hase',
  'Haus',
  'Haustür',
  'Heidelbeere',
  'Helikopter',
  'Herbst',
  'Hexe',
  'Himbeere',
  'Hochhaus',
  'Hummel',
  'Hund',
  'Hundehütte',
  'Höhle',
  'Igel',
  'Insel',
  'Kaffeetasse',
  'Kaktus',
  'Kamel',
  'Kamera',
  'Karotte',
  'Karte',
  'Kartenspiel',
  'Kartoffel',
  'Katze',
  'Kiefer',
  'Kirchturm',
  'Kirschblüte',
  'Kirsche',
  'Kiwi',
  'Kleeblatt',
  'Knochen',
  'Koala',
  'Kokosnuss',
  'Kolibri',
  'Kompass',
  'Kopf',
  'Krabbe',
  'Krokodil',
  'Kuchen',
  'Kuh',
  'Känguru',
  'Kürbis',
  'Laptop',
  'Lauch',
  'Leuchtturm',
  'Libelle',
  'Lilie',
  'Lokomotive',
  'Luftballon',
  'Lupe',
  'Löffel',
  'Löwe',
  'Mais',
  'Mango',
  'Mantel',
  'Marienkäfer',
  'Maus',
  'Mauseloch',
  'Meer',
  'Mohnblume',
  'Mond',
  'Monster',
  'Muschel',
  'Nase',
  'Nebel',
  'Nixe',
  'Ohrring',
  'Orange',
  'Palme',
  'Panda',
  'Papagei',
  'Paprika',
  'Pferd',
  'Pferdestall',
  'Pfirsich',
  'Pilz',
  'Pinguin',
  'Pirat',
  'Planeten',
  'Pommes',
  'Prinzessin',
  'Puppe',
  'Qualle',
  'Radieschen',
  'Rakete',
  'Rapunzel',
  'Regen',
  'Regenbogen',
  'Regenjacke',
  'Regenschirm',
  'Regenwolke',
  'Rennwagen',
  'Riese',
  'Riesenrad',
  'Ritter',
  'Robbe',
  'Roboter',
  'Rose',
  'Salat',
  'Salzstange',
  'Schaf',
  'Schatzkarte',
  'Schatzkiste',
  'Schere',
  'Schiff',
  'Schildkröte',
  'Schlitten',
  'Schmetterling',
  'Schnecke',
  'Schnee',
  'Schneemann',
  'Schnuller',
  'Schokolade',
  'Schrank',
  'Schreibtisch',
  'Schubkarre',
  'Schulbus',
  'Schwan',
  'See',
  'Seehund',
  'Seepferdchen',
  'Seestern',
  'Segelboot',
  'Skateboard',
  'Sommer',
  'Sonne',
  'Sonnenblume',
  'Sonnenbrille',
  'Spargel',
  'Spinat',
  'Stehlampe',
  'Stern',
  'Sterne',
  'Sternenhimmel',
  'Strand',
  'Superheld',
  'Surfbrett',
  'Tausendfüßler',
  'Teekanne',
  'Telefon',
  'Teleskop',
  'Tiere',
  'Tiger',
  'Toilette',
  'Tomate',
  'Traktor',
  'Traube',
  'Trommel',
  'Tulpe',
  'Turnschuh',
  'U-Boot',
  'Uhr',
  'Vampir',
  'Vogelnest',
  'Vulkan',
  'Wald',
  'Waschbär',
  'Wasser',
  'Wasserfall',
  'Wasserhahn',
  'Wassermelone',
  'Weltraum',
  'Wind',
  'Winter',
  'Wolke',
  'Wüste',
  'Zahnarzt',
  'Zauberer',
  'Zaun',
  'Zitrone',
  'Zucchini',
  'Zug',
  'Zwerg',
  'Zwiebel',
]

export default words