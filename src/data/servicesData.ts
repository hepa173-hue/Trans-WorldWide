import { ServiceItem, BlogPost } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'internacional',
    title: 'Transport Internacional',
    subtitle: 'Corredors intercontinentals aeri i marítim d’alta precisió',
    category: 'Corredors Globals',
    description: 'Connexions intercontinentals optimitzades mitjançant rutes predictives i vaixells de propulsió assistida de baix impacte ambiental.',
    image: '/src/assets/images/service_international_1793290953732.jpg',
    specs: [
      { label: 'Abast', value: '140+ Països connectats' },
      { label: 'Modalitat', value: 'Multimodal Aeri & Marítim' },
      { label: 'Reducció CO₂', value: '-38% vs. estàndard' },
      { label: 'Seguiment', value: 'Satèl·lit bi-direccional' },
    ],
    detailedOverview: 'El servei de Transport Internacional de Trans Worldwide combina vaixells de darrera generació amb aerotransport logístic sincronitzat. Mitjançant algorismes d’optimització cinètica de rutes i gestió automatitzada de duanes intel·ligents, garantim la màxima velocitat amb el menor consum energètic del sector.',
    keyFeatures: [
      'Xarxa directa de hubs portuaris tecnològics a Europa, Amèrica i Àsia-Pacífic.',
      'Control actiu de cadenes de fred i sensors de vibració per a mercaderies d’alt valor afegit.',
      'Despatx de duanes digitalitzat amb tramitació documental automatitzada.',
      'Propulsió naval híbrida amb veles rígides automatitzades i biocombustibles.',
    ],
    operationalMetrics: [
      { metric: 'Temps mitjà de trànsit transatlàntic', value: '5.2', unit: 'Dies' },
      { metric: 'Compliment de finestra horària', value: '99.4', unit: '%' },
      { metric: 'Capacitat de càrrega TEU/any', value: '1.25', unit: 'M TEU' },
    ],
  },
  {
    id: 'nacional',
    title: 'Distribució Nacional',
    subtitle: 'Xarxa troncal peninsular amb flota pesada d’emissió zero',
    category: 'Xarxa Troncal',
    description: 'Xarxa troncal de transport pesant d’emissió zero i plataformes logístiques automatitzades per a lliuraments en 24 hores.',
    image: '/src/assets/images/highway_truck_clean.jpg',
    specs: [
      { label: 'Cobertura', value: '100% Península i Illes' },
      { label: 'Temps de Trànsit', value: 'Menys de 24 hores' },
      { label: 'Propulsió', value: 'Elèctrica pura i H₂ verd' },
      { label: 'Sistemes ADAS', value: 'Conducció assistida N3' },
    ],
    detailedOverview: 'El sistema de Distribució Nacional connecta els principals centres de producció i consum mitjançant camions elèctrics pesants d’alta autonomia i hubs de transferència ràpida. La nostra flota compta amb sistemes de telemetria contínua que monitoritzen la pressió de càrrega, consum kilovàtic i seguretat activa en temps real.',
    keyFeatures: [
      'Corredors electrificats amb estacions de recàrrega d’alta potència pròpies (megawatt charging).',
      'Plataforma d’intercanvi de semirremolcs automatitzada en menys de 8 minuts.',
      'Servei diari garantit entre els 18 principals pols industrials i logístics.',
      'Cabines aerodinàmiques de coeficient Cx 0.24 inspirades en el disseny d’avantguarda.',
    ],
    operationalMetrics: [
      { metric: 'Puntualitat en lliuraments nacionals', value: '99.85', unit: '%' },
      { metric: 'Flota 100% renovable operativa', value: '880+', unit: 'Unitats' },
      { metric: 'Rutes express interciutats nocturnes', value: '260', unit: 'Rutes' },
    ],
  },
  {
    id: 'ultima-milla',
    title: 'Logística d’Última Milla',
    subtitle: 'Micro-hubs urbans i pods elèctrics silenciosos d’emissió zero',
    category: 'Mobilitat Urbana',
    description: 'Micro-hubs urbans d’alta densitat i pods elèctrics silenciosos per a una distribució capil·lar sense emissions ni congestió.',
    image: '/src/assets/images/service_last_mile_1793290954103.jpg',
    specs: [
      { label: 'Format de Vehicle', value: 'Urban Pods Elèctrics' },
      { label: 'Nivell Acústic', value: 'Silenciós (< 42 dB)' },
      { label: 'Finestra d’Entrega', value: 'Franges de 60 min' },
      { label: 'Emissions Locals', value: '0.0 g CO₂ / km' },
    ],
    detailedOverview: 'La solució d’última milla de Trans Worldwide aborda el repte urbà amb vehicles lleugers d’estètica refinada i maniobrabilitat extrema. Coordinats des de micro-hubs subterranis i perimetrals, els vehicles optimitzen els trams finals d’entrega a botigues, centres hospitalaris i domicilis particulars.',
    keyFeatures: [
      'Vehicles compactes de disseny ergonòmic que s’integren harmònicament a l’espai urbà.',
      'Algorisme d’encaminament urbà predictiu que evita congestions i zones d’obres.',
      'Compartiments modulars refrigerats per a productes frescos i biomèdics.',
      'Confirmació digital instantània amb signatura biomètrica i codi QR dinàmic.',
    ],
    operationalMetrics: [
      { metric: 'Taxa d’èxit al primer intent', value: '98.9', unit: '%' },
      { metric: 'Consum energètic per paquet', value: '0.12', unit: 'kWh' },
      { metric: 'Ciutats cobertes amb xarxa neta', value: '45', unit: 'Àrees' },
    ],
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'descarbonitzacio-maritima',
    title: 'Descarbonització del transport marítim: la transició cap als nous corredors verds',
    date: '28 d’octubre de 2026',
    readTime: '4 min de lectura',
    category: 'Innovació Naval',
    summary: 'Com l’adopció de veles rígides de fibra de carboni i els combustibles sintètics estan reduint dràsticament l’empremta de carboni en rutes transoceàniques.',
    image: '/src/assets/images/service_international_1793290953732.jpg',
    content: [
      'El transport marítim representa més del 80% del comerç mundial per volum. Durant dècades, ha estat un dels sectors més difícils de descarbonitzar. A Trans Worldwide, hem implementat la primera flota de vaixells híbrids amb propulsió assistida per vent automatitzat.',
      'Gràcies a l’anàlisi de corrents meteorològics en temps real mitjançant models d’IA marina, els nostres vaixells ajusten la trajectòria per aprofitar de manera òptima la dinàmica dels vents, aconseguint un estalvi acumulat de combustible de fins al 34% en trajectes atlàntics.',
      'Aquest avenç tecnològic no només rebaixa els costos operatius, sinó que permet als nostres clients complir amb els nous marcs normatius internacionals d’emissions sense renunciar a la velocitat de lliurament.',
    ],
  },
  {
    id: 'ia-rutes-troncals',
    title: 'Xarxes de micro-hubs urbans: com la telemetria predictiva redueix un 42% el temps d’espera',
    date: '19 d’octubre de 2026',
    readTime: '3 min de lectura',
    category: 'Logística Urbana',
    summary: 'L’arquitectura de distribució descentralitzada permet als vehicles d’última milla operar amb zero emissions i una precisió sense precedents.',
    image: '/src/assets/images/service_last_mile_1793290954103.jpg',
    content: [
      'Les ciutats modernes exigeixen solucions silencioses i respectuoses amb l’espai públic. El model tradicional de grans camions entrant al centre urbà ha quedat definitivament obsolet.',
      'Trans Worldwide ha dissenyat una xarxa de micro-hubs automatitzats situats en punts neuràlgics estratègics. Des d’aquests nodes, la càrrega es transfereix en minuts a petits pods elèctrics d’alta eficiència.',
      'Els resultats son evidents: una reducció de més del 40% en els temps de trànsit final i l’eliminació total d’emissions locals de partícules i gasos contaminants als carrers.',
    ],
  },
  {
    id: 'seguretat-cadena-fred',
    title: 'Traçabilitat contínua i ciberseguretat en la cadena logística farmacèutica',
    date: '10 d’octubre de 2026',
    readTime: '5 min de lectura',
    category: 'Tecnologia i Fred',
    summary: 'Protocols biomètrics i registres descentralitzats per garantir que cada dosi i producte crític mantingui les seves propietats invariades.',
    image: '/src/assets/images/fleet_cargo_drone_1793896737464.jpg',
    content: [
      'Quan es transporten productes biomèdics i farmacèutics d’alt valor, un desplaçament d’un sol grau en la temperatura pot comprometre tota una tramesa. La resposta és la sensorització contínua.',
      'Cada contenidor de Trans Worldwide incorpora sensors d’alta freqüència que registren temperatura, humitat relativa, lluminositat i acceleració cinètica cada segon.',
      'Aquestes dades es transmeten directament al client a través del portal de gestió de flotes, atorgant un control complet i auditable en qualsevol instant del viatge.',
    ],
  },
];
