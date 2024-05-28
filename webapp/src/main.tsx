import React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Routes/Dashboard";
import CreateAccount from "./Routes/CreateAccount";
import LoginAccount from "./Routes/LoginAccount";
import TransferFunds from "./Routes/TransferFunds";
import History from "./Routes/History";
import { ContextProvider } from "./Context/ContextProvider";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("No root element found");
}

export const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/login-account", element: <LoginAccount /> },
  { path: "/create-account", element: <CreateAccount /> },
  { path: "/transfer-funds", element: <TransferFunds /> },
  { path: "/history", element: <History /> },
]);

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ContextProvider>
      <div className="body">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </ContextProvider>
  </React.StrictMode>
);
