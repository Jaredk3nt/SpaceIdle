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

export const ITEMS = {
  iron_ore: {
    key: 'iron_ore',
    name: 'Iron Ore',
    value: 10,
  },
  palladium_ore: {
    key: 'palladium_ore',
    name: 'Palladium Ore',
    value: 20,
  },
  gold_ore: {
    key: 'gold_ore',
    name: 'Gold Ore',
    value: 100,
  },
  platinum_ore: {
    key: 'platinum_ore',
    name: 'Platinum Ore',
    value: 200,
  },
  diamond: {
    key: 'diamond',
    name: 'Diamond',
    value: 1000,
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
    complete: () => [{ key: ITEMS.iron_ore.key, count: 1 }],
  },
  palladium: {
    key: 'palladium',
    name: 'Palladium',
    xp: 15,
    isActive: (state) => {
      return true;
    },
    complete: () => [{ key: ITEMS.palladium_ore.key, count: 1 }],
  },
  gold: {
    key: 'gold',
    name: 'Gold',
    xp: 20,
    isActive: (state) => {
      return true;
    },
    complete: () => [{ key: ITEMS.gold_ore.key, count: 1 }],
  },
  platinum: {
    key: 'platinum',
    name: 'Platinum',
    xp: 25,
    isActive: (state) => {
      return true;
    },
    complete: () => [{ key: ITEMS.platinum_ore.key, count: 1 }],
  },
  diamond: {
    key: 'diamond',
    name: 'Diamond',
    xp: 35,
    isActive: (state) => {
      return true;
    },
    complete: () => [{ key: ITEMS.diamond.key, count: 1 }],
  },
  // TODO: enemies
  // TODO: a single resource for surveying to handle complete function
};

export const TASKS = {
  [CREW.miner]: [
    RESOURCES.iron,
    RESOURCES.palladium,
    RESOURCES.gold,
    RESOURCES.platinum,
    RESOURCES.diamond,
  ],
  [CREW.admiral]: {},
  [CREW.navigator]: {},
};
