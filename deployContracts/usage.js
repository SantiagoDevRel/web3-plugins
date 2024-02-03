const DeployContracts = require("./pluginContractNetworks");
const { Web3 } = require("web3");
const abi = require("./abi.json");
const bytecode = require("./bytecode.json");

const plugin = new DeployContracts();

const privateKey = "0xca0f203073b871007e1b050d2d318e073816078d7c1a04d73baee3cad3127cdf";

async function main() {
  await plugin.deploySepolia(abi, bytecode, privateKey);
  await plugin.deployMumbai(abi, bytecode, privateKey);
}

main();
