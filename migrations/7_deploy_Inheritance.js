const Inheritance = artifacts.require("Inheritance");

module.exports = function(deployer) {
  deployer.deploy(Inheritance)
  .then(instance => {
    console.log("Inheritance contract deployed at:", instance.address);
  });
};
