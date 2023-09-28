import { readFileSync } from 'fs';
import { load } from 'js-yaml';
import { join } from 'path';

import { ConfigYml } from './config.yml.model';

const YAML_CONFIG_FILENAME = join(__dirname, 'config.yml');

const file = readFileSync(YAML_CONFIG_FILENAME, 'utf8');

const CONFIG_YML = load(file) as ConfigYml;

export { CONFIG_YML };
