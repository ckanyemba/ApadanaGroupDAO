require('babel-register')
require('babel-polyfill')

require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider')

module.exports = {
  devtool: 'cheap-module-source-map',
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*', // Match any network id
    },
    sepolia: {
      provider: () => new HDWalletProvider({
      mnemonic: {
      phrase: "high absent cabbage popular knock depth seminar click cross salt barrel wait"
      },
      providerOrUrl: "https://sepolia.infura.io/v3/873e2efcce5242c09385f56ce3d0329d"
      }),
      network_id: 11155111, // Sepolia's network ID
      gas: 4000000, // Adjust the gas limit as per your requirements
      gasPrice: 10000000000, // Set the gas price to an appropriate value
      confirmations: 2, // Set the number of confirmations needed for a transaction
      timeoutBlocks: 200, // Set the timeout for transactions
      skipDryRun: true // Skip the dry run option
     }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  migrations_directory: './migration',
  // Configure your compilers
  compilers: {
    solc: {
      version: '0.8.11',
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
}
