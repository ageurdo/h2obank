import Header from "./Header";
import "./../index.css";
import { Outlet } from "react-router-dom";
import { AccountContext } from "../Context/ContextProvider";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RootLayout() {
  const navigate = useNavigate();
  const { account, logoutAccountContext } = useContext(AccountContext);

  useEffect(() => {
    console.log("Condição ito", Object.keys(account).length > 0);
    if (Object.keys(account).length > 0) {
      navigate("/dashboard");
    } else navigate("/login");
  }, [account]);

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
}
