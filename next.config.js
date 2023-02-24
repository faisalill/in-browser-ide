module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Exclude Monaco editor from being bundled on the server
      config.externals.push({
        '@jupyterlab/*': 'commonjs2 @jupyterlab/*',
        'monaco-editor/esm/vs/editor/editor.api': 'commonjs2 monaco-editor/esm/vs/editor/editor.api',
      });
    }
    return config;
  },
};
