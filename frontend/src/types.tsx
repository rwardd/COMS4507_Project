import { Web3Provider } from "@ethersproject/providers";
import { BigNumber } from "ethers";

export type Fixture = {
  fixId: BigNumber;
  home: string;
  away: string;
  date: string;
  active: boolean;
  payedOut: boolean;
  invalidated: boolean;
  winner: string;
  bets: any[];
};

export type Bet = {
  betId: BigNumber;
  fixId: BigNumber;
  punter: string;
  team: string;
  amount: BigNumber;
  won: boolean;
  invalidated: boolean;
  payedOut: boolean;
};

export type BettingOdds = {
  homeBets: Number;
  awayBets: Number;
};
