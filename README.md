# Canonical WETH Deployment for Moonriver

## Canonical WETH

Based of: 
 - https://github.com/gnosis/canonical-weth
 - https://www.npmjs.com/package/canonical-weth

## Install Dependencies

Run:

```
npm i
```

## Verifying the Contract

To start you need to export two variables:

 - `ALCHEMY_API` - API Key for Alchemy on Ethereum MainNet (to verify the smart contract)
 - `PRIV_KEY` - Private Key to deploy contract (not needed to verify)

To verify, run:

```
npx hardhat run verify-script.js
```

## Deployed Contract Address

 - WMOVR (on Moonriver): `0xf50225a84382c74CbdeA10b0c176f71fc3DE0C4d`
 - WGLMR (on Moonbeam):  `0xf50225a84382c74CbdeA10b0c176f71fc3DE0C4d` 

