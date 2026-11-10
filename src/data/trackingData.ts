import { TrackingData } from '../types';

export const SAMPLE_TRACKINGS: Record<string, TrackingData> = {
  'TW-9021-INT': {
    code: 'TW-9021-INT',
    status: 'En trànsit',
    origin: 'Terminal Portuària de Rotterdam (NL)',
    destination: 'Hub Central Trans Worldwide Barcelona (ES)',
    service: 'Transport Internacional (Vaixell Híbrid TW Oceanus)',
    eta: 'Demà, 14:30 CET',
    temperature: '+4.2 °C (Objectiu: +4.0 °C)',
    carbonSaved: '142.8 kg CO₂ estalviats',
    steps: [
      {
        title: 'Càrrega i precintat biomètric al port d’origen',
        location: 'Rotterdam Europort, Moll 4',
        time: '28 Oct, 08:15',
        completed: true,
      },
      {
        title: 'Trajectòria marítima optimitzada per vent',
        location: 'Corredor Atlàntic - Mar Cantàbric',
        time: '29 Oct, 02:40',
        completed: true,
      },
      {
        title: 'Atracament i transferència multimodal',
        location: 'Port Tecnològic de Barcelona',
        time: '29 Oct, 18:00 (Estimat)',
        completed: false,
      },
      {
        title: 'Lliurament final i descàrrega automatitzada',
        location: 'Destinació del client',
        time: '30 Oct, 14:30 (Estimat)',
        completed: false,
      },
    ],
  },
  'TW-4482-NAC': {
    code: 'TW-4482-NAC',
    status: 'En trànsit',
    origin: 'Centre Logístic Madrid Nord (ES)',
    destination: 'Hub Logístic Girona Sud (ES)',
    service: 'Distribució Nacional (Camió Elèctric E-Tron Hauler)',
    eta: 'Avui, 19:15 CET',
    temperature: '+18.5 °C (Ambient controlat)',
    carbonSaved: '86.4 kg CO₂ estalviats',
    steps: [
      {
        title: 'Sortida de plataforma central',
        location: 'Polígon Industrial San Fernando, Madrid',
        time: '29 Oct, 07:30',
        completed: true,
      },
      {
        title: 'Recàrrega d’alta potència (Megawatt) a Saragossa',
        location: 'Hub Energètic PLAZA, Saragossa',
        time: '29 Oct, 12:10',
        completed: true,
      },
      {
        title: 'En ruta per l’autovia A-2 electrificada',
        location: 'Tram Lleida - Igualada',
        time: '29 Oct, 15:45 (En curs)',
        completed: true,
      },
      {
        title: 'Lliurament garantit en seu empresarial',
        location: 'Parc Tecnològic de Girona',
        time: '29 Oct, 19:15',
        completed: false,
      },
    ],
  },
  'TW-1108-URB': {
    code: 'TW-1108-URB',
    status: 'En hub de transferència',
    origin: 'Micro-Hub Subterrani Plaça Catalunya, BCN',
    destination: 'Avinguda Diagonal 640, BCN',
    service: 'Logística d’Última Milla (Urban Pod Elèctric)',
    eta: 'Avui, 11:20 CET (Finestra de 30 min)',
    temperature: 'Ambient urbà (Segell estanc)',
    carbonSaved: '14.2 kg CO₂ estalviats',
    steps: [
      {
        title: 'Arribada al micro-hub de consolidació',
        location: 'Hub Zero Emissions Centre',
        time: '29 Oct, 08:00',
        completed: true,
      },
      {
        title: 'Assignació a Pod Elèctric #14',
        location: 'Moll de càrrega intel·ligent',
        time: '29 Oct, 08:45',
        completed: true,
      },
      {
        title: 'En ruta de repartiment de baix soroll',
        location: 'Eixample Dret - Diagonal',
        time: '29 Oct, 10:30',
        completed: false,
      },
      {
        title: 'Recepció amb signatura sense contacte',
        location: 'Avinguda Diagonal 640',
        time: '29 Oct, 11:20',
        completed: false,
      },
    ],
  },
};
