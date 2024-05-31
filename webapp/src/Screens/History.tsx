import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Dropdown from "../Components/Dropdown";
import Search from "../Components/Search";
import { getMovements } from "../Services/api";
import { Transaction } from "../Services/types";

// Mock de dados para o histórico de transações
const transactionHistory = [
  {
    id: 1,
    sender: "Conta A",
    receiver: "Conta B",
    amount: 100.0,
    dateMovement: "10/10/22",
  },
  {
    id: 2,
    sender: "Conta C",
    receiver: "Conta A",
    amount: 50.0,
    dateMovement: "10/10/22",
  },
  {
    id: 3,
    sender: "Conta A",
    receiver: "Conta D",
    amount: 75.0,
    dateMovement: "10/10/22",
  },
];

const onChangedDropdownFilter = (value: string) => {
  console.log(value);
};

const History: React.FC = () => {
  const [movements, setMovements] = useState<Transaction[]>([]);

  useEffect(() => {
    fetchMovements();
  }, []);

  const fetchMovements = async () => {
    await getMovements().then(
      (response) => {
        console.log("Then -> ", response);
        setMovements(response);
        return response;
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div className="container">
      <h1 className="title justify-center items-center flex container">
        Histórico de Transações
      <div>{movements && movements[0]?.amount}</div>
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
            ${transaction.dateMovement === "Depósito" ? "bg-green-50" : ""} 
            ${
              transaction.dateMovement === "Transferência" ? "bg-yellow-50" : ""
            }
            ${transaction.dateMovement === "Saque" ? "bg-red-50" : ""}`}
            >
              <span className="my-2 flex-1 ">
                <span className="flex-1 w-36">
                  {transaction.dateMovement === "Transferência" && (
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
                  {transaction.dateMovement === "Depósito" && (
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
                  {transaction.dateMovement === "Saque" && (
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
