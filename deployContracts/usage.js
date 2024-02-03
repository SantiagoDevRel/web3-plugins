const DeployContracts = require("./pluginContractNetworks");
const { Web3 } = require("web3");
const abi = require("./abi.json");
const bytecode = require("./bytecode.json");

const plugin = new DeployContracts();

const privateKey = "0x...";

async function main() {
  await plugin.deploySepolia(abi, bytecode, privateKey);
  await plugin.deployMumbai(abi, bytecode, privateKey);
}

main();
