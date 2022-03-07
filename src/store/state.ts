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
      username: "kevin",
      password: "password",
    },
  ],
  buzzes: [
    {
      buzzId: "buzz1",
      username: "kevin",
      date: "Sun, 06 Mar 2022 18:41:25 GMT",
      content:
        "Refreshing your web browser will delete your temporary account along with the buzzes that you created.",
    },
    {
      buzzId: "buzz2",
      username: "kevin",
      date: "Sun, 06 Mar 2022 09:41:25 GMT",
      content: "Welcome to buzzer!",
    },
  ],
  userInfo: {
    accountId: "",
    username: "",
    password: "",
  },
};
