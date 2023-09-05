import { AppConfig } from '../app/model';
import { NetworkConfig } from '../network/model';

export type ConfigYml = {
  app: AppConfig;
  network: NetworkConfig;
};
