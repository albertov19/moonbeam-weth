/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('@nomiclabs/hardhat-ethers');
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  // Networks
  networks: {
    hardhat: {
      forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API}`,
      },
    },
    moonbase: {
      url: 'https://rpc.testnet.moonbeam.network',
      accounts: [process.env.PRIV_KEY],
      gasPrice: 1000000000,
      chainId: 1287,
    },
    moonriver: {
      url: 'https://rpc.moonriver.moonbeam.network',
      accounts: [process.env.PRIV_KEY],
      gasPrice: 1000000000,
      chainId: 1285,
    },
  },

  // Solc
  solidity: {
    compilers: [
      {
        version: '0.4.19',
        settings: {
          optimizer: {
            enabled: false,
            runs: 200,
          },
        },
      },
    ],
  },

  // Paths
  paths: {
    sources: './contracts',
    cache: './cache',
    artifacts: './artifacts',
  },
};
