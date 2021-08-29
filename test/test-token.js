const { expect } = require('chai');

// Test Variables
const deposit = '10000000000000000000';
const transfer = '1000000000000000000';
let token;
let Token;
let owner;
let to;
let allowed;

describe('Token contract', function () {
  beforeEach(async () => {
    [owner, to, allowed] = await ethers.getSigners();

    Token = await ethers.getContractFactory('contracts/WMOVR.sol:WETH9');

    token = await Token.deploy();
    await token.deposit({ value: deposit });
  });

  it('checks total supply', async () => {
    const totalSupply = await token.totalSupply();
    expect(totalSupply.toString()).to.equal(deposit);
  });

  // Check the balance of the owner of the contract
  it('should return balance of owner', async () => {
    const balance = await token.balanceOf(owner.address);
    expect(balance.toString()).to.equal(deposit);
  });

  // Transfer token and check balances
  it('should transfer token', async () => {
    // Transfer method
    await token.transfer(to.address, transfer, { from: owner.address });
    const balance = await token.balanceOf(to.address);
    expect(balance.toString()).to.equal(transfer);
  });

  // Set an allowance to an account, transfer from that account, check balances
  /*it("should give allowed authority to spend owners's token", async () => {
    // Approve allowed to spend from owner
    await token.approve(allowed.address, deposit);
    const allowance = await token.allowance(owner.address, allowed.address);
    expect(allowance.toString()).to.equal(deposit);
    console.log('passed');

    // Transfer tokens and check new balances
    await token.connect(allowed.address).transferFrom(owner.address, to.address, transfer);
    let balance = await token.balanceOf(to.address);
    expect(balance.toString()).to.equal(transfer);

    // Check new balance
    balance = await token.balanceOf(owner.address);
    expect(balance.toString()).to.equal((deposit - transfer).toString());
  });

  // Not allowed transfer if no allowance set
  it("should not allowed others to spend owners's token", async () => {
    // Try to transfer token
    expect(
      await Token.connect(allowed.address).transferFrom(owner.address, to.address, transfer)
    ).to.throw();
  });*/
});
