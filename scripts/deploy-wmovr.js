// Deploy MOVR to Moonriver
const { ethers } = require('hardhat');

async function main() {
  // Deploy WETH to MainNet Fork
  const WETH = await ethers.getContractFactory('contracts/WMOVR.sol:WETH9');
  const WETH_instance = await WETH.deploy();

  // Get Address
  console.log(`WMOVR deployed to ${WETH_instance.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
