const { composePlugins, withNx, Configuration } = require('@nx/webpack');
const { withReact } = require('@nx/react');
const { withModuleFederation } = require('@nx/react/module-federation');
const { merge } = require('webpack-merge');

const baseConfig = require('./module-federation.config');

const config = {
  ...baseConfig,
    /*
   * Remote overrides for production.
   * Each entry is a pair of a unique name and the URL where it is deployed.
   *
   * e.g.
   * remotes: [
   *   ['app1', 'http://app1.example.com'],
   *   ['app2', 'http://app2.example.com'],
   * ]
   *
   * You can also use a full path to the remoteEntry.js file if desired.
   *
   * remotes: [
   *   ['app1', 'http://example.com/path/to/app1/remoteEntry.js'],
   *   ['app2', 'http://example.com/path/to/app2/remoteEntry.js'],
   * ]
   */
    remotes: [
      ['app1', '/apps/app1'],
      ['app2', '/apps/app2'],
    ],
};

// Nx plugins for webpack to build config object from Nx options and context.
module.exports = composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(config),
  (config) => {
    return merge(config, {
      devServer: {
        proxy: {
          '/apps/app1': {
            target: 'http://localhost:4201',
            pathRewrite: {
              '^/apps/app1': ''
            },
            changeOrigin: true
          },
          '/apps/app2': {
            target: 'http://localhost:4202',
            pathRewrite: {
              '^/apps/app2': ''
            },
            changeOrigin: true
          }
        }
      }
    });
  }
);
