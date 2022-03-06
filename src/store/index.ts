import { CommitOptions, createStore, Store as VuexStore } from "vuex";
import { State, state } from "./state";
import { Mutations, mutations } from "./mutations";

export const store = createStore<State>({
  state,
  mutations,
});

export const useStore = () => {
  return store as Store;
};

export type Store = Omit<VuexStore<State>, "commit"> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
};
