const { Web3PluginBase, Web3 } = require("web3");

class DeployContracts extends Web3PluginBase {
  pluginNamespace = "pluginContract";
  web3;

  constructor() {
    super();
    this.web3 = new Web3("https://ethereum-sepolia.publicnode.com");
  }

  async deploySepolia(abi, bytecode, pk) {
    const myContract = new this.web3.eth.Contract(abi);
    myContract.setProvider("https://ethereum-sepolia.publicnode.com");
    const address = await this.contractDeployer(myContract, bytecode, pk);
    console.log("Contract deployed in Sepolia", address);
  }

  async deployMumbai(abi, bytecode, pk) {
    const myContract = new this.web3.eth.Contract(abi);
    myContract.setProvider("https://polygon-mumbai-pokt.nodies.app");
    const address = await this.contractDeployer(myContract, bytecode, pk);
    console.log("Contract deployed in Mumbai", address);
  }

  async contractDeployer(myContract, bytecode, pk) {
    const contractDeployer = myContract.deploy({
      data: "0x" + bytecode,
      arguments: [10],
    });

    const wallet = this.web3.eth.accounts.wallet.add(pk);

    const tx = await contractDeployer.send({
      from: wallet[0].address,
    });

    return tx.options.address;
  }
}

module.exports = DeployContracts;
