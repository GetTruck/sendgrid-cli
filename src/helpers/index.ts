import { TdataFilePath } from './types';

export const getDataFileLocation = (config: { dataDir: string }): TdataFilePath => `${config.dataDir}/data.json`;