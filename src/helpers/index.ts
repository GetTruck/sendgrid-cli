type dataFilePath = string;

export const getDataFileLocation = (config: { dataDir: string }): dataFilePath => `${config.dataDir}/data.json`;