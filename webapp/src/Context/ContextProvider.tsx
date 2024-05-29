import React, { createContext, useState } from "react";
import { Account } from "../Services/types";

interface AccountContextProps {
  account: Account;
  loginAccountContext: (accoutn: Account) => void;
  logoutAccountContext: () => void;
}

export const AccountContext = createContext({} as AccountContextProps);

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [account, setAccount] = useState({} as Account);

  const loginAccountContext = ({ id, name, balance }: Account) => {
    const newAccount: Account = {
      id: id,
      name: name,
      balance: balance,
    };

    setAccount(newAccount);
  };

  const logoutAccountContext = () => {
    setAccount({} as Account);
  };

  return (
    <AccountContext.Provider
      value={{ account, loginAccountContext, logoutAccountContext }}
    >
      {children}
    </AccountContext.Provider>
  );
};
