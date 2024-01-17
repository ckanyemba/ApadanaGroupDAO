const ApadanaGroupDAO = artifacts.require("ApadanaGroupDAO");

module.exports = async function (deployer) {
    await deployer.deploy(ApadanaGroupDAO)
};