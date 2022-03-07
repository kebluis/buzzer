import { MutationTree } from "vuex";
import { State, Buzz, Account } from "./state";

export enum MutationType {
  AddAccount = "ADD_ACCOUT",
  AddBuzz = "ADD_BUZZ",
  RecordUser = "RECORD_USER",
}

export type Mutations = {
  [MutationType.AddAccount](state: State, account: Account): void;
  [MutationType.AddBuzz](state: State, buzz: Buzz): void;
  [MutationType.RecordUser](state: State, account: Account): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.AddAccount](state, account) {
    state.accounts.unshift(account);
  },
  [MutationType.AddBuzz](state, buzz) {
    state.buzzes.unshift(buzz);
  },
  [MutationType.RecordUser](state, account) {
    state.userInfo = account;
  },
};
