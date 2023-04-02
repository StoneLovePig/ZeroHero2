import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import "hardhat-deploy";

// import "./tasks";
// import "./tasks/functionSignature";
// import "./tasks/storageStructure";

// import * as dotenv from "dotenv";
// dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
      localhost: 0,
      bnbtest:0,
    },
  },
  // Default network when you don't specify "--network {network_name}"
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    },

    localhost: {
      url: "http://127.0.0.1:8545",
    },
    
    // goerli: {
    //   url: "https://goerli.infura.io/v3/" + process.env.INFURA_KEY,
    //   accounts:
    //     process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    //   // {
    //   //  mnemonic: process.env.MNEMONIC,
    //   //  count: 20,
    //   //}
    // },

    bnbtest: {
      url: "https://endpoints.omniatech.io/v1/bsc/testnet/public",
      accounts: ["009b0b4771fcd55d748958c663a08015721b1b9ccfa053b6e975acc614cb8d15"],
      },
    
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 20000,
  },
  etherscan: {
    apiKey: "24YYUS1UDM3G9SWVE6PTBQYZ7VYGPP89SG",
  },
}

export default config;
