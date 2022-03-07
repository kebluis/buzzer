import { GetterTree } from "vuex";
import { State, Account } from "./state";

export type Getters = {
  validAccount(
    state: State
  ): (username: string, password: string) => Account | undefined;
};

export const getters: GetterTree<State, State> & Getters = {
  validAccount: (state) => (username: string, password: string) => {
    return state.accounts.find((element) => {
      return element.username === username && element.password === password;
    });
  },
};
