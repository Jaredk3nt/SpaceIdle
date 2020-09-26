export const CREW = {
  miner: {
    key: 'miner',
    name: 'Miner',
  },
  admiral: {
    key: 'admiral',
    name: 'Admiral',
  },
  navigator: {
    key: 'navigator',
    name: 'Navigator',
  },
};

export const SHIP_PARTS = {
  cannon: {
    key: 'cannon',
    name: 'Cannon',
  },
  drill: {
    key: 'drill',
    name: 'Drill',
  },
  sensor: {
    key: 'sensor',
    name: 'Sensor',
  },
};

// TODO: complete isActive functions
export const RESOURCES = {
  iron: {
    key: 'iron',
    name: 'Iron',
    xp: 10,
    isActive: (state) => {
      return true;
    },
  },
  palladium: {
    key: 'palladium',
    name: 'Palladium',
    xp: 15,
    isActive: (state) => {
      return true;
    },
  },
  gold: {
    key: 'gold',
    name: 'Gold',
    xp: 20,
    isActive: (state) => {
      return true;
    },
  },
  platinum: {
    key: 'platinum',
    name: 'Platinum',
    xp: 25,
    isActive: (state) => {
      return true;
    },
  },
  diamond: {
    key: 'diamond',
    name: 'Diamond',
    xp: 35,
    isActive: (state) => {
      return true;
    },
  },
};

export const TASKS = {
  [CREW.miner]: [
    RESOURCES.iron,
    RESOURCES.palladium,
    RESOURCES.gold,
    RESOURCES.platinum,
    RESOURCES.diamond
  ],
  [CREW.admiral]: {},
  [CREW.navigator]: {},
};

export const ITEMS = {};
