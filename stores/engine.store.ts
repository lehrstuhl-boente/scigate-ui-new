interface EngineStoreState {
  engines: Engine[];
}

interface Engine {
  id: string;
  title: string;
}

export const useEngineStore = defineStore('engine-store', {
  state: (): EngineStoreState => {
    return {
      engines: [
        {
          id: 'zora',
          title: 'ZORA',
        },
        {
          id: 'boris',
          title: 'BORIS',
        },
        {
          id: 'onlinekommentar',
          title: 'Onlinekommentar',
        },
        {
          id: 'gotriple',
          title: 'GoTriple',
        },
        {
          id: 'legalanthology',
          title: 'The Anthology of Swiss Legal Culture',
        },
        {
          id: 'entscheidsuche',
          title: 'Entscheidsuche',
        },
        {
          id: 'swisscovery',
          title: 'Swisscovery',
        },
        {
          id: 'repositorium',
          title: 'Repositorium',
        },
        {
          id: 'fedlex',
          title: 'Fedlex',
        },
        {
          id: 'digitalisierungszentrum',
          title: 'Digitale Sammlungen',
        },
      ],
    };
  },
});
