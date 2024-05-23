const WeaveHash = artifacts.require("WeaveHash");

module.exports = function (deployer) {
  deployer.deploy(WeaveHash)
  .then(instance => {
    console.log("WeaveHash contract deployed at:", instance.address);
  });
};
