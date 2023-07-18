interface EngineStoreState {
  engines: Engine[];
}

interface Engine {
  id: string;
  title: string;
  imageFormat: string;
  url: string;
}

export const useEngineStore = defineStore('engine-store', {
  state: (): EngineStoreState => {
    return {
      engines: [
        {
          id: 'zora',
          title: 'ZORA',
          imageFormat: 'svg',
          url: 'https://www.zora.uzh.ch/',
        },
        {
          id: 'boris',
          title: 'BORIS',
          imageFormat: 'svg',
          url: 'https://boris.unibe.ch/',
        },
        {
          id: 'onlinekommentar',
          title: 'Onlinekommentar',
          imageFormat: 'svg',
          url: 'https://onlinekommentar.ch/',
        },
        {
          id: 'gotriple',
          title: 'GoTriple',
          imageFormat: 'svg',
          url: 'https://www.gotriple.eu/',
        },
        {
          id: 'legalanthology',
          title: 'The Anthology of Swiss Legal Culture',
          imageFormat: 'svg',
          url: 'https://www.legalanthology.ch/',
        },
        {
          id: 'entscheidsuche',
          title: 'Entscheidsuche',
          imageFormat: 'png',
          url: 'https://entscheidsuche.ch/',
        },
        {
          id: 'swisscovery',
          title: 'Swisscovery',
          imageFormat: 'svg',
          url: 'https://swisscovery.slsp.ch/',
        },
        {
          id: 'repositorium',
          title: 'Repositorium',
          imageFormat: 'svg',
          url: 'https://www.repositorium.ch/',
        },
        {
          id: 'fedlex',
          title: 'Fedlex',
          imageFormat: 'svg',
          url: 'https://www.fedlex.admin.ch/',
        },
        {
          id: 'digitalisierungszentrum',
          title: 'Digitale Sammlungen',
          imageFormat: 'png',
          url: 'https://www.digitale-sammlungen.de/',
        },
      ],
    };
  },
});