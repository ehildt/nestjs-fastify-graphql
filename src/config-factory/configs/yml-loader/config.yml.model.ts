import { AppConfig } from '../app/model';
import { NetworkConfig } from '../network/model';
import { SessionConfig } from '../session/model';

export type ConfigYml = {
  app: AppConfig;
  session: SessionConfig;
  network: NetworkConfig;
};
