 const HDWalletProvider = require('@truffle/hdwallet-provider');

 const fs = require('fs');
 const mnemonic = "sting occur attack bring caught elephant merit today stick apple robust emotion"

module.exports = {
 

  networks: {
    
     development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
     },
    
    
    
    // Note: It's important to wrap the provider as a function to ensure truffle uses a new provider every time.
     rinkeby: {
       provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/363d85f74ab4447092870aa4086a1233`),
       network_id: 4,       // Rinkeby's id
       gas: 5500000,        // Rinkeby has a lower block limit than mainnet
       confirmations: 2,    // # of confirmations to wait between deployments. (default: 0)
       timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
       skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
     },


    // Note: It's important to wrap the provider as a function to ensure truffle uses a new provider every time.
    Avalanche : {
      provider: () => new HDWalletProvider(mnemonic, `https://api.avax-test.network/ext/bc/C/rpc`),
      network_id: 43113,       // Rinkeby's id
      gas: 5500000,        // Rinkeby has a lower block limit than mainnet
      confirmations: 2,    // # of confirmations to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
    
  },

  // Set default mocha options here, use special reporters, etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.4",      // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
       settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: false,
          runs: 200
        },
        evmVersion: "byzantium"
       }
    }
  },

  
  // db: {
  //   enabled: false,
  //   host: "127.0.0.1",
  //   adapter: {
  //     name: "sqlite",
  //     settings: {
  //       directory: ".db"
  //     }
  //   }
  // }
};
  