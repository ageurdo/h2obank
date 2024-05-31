import React, { createContext, useEffect, useState } from "react";
import { Account } from "../Services/types";

interface AccountContextProps {
  account: Account;
  loginAccountContext: (accoutn: Account) => void;
  logoutAccountContext: () => void;
  getAccount: () => Account;
}

export const AccountContext = createContext({} as AccountContextProps);

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [account, setAccount] = useState({} as Account);

  useEffect(() => {
    getAccount();
  }, []); 

  const loginAccountContext = ({ id, name, balance }: Account) => {
    const newAccount: Account = {
      id: id,
      name: name,
      balance: balance,
    };

    setAccount(newAccount);

    localStorage.setItem("h2o::account", JSON.stringify(newAccount));
  };

  const getAccount = () => {
    const accountFromLocalStorage = localStorage.getItem("h2o::account");
    if (accountFromLocalStorage) {
      setAccount(JSON.parse(accountFromLocalStorage));
    }
    return account;
  };

  const logoutAccountContext = () => {
    setAccount({} as Account);
    localStorage.removeItem("h2o::account");
  };

  return (
    <AccountContext.Provider
      value={{ account, loginAccountContext, logoutAccountContext, getAccount }}
    >
      {children}
    </AccountContext.Provider>
  );
};
