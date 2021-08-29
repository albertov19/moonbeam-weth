// Script to verify that the deployed contract is the same as the one on Etherscan
// https://etherscan.io/address/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2#code

// WETH Address Eth MainNet
const WETH_address = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';

async function main() {
  // Deploy WETH to MainNet Fork
  const WETH = await ethers.getContractFactory('contracts/WETH9.sol:WETH9');
  const WETH_instance = await WETH.deploy();

  // Fetch WETH code from ETH MainNet Fork
  const WETH_Fork = await ethers.provider.getCode(WETH_instance.address);

  // Slice it https://github.com/ConsenSys/bytecode-verifier
  let ending_point = WETH_Fork.search('a165627a7a72305820');
  const bytecode_from_fork = WETH_Fork.slice(0, ending_point);

  // Fetch WETH code from ETH MainNet
  const WETH_MainNet = await ethers.provider.getCode(WETH_address);

  // Slice it https://github.com/ConsenSys/bytecode-verifier
  ending_point = WETH_MainNet.search('a165627a7a72305820');
  const bytecode_from_blockchain = WETH_MainNet.slice(0, ending_point);

  // Verify Compile WETH and MainNet WETH
  console.log(bytecode_from_blockchain === bytecode_from_fork);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
