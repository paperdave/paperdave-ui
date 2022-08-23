import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget as react } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'paperdave',
  globalStyle: 'src/baseline.scss',
  plugins: [sass()],
  validateTypes: false,
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    react({
      componentCorePackage: './dist',
      proxiesFile: '../components',
      loaderDir: './loader',
    }),
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
