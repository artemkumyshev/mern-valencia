const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@actions": "src/actions",
    "@components": "src/components",
    "@ui": "src/components/UI",
    "@containers": "src/containers",
    "@redux": "src/redux",
    "@styles": "src/styles",
  })(config);

  return config;
};
