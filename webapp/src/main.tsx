import React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import CreateAccount from "./Screens/CreateAccount";
import LoginAccount from "./Screens/LoginAccount";
import TransferFunds from "./Screens/TransferFunds";
import History from "./Screens/History";
import { ContextProvider } from "./Context/ContextProvider";
import Layout from "./Components/Layout";
import Dashboard from "./Screens/Dashboard";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("No root element found");
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="create" element={<CreateAccount />} />
        <Route path="login" element={<LoginAccount />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="transfer" element={<TransferFunds />} />
        <Route path="history" element={<History />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </ContextProvider>
  </React.StrictMode>
);
