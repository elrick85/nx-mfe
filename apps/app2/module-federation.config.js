module.exports = {
  name: 'app2',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};
