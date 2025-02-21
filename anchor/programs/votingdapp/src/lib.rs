#![allow(clippy::result_large_err)]

use anchor_lang::prelude::*;
use borsh::de;

declare_id!("coUnmi3oBUtwtd9fjeAvSsJssXh5A5xyPbhpewyzRVF");

#[program]
pub mod votingdapp {
    use super::*;
    pub fn initiliaze_poll(ctx: Context<InitializePoll>, poll_id: u64) -> Result<()> {
      Ok(())
    }
}

#[derive(Accounts)]
pub struct InitializePoll<'info> {
    #[account(mut)]
    pub signer: Signer<'info>,
    #[account(mut)]
    pub poll: Account<'info, Poll>,
}

#[account]
pub struct Poll {
  pub poll_id: u64,
  pub description: String,
  pub poll_start: u64,
  pub poll_end: u64,
  pub candidates_amount: u64,
}