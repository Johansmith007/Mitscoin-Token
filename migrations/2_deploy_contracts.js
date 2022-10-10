const mitscoin = artifacts.require("mitscoin");

module.exports = function(deployer) {
  // one hundred million coins
  deployer.deploy(mitscoin, 100000000, 25);
};
