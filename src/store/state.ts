export type Buzz = {
  buzzId: string;
  username: string;
  date: string;
  content: string;
};

export type Account = {
  accountId: string;
  username: string;
  password: string;
};

export type State = {
  accounts: Account[];
  buzzes: Buzz[];
  userInfo: Account;
};

export const state: State = {
  accounts: [
    {
      accountId: "user1",
      username: "admin",
      password: "admin",
    },
  ],
  buzzes: [
    {
      buzzId: "buzz1",
      username: "kevin",
      date: "Sun, 06 Mar 2022 08:41:25 GMT",
      content: "this is the first buzz in your timeline",
    },
    {
      buzzId: "buzz2",
      username: "kevin",
      date: "Sun, 06 Mar 2022 09:41:25 GMT",
      content: "this is the second buzz in your timeline",
    },
  ],
  userInfo: {
    accountId: "",
    username: "",
    password: "",
  },
};
