const SafeMath = artifacts.require("SafeMath");

module.exports = function(deployer) {
  deployer.deploy(SafeMath)
  .then(instance => {
    console.log("ERC20 contract deployed at:", instance.address);
  });
};
