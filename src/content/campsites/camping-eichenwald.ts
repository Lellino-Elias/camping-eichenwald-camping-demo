import type { CampsiteConfig } from "../types";

const IMG = "/campsites/camping-eichenwald";

const campingEichenwald: CampsiteConfig = {
  name: "Camping Eichenwald",
  shortName: "Eichenwald",
  slug: "camping-eichenwald",
  ort: "Stams",
  region: "Tirol",
  brandKind: "Camping in Tirol",
  regionLong: "Stams im Oberinntal · Tirol · Österreich",

  heroVariant: "center",

  claim: "Das kleine Paradies im Herzen Tirols",
  claimEmphasis: "im Herzen Tirols",
  emailDetail: "euer Panoramablick über das Inntal vom Gastgarten",
  intro:
    "Terrassierte Sonnen- und Schattenplätze, ein beheiztes Schwimmbad und die eigene Stamser Stub'n — eingebettet zwischen die Tiroler Berge, mit Ruhe, Panorama und kurzen Wegen.",

  logo: { src: `${IMG}/logo-46b0bdb51c.png`, alt: "Camping Eichenwald Logo" },

  statement: {
    text: "Vom Gastgarten reicht der Blick über das ganze Inntal bis hinauf zu den verschneiten Gipfeln.",
    emphasis: "über das ganze Inntal",
  },

  pillars: [
    {
      title: "Mitten in den Tiroler Bergen",
      text: "In Terrassen angelegt, ringsum Wald und Berge — das Panorama beginnt direkt am Stellplatz.",
      image: { src: `${IMG}/gallery-06e464bc47.webp`, alt: "Stellplätze am Camping Eichenwald mit weitem Panoramablick auf die Tiroler Berge" },
    },
    {
      title: "Beheiztes Schwimmbad",
      text: "Das eigene beheizte Schwimmbad lädt an warmen Tagen zum Abkühlen, Schwimmen und Sonnen ein.",
      image: { src: `${IMG}/gallery-29d9082fa0.webp`, alt: "Beheiztes Schwimmbad am Camping Eichenwald" },
    },
    {
      title: "Eigene Stamser Stub'n",
      text: "Regionale Küche und ein Gastgarten mit Weitblick über das Inntal — gleich am Platz.",
      image: { src: `${IMG}/gallery-23a991ec3c.webp`, alt: "Gastgarten der Stamser Stub'n mit Biergarten und roten Geranien" },
    },
  ],

  usps: [
    "Beheiztes Schwimmbad",
    "Terrassierte Stellplätze",
    "Eigenes Restaurant",
    "Brötchenservice & WLAN",
    "Hunde willkommen",
    "Spielplatz für Kinder",
  ],

  trust: {
    heading: "Warum Gäste immer wieder nach Stams kommen",
    headingEmphasis: "immer wieder",
    intro:
      "Persönlich geführt von Klara Zoller: moderne Sanitäranlagen, ein beheiztes Schwimmbad und die Stamser Stub'n mit offenem Kamin — dazu die Gäste.Card mit Gratis-Bus und Ermäßigungen in der Region.",
  },

  awards: [],

  saison: { von: "April", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/gallery-dba42e9358.webp`, alt: "Camping Eichenwald in Stams mit Blick auf die Tiroler Berge" },
  },

  breather: {
    image: { src: `${IMG}/gallery-72fd206947.webp`, alt: "Campingplatz Eichenwald mit Blick ins Inntal und auf die Tiroler Berge" },
    line: "Tiroler Bergpanorama, so weit das Auge reicht.",
  },

  camping: {
    heading: "Camping am Eichenwald",
    intro:
      "Sonnige und schattige Plätze, in Terrassen angelegt — für Zelt, Wohnwagen und Wohnmobil, mit Strom, WLAN und allem, was den Campingtag in Tirol entspannt macht.",
    features: [
      {
        title: "Sonnige & schattige Terrassenplätze",
        text: "Großzügige Plätze in Terrassen angelegt — für Zelt, Wohnwagen und Wohnmobil, sonnig oder schattig.",
        image: { src: `${IMG}/gallery-22e220d59e.webp`, alt: "Terrassierte Stellplätze am Camping Eichenwald mit Bergblick" },
      },
      {
        title: "Stellplätze mit Bergblick",
        text: "Viele Plätze öffnen sich direkt zum Panorama der verschneiten Tiroler Gipfel — morgens inklusive.",
        image: { src: `${IMG}/gallery-5709493d9b.webp`, alt: "Stellplätze mit Panoramablick auf die Tiroler Berge und das Inntal" },
      },
      {
        title: "Gemütliche Kaminstube",
        text: "Im rustikalen Lokal mit offenem Kamin und Weinstube sitzt du auch an kühlen Abenden warm.",
        image: { src: `${IMG}/gallery-5dda72c077.webp`, alt: "Gemütliche Stub'n mit rustikaler Holzeinrichtung und Weinstube" },
      },
      {
        title: "Spiel, Sport & Unterhaltung",
        text: "Billard, Tischtennis und Tischfußball sowie Grill- und Unterhaltungsabende sorgen für Kurzweil.",
        image: { src: `${IMG}/gallery-a72e96e0ee.webp`, alt: "Tischtennis im Freien am Camping Eichenwald" },
      },
      {
        title: "Brötchenservice & Empfang",
        text: "Frische Semmeln für den Tagesbedarf und ein freundlicher Empfang an der Rezeption mit Biergarten.",
        image: { src: `${IMG}/gallery-29cf68b3f7.webp`, alt: "Biergarten und Empfangsbereich am Camping Eichenwald mit Schild 'BIERGARTEN Bier frisch vom Fass'" },
      },
      {
        title: "Ruhig am Sonnenplateau",
        text: "Ruhige, weitläufige Lage über dem Inntal — viel Wiese, Wald ringsum und klare Bergluft.",
        image: { src: `${IMG}/gallery-562f941695.webp`, alt: "Weitläufige Wiese mit Stellplätzen am Waldrand" },
      },
    ],
  },

  mobilheime: {
    heading: "Bungalows & Mobilhome",
    intro:
      "Komplett eingerichtet, mit eigener Küche, WC, Dusche und Waschraum — wenn du das feste Dach über dem Kopf dem Zelt vorziehst.",
    items: [
      {
        name: "Bungalow",
        kind: "2–4 Personen",
        text: "Komplett eingerichteter Bungalow mit Küche, eigenem WC, Dusche und Abstellraum — startklar für die Familie.",
        image: { src: `${IMG}/accommodation-f755481528.webp`, alt: "Schlafzimmer im Bungalow am Camping Eichenwald" },
        features: ["Vollständige Küche", "Eigenes WC & Dusche", "ab € 480/Woche"],
      },
      {
        name: "Mobilhome",
        kind: "2–6 Personen",
        text: "Geräumiges Mobilhome für bis zu sechs Personen mit voller Küche, WC, Dusche und eigenem Waschraum.",
        image: { src: `${IMG}/gallery-3b93a8eeb6.webp`, alt: "Mobilhome mit Terrasse und Bergblick am Camping Eichenwald" },
        features: ["Bis 6 Personen", "Küche & Waschraum", "ab € 550/Woche"],
      },
    ],
  },

  kinder: {
    heading: "Für die Kleinen",
    intro:
      "Großer Spielplatz, Animation und das beheizte Schwimmbad — hier wird Kindern garantiert nicht langweilig.",
    features: [
      {
        title: "Großer Kinderspielplatz",
        text: "Spielhaus, Rutsche und Schaukel mitten im Grünen — gleich neben den Stellplätzen zum Austoben.",
        image: { src: `${IMG}/gallery-66a19fcbba.webp`, alt: "Kind auf dem Klettergerüst mit roter Rutsche am Spielplatz des Camping Eichenwald" },
      },
      {
        title: "Hüpfburg & Animation",
        text: "An Veranstaltungstagen sorgen Hüpfburg und Unterhaltung für strahlende Kinderaugen.",
        image: { src: `${IMG}/gallery-b6baeafb16.webp`, alt: "Hüpfburg mit spielenden Kindern am Camping Eichenwald" },
      },
      {
        title: "Planschen im Pool",
        text: "Das beheizte Schwimmbad mit flachem Bereich lädt schon die Kleinsten zum Planschen ein.",
        image: { src: `${IMG}/gallery-cc009e9c6e.webp`, alt: "Beheiztes Schwimmbad mit flachem Becken vor Bergkulisse" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg nach Stams",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die Inntalautobahn A12 bis Ausfahrt Stams, von dort sind es nur wenige Minuten zum Schießstandweg.",
      },
      {
        title: "Mit der Bahn",
        text: "Bahnhof Stams an der Strecke Innsbruck–Landeck; vom Ort sind es nur wenige Minuten zum Platz.",
      },
      {
        title: "Mit Bus & Gäste.Card",
        text: "Mit der Gäste.Card fährst du gratis per Bus zwischen Stams, Telfs und Innsbruck.",
      },
    ],
  },

  galerie: {
    heading: "Eindrücke vom Eichenwald",
    headingEmphasis: "Eichenwald",
    intro: "Berge, Wiese und lange Sommertage — ein paar Eindrücke vom Platz und seiner Umgebung.",
    tag: "Tirol · April bis Oktober",
    moreCount: 24,
    images: [
      { src: `${IMG}/gallery-d126256024.webp`, alt: "Stellplatz mit Wohnwagen und blühendem Baum im Frühling" },
      { src: `${IMG}/gallery-a0ebaa8acc.webp`, alt: "Wohnwagen am Platz vor verschneiten Tiroler Gipfeln" },
      { src: `${IMG}/gallery-87ffe2433f.webp`, alt: "Gastgarten des Restaurants mit Blumen und altem Baum" },
      { src: `${IMG}/gallery-aa5c57dc92.webp`, alt: "Vollausgestattete Küche im Bungalow am Camping Eichenwald" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz in Stams",
    headingEmphasis: "deinen Platz",
    intro: "Wähle Zeitraum und Personenzahl — Klara Zoller meldet sich persönlich mit deiner Verfügbarkeit.",
    pricesArePlaceholder: false,
    priceNote:
      "Richtpreise: Stellplatz inkl. 2 Personen, je weitere Person € 9,50 pro Tag — zzgl. Kurtaxe € 4 & Ortsabgabe. Bungalow & Mobilhome ab € 480 pro Woche (Sa–Sa).",
    highlight: {
      title: "Schwimmbad inklusive",
      text: "Dusche, Warmwasser und Schwimmbad sind ohne Extrabezahlung im Platzpreis enthalten.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz", perNight: 33, perExtraGuest: 9.5 },
      { id: "komfort", label: "Komfortplatz (ab 100 m²)", perNight: 35, perExtraGuest: 9.5 },
    ],
  },

  kontakt: {
    tel: "+43 699 11907931",
    telHref: "tel:+4369911907931",
    mail: "info@camping-eichenwald.at",
    adresse: "Schießstandweg 10 · 6422 Stams · Tirol",
    coords: { lat: 47.27527, lng: 10.98667 },
  },

  languages: ["DE"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Schwimmbad", href: "#camping" },
      ],
    },
    { label: "Bungalows", href: "#mobilheime" },
    { label: "Familie", href: "#kinder" },
    {
      label: "Preise & Anreise",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
  ],
};

export default campingEichenwald;
