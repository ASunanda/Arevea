 const HDWalletProvider = require('@truffle/hdwallet-provider');
 const fs = require('fs');
 const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
 
  networks: {
    
     development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
     },
    
    
    
    // Note: It's important to wrap the provider as a function to ensure truffle uses a new provider every time.
     rinkeby: {
       provider: () => new HDWalletProvider(mnemonic, `wss://rinkeby.infura.io/ws/v3/363d85f74ab4447092870aa4086a1233`),
       network_id: 4,       // Rinkeby's id
       gas: 5500000,        // Rinkeby has a lower block limit than mainnet
       confirmations: 2,    // # of confirmations to wait between deployments. (default: 0)
       timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
       skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
     },


    // Note: It's important to wrap the provider as a function to ensure truffle uses a new provider every time.
    
    Avalanche : {
      provider: () => new HDWalletProvider(mnemonic, `https://api.avax-test.network/ext/bc/C/rpc`),
      network_id: 43113, 
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks:200,
      skipDryRun: true      
    },


     matic : {
      provider: () => new HDWalletProvider(mnemonic, `https://rpc-mumbai.maticvigil.com/`),
      network_id: 80001,      
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks:200,
      skipDryRun: true,
      networkCheckTimeout:1000000       
      

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

  
  
};