import * as anchor from '@coral-xyz/anchor'
import { Program } from '@coral-xyz/anchor'
import { Keypair, PublicKey } from '@solana/web3.js'
import { Votingdapp } from '../target/types/votingdapp'
import { startAnchor } from 'anchor-bankrun'
import { BankrunProvider } from 'anchor-bankrun'


const IDL = require('../target/idl/votingdapp.json');
const votingAddress = new PublicKey('coUnmi3oBUtwtd9fjeAvSsJssXh5A5xyPbhpewyzRVF');

describe('VotingTest', () => {
  it('initialize poll', async () => {
    const context = await startAnchor("", [{ name: "votingdapp", programId: votingAddress }], [])
    const provider = new BankrunProvider(context)

    const votingProgram = new Program<Votingdapp>(IDL, provider);

    await votingProgram.methods.initializePoll(
      new anchor.BN(1),
      "What is your favorite color?",
      new anchor.BN(0),
      new anchor.BN(1742639770),
    ).rpc();

  });
});