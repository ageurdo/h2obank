import React from "react";
import { Icon } from "@iconify/react";
import Dropdown from "../Components/Dropdown";
import Search from "../Components/Search";

// Mock de dados para o histórico de transações
const transactionHistory = [
  {
    id: 1,
    sender: "Conta A",
    receiver: "Conta B",
    amount: 100.0,
    type: "Transferência",
  },
  {
    id: 2,
    sender: "Conta C",
    receiver: "Conta A",
    amount: 50.0,
    type: "Depósito",
  },
  {
    id: 3,
    sender: "Conta A",
    receiver: "Conta D",
    amount: 75.0,
    type: "Saque",
  },
];

const onChangedDropdownFilter = (value: string) => {
  console.log(value);
};

const History: React.FC = () => {
  return (
    <div className="container">
      <h1 className="title justify-center items-center flex container">
        Histórico de Transações
      </h1>
      <Dropdown
        items={["teste", "teste2"]}
        backgroundColor="bg-blue-200"
        buttonColor="bg-orange-200"
        buttonTextColor="text-black"
        onChange={onChangedDropdownFilter}
      />
      <Search
        buttonBackgroundColor="bg-blue-200"
        buttonTextColor="text-black"
        onSearch={(query) => console.log(query)}
        inputBackgroundColor="bg-orange-200"
        inputTextColor="text-black"
      />

      <ul className="gap-8 green">
        {transactionHistory.map((transaction) => (
          <>
            <hr className="border-gray-200 "></hr>
            <li
              key={transaction.id}
              className={`flex w-full gap-6 h-16 items-center justify-start px-4 divide-y 
            ${transaction.type === "Depósito" ? "bg-green-50" : ""} 
            ${transaction.type === "Transferência" ? "bg-yellow-50" : ""}
            ${transaction.type === "Saque" ? "bg-red-50" : ""}`}
            >
              <span className="my-2 flex-1 ">
                <span className="flex-1 w-36">
                  {transaction.type === "Transferência" && (
                    <div className="flex gap-4 items-center">
                      <div className="rounded-full p-2 avatar bg-orange-100">
                        <Icon
                          width="28"
                          icon="hugeicons:arrow-data-transfer-diagonal"
                          style={{ color: "orange" }}
                        />
                      </div>
                      <div className="flex flex-col">
                        <p className="font-medium">Transferência enviada </p>
                        <div className="font-normal text-gray-500 text-sm">
                          <span>{transaction.receiver} </span>
                          <span>{transaction.amount}</span>
                        </div>
                      </div>
                    </div>
                  )}
                  {transaction.type === "Depósito" && (
                    <div className="flex gap-4 items-center">
                      <div className="rounded-full p-2 avatar bg-green-200">
                        <Icon
                          width="28"
                          icon="ph:hand-deposit-light"
                          style={{ color: "green" }}
                        />
                      </div>
                      <div className="flex-1 flex">
                        Depósito {transaction.amount}
                      </div>
                    </div>
                  )}
                  {transaction.type === "Saque" && (
                    <div className="flex gap-4 items-center">
                      <div className="rounded-full p-2 avatar bg-red-100">
                        <Icon
                          width="28"
                          icon="ph:hand-withdraw-light"
                          style={{ color: "red" }}
                        />
                      </div>
                      <div className="flex-1 flex">
                        Saque {transaction.amount}
                      </div>
                    </div>
                  )}
                </span>
              </span>
            </li>
            <hr className="border-gray-200 "></hr>
          </>
        ))}
      </ul>
    </div>
  );
};

export default History;
