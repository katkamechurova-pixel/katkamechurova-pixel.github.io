
import { FIXED_FEE, KILOMETER_FEE } from './constants'

export interface LocationData {
  name: string;
  slug: string;
  pageSlug: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  serviceTitle: string;
  description: string;
  localParks: string;
  specificFocus: string;
  uniqueText: string;
  localTip: string;
  keywords: string[];
  distanceKm: number;
  neighbors: string[];
}



export function calcTransport(distanceKm: number): number {
  return FIXED_FEE + distanceKm * KILOMETER_FEE;
}

export const locations: LocationData[] = [
  {
    name: "Říčany",
    slug: "ricany",
    pageSlug: "veterinar-ricany",
    seoTitle: "Očkování psů a koček Říčany | Výjezdový veterinář Ducktorka",
    metaDescription:
      "Výjezdová veterinářka MVDr. Kateřina Měchurová – očkování psů a koček přímo u vás v Říčanech. Bez stresu z čekárny, dojezd do 25 minut.",
    h1: "Očkování vašich mazlíčků přímo u vás v Říčanech",
    serviceTitle: "Očkování psů a koček",
    description: "Bohatá rezidenční zástavba, vysoký migrační zisk z Prahy.",
    localParks: "Japonská zahrada Aizen, blízkost Průhonického parku.",
    specificFocus:
      "prevenci proti klíšťatům, která jsou v blízkosti říčanských lesů a rybníků velmi aktivní",
    uniqueText:
      "Říčany jsou rájem pejskařů. Aby byl váš pes v bezpečí i na procházkách v okolí Jurečku a Průhonického parku, zajistíme pravidelnou vakcinaci moderními vakcínami Nobivac v klidu vašeho domova. Nemusíte nikam jezdit – přijedeme za vámi.",
    localTip:
      "Říčany jsou obklopeny lesy a rybníky. Při výjezdech zde pravidelně řešíme prevenci proti parazitům, kteří se v místní zeleni aktivně vyskytují – zejména v jarních a letních měsících.",
    keywords: ["očkování psů Říčany", "vakcinace koček Říčany", "veterinář Říčany"],
    distanceKm: 29,
    neighbors: ["jesenice", "pruhonice", "strancice", "mnichovice"],
  },
  {
    name: "Jesenice",
    slug: "jesenice",
    pageSlug: "veterinar-jesenice",
    seoTitle: "Veterinář Jesenice | Mobilní péče a ošetření Ducktorka",
    metaDescription:
      "Výjezdová veterinářka MVDr. Měchurová nabízí preventivní prohlídky a ošetření přímo u vás v Jesenici. Bez čekání, bez stresu.",
    h1: "Výjezdový veterinář pro Jesenici a okolí",
    serviceTitle: "Preventivní prohlídka",
    description: "Moderní satelitní město, vysoká koncentrace rodin se psy.",
    localParks: "Oplocený psí park v ul. Zdiměřická s agility prvky.",
    specificFocus: "preventivní péči pro aktivní psy a rodinné mazlíčky",
    uniqueText:
      "V Jesenici u Prahy se rychle rozrůstají nové rezidenční čtvrti plné rodin se psy a kočkami. Nabízíme rychlou pomoc a preventivní prohlídky bez stresu. Ideální volba pro nové majitele štěňat, kteří chtějí, aby si jejich mazlíček na veterináře zvykl v klidném domácím prostředí.",
    localTip:
      "V rychle se rozvíjející Jesenici přibývá nových majitelů štěňat. Nabízíme socializační prohlídky u vás doma – aby si štěně na veterináře zvyklo v bezpečí svého prostředí a nemělo z ošetření trauma.",
    keywords: ["veterinář Jesenice", "mobilní ošetření Jesenice", "veterina Jesenice"],
    distanceKm: 34,
    neighbors: ["ricany", "pruhonice", "dolni-brezany", "cernosice"],
  },
  {
    name: "Benešov",
    slug: "benesov",
    pageSlug: "veterinar-benesov",
    seoTitle: "Veterinář Benešov | Mobilní veterina Ducktorka – výjezd zdarma",
    metaDescription:
      "MVDr. Kateřina Měchurová sídlí v Benešově. Komplexní veterinární péče doma bez dopravního příplatku. Zavolejte ještě dnes.",
    h1: "Mobilní veterinární ambulance v Benešově a okolí",
    serviceTitle: "Veterinární výjezd",
    description: "Domovská lokalita, nutnost upevnění pozice č. 1.",
    localParks: "Konopišťský park a rybník, vysoká hustota chovatelů.",
    specificFocus: "rychlou dostupnost a komplexní péči přímo v místě našeho působení",
    uniqueText:
      "V Benešově a okolí poskytujeme kompletní veterinární péči s výjezdem. Nemusíte své mazlíčky stresovat cestou na kliniku – přijedeme přímo k vašim dveřím. Jako místní veterinářka dobře znám specifika zdejšího prostředí i to, co vaše zvíře potřebuje.",
    localTip:
      "V okolí zámku Konopiště a konopišťských lesů je vysoká koncentrace psů v přírodě. Nezapomínejte na pravidelné odčervení a ochranu proti klíšťatům, která jsou v parcích i lesích kolem Benešova celosezónně aktivní.",
    keywords: ["veterinář Benešov", "veterina domů Benešov", "ošetření zvířat Benešov"],
    distanceKm: 0,
    neighbors: ["tynec-nad-sazavou", "vlasim", "pysely", "cercany"],
  },
  {
    name: "Černošice",
    slug: "cernosice",
    pageSlug: "veterinar-cernosice",
    seoTitle: "Veterinář Černošice | Diskrétní mobilní veterinární péče Ducktorka",
    metaDescription:
      "Komfortní a diskrétní veterinární péče s výjezdem do Černošic. MVDr. Měchurová – péče šitá na míru náročným chovatelům.",
    h1: "Komfortní veterinární péče u vás doma v Černošicích",
    serviceTitle: "Výjezdová veterina",
    description: "Prestižní lokalita u Prahy, náročná klientela vyžadující komfort.",
    localParks: "Blízkost CHKO Český kras, silná komunita chovatelů.",
    specificFocus: "diskrétní a vysoce komfortní služby šité na míru náročným chovatelům",
    uniqueText:
      "Černošice jsou prestižní lokalitou s náročnou klientelou, která si cení soukromí a individuálního přístupu. Naše mobilní praxe je ideální volbou – přivezeme vybavenou ambulanci přímo k vám, bez čekáren a anonymního prostředí.",
    localTip:
      "V blízkosti CHKO Český kras a lesů u Berounky se pohybuje mnoho psů v přírodním terénu. Doporučujeme pravidelnou kontrolu a antiparazitární ochranu – klíšťata jsou v krásové krajině aktivní po celou sezónu.",
    keywords: ["veterinář Černošice", "mobilní veterina Černošice", "ošetření psa Černošice"],
    distanceKm: 52,
    neighbors: ["jesenice", "dolni-brezany", "mnisek-pod-brdy", "pruhonice"],
  },
  {
    name: "Mnichovice",
    slug: "mnichovice",
    pageSlug: "veterinar-mnichovice",
    seoTitle: "Veterinář Mnichovice | Výjezdová veterinární péče Ducktorka",
    metaDescription:
      "Rodinná veterinární péče s výjezdem do Mnichovic. MVDr. Měchurová – klidné ošetření mazlíčků v domácím prostředí.",
    h1: "Rodinná veterinární péče s výjezdem do Mnichovic",
    serviceTitle: "Preventivní péče",
    description: "Obec s dobrou dostupností z Benešova, rodinný charakter bydlení.",
    localParks: "Zámek Berchtold s parkem miniatur v blízkosti.",
    specificFocus: "rodinný přístup a pohodlné vyšetření v klidném domácím prostředí",
    uniqueText:
      "V Mnichovicích a blízkém okolí nabízíme rodinný přístup ke každému mazlíčkovi. Klidné prostředí rodinných domů je ideální pro ošetření úzkostných nebo nemocných zvířat, která špatně snáší přesun do ordinace.",
    localTip:
      "Mnichovice leží v krásné přírodě nedaleko zámku Berchtold. Při výjezdech v této oblasti se zaměřujeme na prevenci klíšťat a sezónní antiparazitární ochranu, zejména pro psy, kteří se pohybují v okolní zeleni.",
    keywords: ["veterinář Mnichovice", "veterina Mnichovice", "preventivní péče pes Mnichovice"],
    distanceKm: 21,
    neighbors: ["ricany", "senohraby", "strancice", "kamenice"],
  },
  {
    name: "Průhonice",
    slug: "pruhonice",
    pageSlug: "cipovani-pruhonice",
    seoTitle: "Čipování psů a koček Průhonice | Ducktorka.cz",
    metaDescription:
      "Čipování a vystavení pasu pro psa či kočku přímo u vás v Průhonicích. MVDr. Měchurová – bez čekárny, zákonná povinnost vyřízena doma.",
    h1: "Čipování a vystavení pasu u vás doma v Průhonicích",
    serviceTitle: "Čipování a pasy",
    description: "Elitní rezidenční lokalita, symbol kvality a luxusu.",
    localParks: "Světově unikátní Průhonický park (UNESCO).",
    specificFocus: "špičkovou preventivní péči pro zvířata, která jsou plnohodnotnými členy rodiny",
    uniqueText:
      "V Průhonicích zajistíme čipování i vystavení mezinárodního cestovního pasu pro vašeho mazlíčka bez čekání v ordinaci a zbytečného stresu. Splnění zákonné povinnosti si vyřídíte u kávy ve vlastním obývacím pokoji.",
    localTip:
      "Průhonický park je pro psy uzavřen, ale okolní cesty jsou oblíbenými trasami místních pejskařů. Čipování je od roku 2024 zákonnou povinností pro psy – vyřídíme ho u vás doma rychle a bezbolestně.",
    keywords: ["čipování psů Průhonice", "pas pro psa Průhonice", "veterinář Průhonice"],
    distanceKm: 33,
    neighbors: ["ricany", "jesenice", "dolni-brezany", "cernosice"],
  },
  {
    name: "Jílové u Prahy",
    slug: "jilove-u-prahy",
    pageSlug: "veterinar-jilove-u-prahy",
    seoTitle: "Veterinář Jílové u Prahy | Mobilní veterinární výjezd Ducktorka",
    metaDescription:
      "Výjezdová veterinářka s péčí o rekreační psy v Jílovém u Prahy. Ošetření poranění z terénu i preventivní péče přímo u vás.",
    h1: "Veterinární péče s výjezdem do Jílového u Prahy",
    serviceTitle: "Péče o rekreační psy",
    description: "Historické město v Posázaví, vysoký podíl rekreačních objektů.",
    localParks: "Naučné stezky, Jílovské zlaté doly, outdoorové aktivity.",
    specificFocus: "ošetření případných poranění z přírody a kvalitní ochranu před parazity",
    uniqueText:
      "Jílové u Prahy a jeho posázavské okolí jsou oblíbenou destinací pejskařů i chalupářů. Nabízíme ošetření případných poranění z terénu i preventivní péči – přijedeme za vámi přímo do vašeho domu nebo na chatu.",
    localTip:
      "Oblast Posázaví kolem Jílového je rájem pro outdoorové aktivity. Naučné stezky a terény v okolí zlatodolů jsou krásné, ale pro psy znamenají zvýšené riziko poranění i napadení parazity. Prevence se vyplatí.",
    keywords: ["veterinář Jílové u Prahy", "mobilní vet Jílové", "ošetření psa Posázaví"],
    distanceKm: 24,
    neighbors: ["sazava", "tynec-nad-sazavou", "dolni-brezany"],
  },
  {
    name: "Vlašim",
    slug: "vlasim",
    pageSlug: "veterinar-vlasim",
    seoTitle: "Veterinář Vlašim | Mobilní veterinární ambulance Ducktorka",
    metaDescription:
      "Výjezdová veterinářka MVDr. Měchurová ve Vlašimi – bezstresové ošetření koček a psů přímo doma. Dojezd z Benešova do 20 minut.",
    h1: "Výjezdový veterinář pro Vlašim a blízké okolí",
    serviceTitle: "Mobilní veterinář",
    description: "Regionální centrum na jihovýchodě od Benešova.",
    localParks: "Rozsáhlý zámecký park, vysoký počet chovatelů koček v bytech.",
    specificFocus: "bezstresové ošetření koček v jejich domácím teritoriu bez nutnosti transportu",
    uniqueText:
      "Ve Vlašimi nabízíme kompletní veterinární péči s výjezdem. Specializujeme se na bezstresové ošetření koček – kočky transport a cizí prostředí zvláště špatně snáší. V jejich domácím teritoriu jsou klidnější a vyšetření proběhne hladce.",
    localTip:
      "Ve Vlašimi je vysoký počet chovatelů koček v bytech poblíž zámeckého parku. Naše mobilní praxe je pro ně ideální: kočka zůstane v bezpečí svého prostoru, stres ze čtenáren ordinace odpadá úplně.",
    keywords: ["veterinář Vlašim", "veterina domů Vlašim", "ošetření kočky Vlašim"],
    distanceKm: 22,
    neighbors: ["benesov", "votice"],
  },
  {
    name: "Týnec nad Sázavou",
    slug: "tynec-nad-sazavou",
    pageSlug: "veterinar-tynec-nad-sazavou",
    seoTitle: "Veterinář Týnec nad Sázavou | Výjezdová veterinární péče Ducktorka",
    metaDescription:
      "Mobilní veterinář v Týnci nad Sázavou – ošetření poranění a prevence pro psy u řeky. MVDr. Měchurová, dojezd z Benešova do 15 minut.",
    h1: "Mobilní veterinář v Týnci nad Sázavou",
    serviceTitle: "Ošetření a prevence u řeky",
    description: "Vodácké centrum, riziko úrazů psů u řeky.",
    localParks: "Hrad Týnec, blízkost kempů a rekreačních oblastí.",
    specificFocus: "ošetření drobných poranění a prevenci u psů, kteří tráví čas u řeky",
    uniqueText:
      "Týnec nad Sázavou je oblíbeným vodáckým centrem. Aktivní psi trávící čas u řeky, v kempech a rekreačních oblastech jsou náchylnější k drobným poraněním i parazitickým infekcím.",
    localTip:
      "V okolí hradu Týnec a na březích Sázavy se pohybuje mnoho psů. Aktivní pohyb u vody přináší riziko zranění, proniknutí cizích těles do tlapek nebo napadení vodními parazity. Prevence a rychlé ošetření jsou klíčové.",
    keywords: ["veterinář Týnec nad Sázavou", "veterina Týnec", "ošetření psa řeka Sázava"],
    distanceKm: 12,
    neighbors: ["benesov", "cercany", "senohraby", "sazava"],
  },
  {
    name: "Pyšely",
    slug: "pysely",
    pageSlug: "veterinar-pysely",
    seoTitle: "Veterinář Pyšely | Mobilní ošetření zvířat a odběry krve Ducktorka",
    metaDescription:
      "Výjezdová veterinářka v Pyšelích – odběry krve a laboratorní diagnostika přímo u vás. Screening starších psů v pohodlí domova.",
    h1: "Mobilní veterinární lékař pro Pyšely",
    serviceTitle: "Odběry krve a diagnostika",
    description: "Rezidenční oblast s vysokou koncentrací koní a farem.",
    localParks: "Jezdecký areál Čtyřkolák, Stáj Tesárek v Barochově.",
    specificFocus: "schopnost ošetřit psa přímo v areálu stáje, což je ideální pro majitele koní",
    uniqueText:
      "Pyšely a jejich okolní kopce dobře známe. Přijedeme k vám na odběry krve pro laboratorní diagnostiku nebo preventivní screening starších zvířat. Pro majitele koní, kteří chovají i psy, nabízíme možnost ošetření přímo v areálu stáje.",
    localTip:
      "V Pyšelích se pravidelně setkáváme se staršími psy v rodinných domcích. Pravidelné odběry krve pomáhají včas zachytit onemocnění ledvin, jater nebo cukrovky – u psů starších 7 let doporučujeme roční biochemický screening.",
    keywords: ["veterinář Pyšely", "veterina Pyšely", "odběry krve pes Pyšely"],
    distanceKm: 15,
    neighbors: ["benesov", "senohraby", "cercany", "mnichovice"],
  },
  {
    name: "Kamenice",
    slug: "kamenice",
    pageSlug: "veterinar-kamenice",
    seoTitle: "Veterinář Kamenice | Mobilní veterinární péče Ducktorka",
    metaDescription:
      "Veterinární péče s výjezdem do Kamenice – ošetření uší a očí po pohybu v lese. MVDr. Měchurová, antiparazitární ochrana pro psy v lesním terénu.",
    h1: "Veterinární péče u vás doma v Kamenici",
    serviceTitle: "Ošetření uší a očí",
    description: "Obec uprostřed lesů, vysoký tlak na prevenci (klíšťata).",
    localParks: "Rozhledna Ládví, Zámek Štiřín s parkem a rhododendrony.",
    specificFocus: "důslednou antiparazitární ochranu v oblastech obklopených rozsáhlými lesy",
    uniqueText:
      "Kamenice je obklopena rozsáhlými lesy, které jsou sice krásné, ale zvyšují riziko napadení klíšťaty nebo zanesení osiny do uší. Přijedeme k vám domů a ošetříme vašeho mazlíčka bez zbytečného stresu z cesty do ordinace.",
    localTip:
      "V Kamenici a okolí se pravidelně setkáváme s loveckými plemeny a aktivními psy. Po pohybu v hustém podrostu se zaměřujeme na kontrolu uší, očí a meziprstí – ideální místa pro usazení cizích těles a parazitů.",
    keywords: ["veterinář Kamenice", "ošetření psa Kamenice", "veterina Kamenice"],
    distanceKm: 22,
    neighbors: ["mnichovice", "strancice", "velke-popovice", "ricany"],
  },
  {
    name: "Votice",
    slug: "votice",
    pageSlug: "veterinar-votice",
    seoTitle: "Veterinář Votice | Mobilní veterinární výjezd Ducktorka",
    metaDescription:
      "Výjezdová veterinářka ve Voticích – péče přizpůsobená chladnějšímu klimatu a psům žijícím venku. Dojezd z Benešova do 18 minut.",
    h1: "Výjezdový veterinář pro Votice a okolí",
    serviceTitle: "Mobilní veterinář",
    description: "Brána do tzv. České Sibiře, chladnější klima, specifická péče.",
    localParks: "Motýlárium, rozhledna Václavka, prodej krmiv v místě.",
    specificFocus: "specifické zdravotní potřeby psů žijících trvale venku i v chladnějším podnebí",
    uniqueText:
      "Do Votic a přilehlé oblasti přijíždíme s plně vybavenou mobilní ambulancí. Nabízíme péči přizpůsobenou místním podmínkám – specifickým potřebám psů žijících venku i v chladnějším klimatu zdejší krajiny.",
    localTip:
      "Votice jsou branami do takzvané České Sibiře s drsněji zimy. Pamatujte na péči o tlapky venkovních psů v zimním období a na dostatečnou výživu pro zvířata přebývající v exteriéru.",
    keywords: ["veterinář Votice", "veterina Votice", "mobilní vet Votice"],
    distanceKm: 20,
    neighbors: ["benesov", "vlasim"],
  },
  {
    name: "Senohraby",
    slug: "senohraby",
    pageSlug: "veterinar-senohraby",
    seoTitle: "Veterinář Senohraby | Výjezdová veterinární služba Ducktorka",
    metaDescription:
      "Veterinární péče s výjezdem do Senohrab – ošetření ran a chronických pacientů přímo doma nebo na chatě. MVDr. Měchurová.",
    h1: "Veterinární péče s výjezdem do Senohrab",
    serviceTitle: "Ošetření ran",
    description: "Rekreační oblast, oblíbený cíl pejskařů z Prahy.",
    localParks: "Zřícenina hradu Zlenice (Hláska) u řeky Sázavy.",
    specificFocus: "akutní i preventivní péči pro mazlíčky v rekreačních chatových oblastech",
    uniqueText:
      "Senohraby u Sázavy jsou oblíbenou rekreační oblastí. Nabízíme ošetření drobných poranění, převazy ran i péči o chronické pacienty přímo v pohodlí jejich domova nebo chaty – nemusíte kvůli ošetření urgentně odjíždět do města.",
    localTip:
      "Senohraby jsou oblíbenou chatovou lokalitou navštěvovanou pejskaři z celé Prahy. Pokud se váš pes zraní při běhání v lesním terénu u Sázavy, zavolejte – ošetříme ho přímo na vaší chatě.",
    keywords: ["veterinář Senohraby", "veterina Senohraby", "ošetření rány pes"],
    distanceKm: 18,
    neighbors: ["mnichovice", "cercany", "pysely", "tynec-nad-sazavou"],
  },
  {
    name: "Čerčany",
    slug: "cercany",
    pageSlug: "eutanazie-doma-cercany",
    seoTitle: "Eutanázie zvířat doma Čerčany | Důstojné rozloučení Ducktorka",
    metaDescription:
      "Domácí eutanazie psa nebo kočky v Čerčanech – důstojné a klidné rozloučení v domácím prostředí. MVDr. Měchurová přijede za vámi.",
    h1: "Důstojné uspání psa či kočky v domácím prostředí – Čerčany",
    serviceTitle: "Eutanázie doma",
    description: "Důležitý dopravní uzel v Posázaví, stabilní populace chovatelů.",
    localParks: "Řeka Sázava, zřícenina hradu Stará Dubá v okolí.",
    specificFocus: "dostupnou veterinární péči s ohledem na okolní přírodu a možnosti procházek",
    uniqueText:
      "V těžkých chvílích přijedeme za vámi do Čerčan, aby se váš věrný přítel mohl rozloučit v klidu a naprostém soukromí svého domova. Bez sterilní ordinace, bez čekárny, bez stresu. Jen v kruhu rodiny.",
    localTip:
      "Službu eutanázie v Čerčanech poskytujeme s maximální empatií a diskrétností. Váš mazlíček může odejít v jeho oblíbeném pelíšku v klidné atmosféře domova na břehu krásné Sázavy.",
    keywords: ["eutanázie doma Čerčany", "uspání psa doma", "veterinář Čerčany"],
    distanceKm: 12,
    neighbors: ["benesov", "senohraby", "tynec-nad-sazavou", "pysely"],
  },
  {
    name: "Mníšek pod Brdy",
    slug: "mnisek-pod-brdy",
    pageSlug: "veterinar-mnisek-pod-brdy",
    seoTitle: "Veterinář Mníšek pod Brdy | Výjezdová veterinární péče Ducktorka",
    metaDescription:
      "Mobilní veterinář v Mníšku pod Brdy – prevence a antiparazitární ochrana pro psy v brdských lesích. MVDr. Měchurová.",
    h1: "Mobilní veterinář v Mníšku pod Brdy",
    serviceTitle: "Prevence v lese",
    description: "Rychle rostoucí město pod brdskými hřebeny.",
    localParks: "Barokní areál Skalka, rozsáhlé lesy pro aktivní kynologii.",
    specificFocus: "prevenci úrazů a parazitů pro aktivní psy pohybující se v brdských lesích",
    uniqueText:
      "Mníšek pod Brdy rychle roste a nabízí krásné lesy pro aktivní psy. Přinášíme prevenci úrazů a antiparazitární ochranu přímo k vám – pro psy pohybující se v brdských hvozdech je pravidelná ochrana nezbytností.",
    localTip:
      "Lesy v okolí Brd jsou domovem mnoha parazitů. V blízkosti barokního areálu Skalka doporučujeme důslednou antiparazitární ochranu a pravidelné kontroly po výletech do přírody.",
    keywords: ["veterinář Mníšek pod Brdy", "veterina Mníšek", "antiparazitární ochrana Brdy"],
    distanceKm: 50,
    neighbors: ["cernosice", "dolni-brezany"],
  },
  {
    name: "Strančice",
    slug: "strancice",
    pageSlug: "veterinar-strancice",
    seoTitle: "Veterinář Strančice | Mobilní veterinární výjezd Ducktorka",
    metaDescription:
      "Preventivní veterinární péče ve Strančicích – výjezd MVDr. Měchurové přímo k vám. Ideální pro nové rodiny se štěňaty.",
    h1: "Preventivní veterinární péče ve Strančicích",
    serviceTitle: "Preventivní prohlídka",
    description: "Obec s dynamickou výstavbou, dobrá dostupnost z D1.",
    localParks: "Průmyslová a rezidenční zóna, rostoucí potřeba preventivní péče.",
    specificFocus: "pravidelnou preventivní péči a očkování v pohodlí rychle se rozvíjející obce",
    uniqueText:
      "Strančice se rychle rozvíjejí a přibývá zde rodin se psy. Nabízíme pravidelnou preventivní péči a očkování s pohodlným výjezdem. Nové rodiny ocení naše socializační prohlídky štěňat v domácím prostředí.",
    localTip:
      "Strančice mají výbornou dostupnost z D1. Dynamicky rostoucí zástavba přináší stále více nových majitelů psů – nabízíme flexibilní termíny výjezdů přizpůsobené pracovnímu vytížení moderních rodin.",
    keywords: ["veterinář Strančice", "veterina Strančice", "prevence pes Strančice"],
    distanceKm: 26,
    neighbors: ["ricany", "kamenice", "mnichovice", "velke-popovice"],
  },
  {
    name: "Velké Popovice",
    slug: "velke-popovice",
    pageSlug: "veterinar-velke-popovice",
    seoTitle: "Veterinář Velké Popovice | Mobilní veterina a vakcinace Ducktorka",
    metaDescription:
      "Výjezdový veterinář ve Velkých Popovicích – vakcinace a preventivní péče přímo u vás doma. MVDr. Měchurová.",
    h1: "Veterinář s výjezdem do Velkých Popovic",
    serviceTitle: "Vakcinace",
    description: "Region s tradicí a rozsáhlými pastvinami.",
    localParks: "Pastviny Řepčice pro koně, vysoká pet-density v rodinných domech.",
    specificFocus: "ošetření hlídacích psů i domácích mazlíčků přímo u prostorných rodinných domů",
    uniqueText:
      "Ošetření zvířat přímo u vás doma ve Velkých Popovicích – ušetřete čas i nervy svým miláčkům díky naší mobilní ordinaci. Dojedeme za vámi, vy nemusíte nikam odjíždět.",
    localTip:
      "V okolí Velkých Popovic a tamního parku je zvýšené riziko přenosu infekcí od divoké zvěře. Doporučujeme pravidelné očkování proti leptospiróze, zejména pro psy pohybující se v blízkosti pastvin a vodních ploch.",
    keywords: ["veterinář Velké Popovice", "vakcinace pes Popovice", "veterina domů Popovice"],
    distanceKm: 28,
    neighbors: ["strancice", "kamenice", "pysely"],
  },
  {
    name: "Dolní Břežany",
    slug: "dolni-brezany",
    pageSlug: "veterinar-dolni-brezany",
    seoTitle: "Veterinář Dolní Břežany | Moderní mobilní veterinární péče Ducktorka",
    metaDescription:
      "Moderní diagnostika a veterinární péče s výjezdem do Dolních Břežan. Ultrazvuk přímo u vás. MVDr. Měchurová.",
    h1: "Moderní veterinární péče pro Dolní Břežany",
    serviceTitle: "Moderní diagnostika",
    description: "Moderní vědecké a výzkumné centrum, mladé rodiny.",
    localParks: "Rozhledna Závist, keltské oppidum, vysoký nárok na kvalitu služeb.",
    specificFocus: "moderní diagnostiku a vysoký standard péče s důrazem na minimalizaci stresu zvířete",
    uniqueText:
      "Dolní Břežany jsou moderním centrem s náročnou klientelou z vědeckého a tech prostředí. Přinášíme diagnostiku na vysoké úrovni, včetně ultrazvukového vyšetření přenosným přístrojem, přímo do vašeho domova.",
    localTip:
      "V blízkosti rozhledny Závist a keltského oppida se pohybuje mnoho aktivních psů. Mladé rodiny z Dolních Břežan oceňují naši schopnost domluvit výjezd flexibilně, i ve večerních hodinách.",
    keywords: ["veterinář Dolní Břežany", "sono pes Dolní Břežany", "veterina Dolní Břežany"],
    distanceKm: 40,
    neighbors: ["pruhonice", "jesenice", "cernosice", "mnisek-pod-brdy"],
  },
  {
    name: "Sázava",
    slug: "sazava",
    pageSlug: "veterinar-sazava",
    seoTitle: "Veterinář Sázava | Výjezdová veterinární péče Ducktorka",
    metaDescription:
      "Mobilní veterinář pro Sázavu a okolí – ošetření aktivních psů a prevence po pohybu u řeky. MVDr. Měchurová.",
    h1: "Mobilní veterinář pro Sázavu a okolí",
    serviceTitle: "Ošetření aktivních psů",
    description: "Město sklářství a turistiky u stejnojmenné řeky.",
    localParks: "Psí hřiště na Tyršově nábřeží (vhodné pro agility).",
    specificFocus: "ošetření drobných úrazů ze psího hřiště a aktivního pohybu u vody",
    uniqueText:
      "Sázava je centrem turistiky s oblíbeným psím hřištěm na Tyršově nábřeží. Po intenzivním agility tréninku nebo výletech podél řeky nabízíme preventivní kontrolu i ošetření případných zranění přímo u vás.",
    localTip:
      "Psí hřiště na Tyršově nábřeží je oblíbeným místem setkávání majitelů psů. Doporučujeme pravidelnou preventivní kontrolu kloubů a kondice, zejména u psů, kteří agility trénují pravidelně.",
    keywords: ["veterinář Sázava", "veterina Sázava", "ošetření psa řeka Sázava"],
    distanceKm: 32,
    neighbors: ["tynec-nad-sazavou", "jilove-u-prahy"],
  },
  {
    name: "Karlín",
    slug: "karlin",
    pageSlug: "veterinar-praha-8",
    seoTitle: "Veterinář Praha 8 | Mobilní veterinární péče Ducktorka",
    metaDescription:
      "Výjezdová veterinářka v Praze 8 – Karlín, Libeň, Kobylisy, Bohnice. Ideální pro stresované kočky ze sídlišť. MVDr. Měchurová.",
    h1: "Veterinární péče v pohodlí domova v Praze 8",
    serviceTitle: "Mobilní veterinář",
    description: "Specifická městská čtvrť, základna u Invalidovny.",
    localParks: "Parky u Invalidovny, omezené parkování (výhoda mobilní praxe).",
    specificFocus:
      "výhodu v podobě snadného parkování a přístupu přímo k vám, bez nutnosti přepravy mazlíčka",
    uniqueText:
      "Naše výjezdy v Praze 8 pokrývají Libeň, Bohnice, Kobylisy i Karlín. Jsme ideální volbou pro stresované kočky z velkých sídlišť, které špatně snáší transport v přepravce – k ním přijdeme my, ne ony k nám.",
    localTip:
      "V oblasti Prahy 8 doporučujeme zvýšenou opatrnost v zimě kvůli posypové soli na chodnících v Kobylisích a Bohnicích, která může dráždit tlapky psů. Pravidelná kontrola a promazání tlapek v zimních měsících je důležitá.",
    keywords: ["veterinář Praha 8", "mobilní veterina Praha 8", "ošetření psa doma Praha 8"],
    distanceKm: 45,
    neighbors: [],
  },
];
