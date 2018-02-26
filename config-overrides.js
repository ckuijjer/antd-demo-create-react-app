const { compose, injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const theme = require('./theme');

module.exports = compose(
  rewireLess.withLoaderOptions({
    modifyVars: theme
  }),
  config => injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config)
);