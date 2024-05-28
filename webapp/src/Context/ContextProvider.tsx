import React, { createContext, useState } from "react";

interface Account {
  name: string;
  balance: number;
}

interface AccountContextProps {
  account: Account;
  createAccountContext: (name: string, balance: number) => void;
}

export const AccountContext = createContext({} as AccountContextProps);

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [account, setAccount] = useState<Account>({
    name: "",
    balance: 0,
  });

  const createAccountContext = (name: string, balance: number) => {
    const newAccount: Account = {
      name: name,
      balance: balance,
    };

    () => setAccount(newAccount);
    console.log("passei no createAccountContext", newAccount);
  };

  return (
    <AccountContext.Provider value={{ account, createAccountContext }}>
      {children}
    </AccountContext.Provider>
  );
};
