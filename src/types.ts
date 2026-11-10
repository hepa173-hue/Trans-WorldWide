export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  image: string;
  specs: {
    label: string;
    value: string;
  }[];
  detailedOverview: string;
  keyFeatures: string[];
  operationalMetrics: {
    metric: string;
    value: string;
    unit: string;
  }[];
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  summary: string;
  image?: string;
  content: string[];
}

export interface TrackingData {
  code: string;
  status: 'En trànsit' | 'En hub de transferència' | 'Lliurat' | 'En preparació';
  origin: string;
  destination: string;
  service: string;
  eta: string;
  temperature: string;
  carbonSaved: string;
  steps: {
    title: string;
    location: string;
    time: string;
    completed: boolean;
  }[];
}

export type TabType = 'inici' | 'serveis' | 'flota' | 'rutes' | 'qui-som' | 'blog' | 'faqs' | 'contacte';
