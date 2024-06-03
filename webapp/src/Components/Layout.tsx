import Header from "./Header";
import "./../index.css";
import { Outlet } from "react-router-dom";
import { AccountContext } from "../Context/ContextProvider";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RootLayout = React.memo(function RootLayout() {
  const navigate = useNavigate();
  const { account, logoutAccountContext } = useContext(AccountContext);
  
  console.log("LAYOUT");

  useEffect(() => {
    if (Object.keys(account).length > 0) {
      navigate("/history");
    } else navigate("/login");
  }, [account, navigate]);

  return (
    <div className="flex flex-col h-screen">
      {Object.keys(account).length > 0 && (
        <Header
          onLogout={logoutAccountContext}
          user={
            account && {
              id: account.id,
              name: account.name,
              balance: account.balance,
            }
          }
        />
      )}
      <main className="h-screen">
        <Outlet />
      </main>
    </div>
  );
});

export default RootLayout;
