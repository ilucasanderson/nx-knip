import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  nx: {
    config: ['{apps,modules}/**/project.json'],
  },
};

export default config;
