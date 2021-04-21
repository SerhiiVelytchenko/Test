export interface Technics {
  name: string;
  id: string;
  url: string;
  price: number;
  info: {
    guarantee: string;
    producingCountry: string;
    energyClass: string;
    weight: string;
    productColor: string;
    feature: string;
  }
}

export const Appliances: Technics[] = [
  {
    name: 'Стиральная машина WHIRLPOOL',
    id: '1',
    url: 'https://content1.rozetka.com.ua/goods/images/big_tile/27232070.jpg',
    price: 8800,
    info: {
      guarantee: '12 місяців',
      producingCountry: 'Slovakia',
      energyClass: 'A++',
      weight: '71 кг',
      productColor: 'white',
      feature: 'foam control'
    }
  },
  {
    name: 'Холодильник LOFRA DOLCEVITA AVORIO',
    id: '2',
    url: 'https://content.rozetka.com.ua/goods/images/big/159845189.jpg',
    price: 12000,
    info: {
      guarantee: '10 місяців',
      producingCountry: 'Poland',
      energyClass: 'A++',
      weight: '80 кг',
      productColor: 'white',
      feature: 'freshness zone'
    }
  },
  {
    name: 'Холодильник для вина LIEBHERR WTes',
    id: '3',
    url: 'https://content.rozetka.com.ua/goods/images/big/45840001.jpg',
    price: 50000,
    info: {
      guarantee: '36 місяців',
      producingCountry: 'Slovakia',
      energyClass: 'A++',
      weight: '52 кг',
      productColor: 'stainless steel',
      feature: 'internally illuminated'
    }
  },
  {
    name: 'Кухонная плита Kaiser',
    id: '4',
    url: 'https://content1.rozetka.com.ua/goods/images/big/160975058.png',
    price: 14300,
    info: {
      guarantee: '24 місяців',
      producingCountry: 'USA',
      energyClass: 'A',
      weight: '62 кг',
      productColor: 'white',
      feature: 'dish drawer'
    }
  },
  {
    name: 'Кофеварка Jura S8',
    id: '5',
    url: 'https://content.rozetka.com.ua/goods/images/big/160562805.jpg',
    price: 15600,
    info: {
      guarantee: '12 місяців',
      producingCountry: 'Switzerland',
      energyClass: 'B',
      weight: '22 кг',
      productColor: 'white',
      feature: 'pulse Extraction Process'
    }
  },
  {
    name: 'Гриль TEFAL',
    id: '6',
    url: 'https://content2.rozetka.com.ua/goods/images/big/11991967.jpg',
    price: 4800,
    info: {
      guarantee: '12 місяців',
      producingCountry: 'Slovakia',
      energyClass: 'A',
      weight: '6 кг',
      productColor: 'white',
      feature: 'grease collection tray'
    }
  }
];
