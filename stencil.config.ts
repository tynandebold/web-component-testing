import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'ts-ui',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ],
  globalStyle: 'src/globals/ts-ui.css'
};
