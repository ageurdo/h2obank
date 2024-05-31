import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { getMovements } from "../Services/api";
import { Transaction, TransactionFilters } from "../Services/types";
import { AccountContext } from "../Context/ContextProvider";
import { useContext } from "react";
import Filter from "../Components/Filter";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const History: React.FC = () => {
  const { account } = useContext(AccountContext);
  const [movements, setMovements] = useState<Transaction[]>([]);
  const [filter, setFilter] = useState<TransactionFilters>({
    minValue: 0,
    maxValue: 0,
    senderId: 0,
    recipientId: parseInt(account.id),
    startDate: new Date().setDate(new Date().getDate() - 30).toString(),
    endDate: new Date().toString(),
  });

  const formattedDate = (date) => {
    return format(date, "dd/MM/yyyy HH:mm:ss", { locale: ptBR });
  };

  useEffect(() => {
    fetchMovements();
  }, [filter]);

  const fetchMovements = async () => {
    await getMovements({
      minValue: filter.minValue,
      maxValue: filter.maxValue,
      senderId: filter.senderId,
      recipientId: filter.recipientId,
      startDate: filter.senderId?.toString() || Date.now().toString(),
      endDate: filter.endDate,
    }).then(
      (response) => {
        console.log("Then -> ", response);
        if (Array.isArray(response)) {
          setMovements(response);
        } else return response;
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const handleFilterChange = (newFilter: TransactionFilters) => {
    setFilter(newFilter);
  };

  return (
    <div className="container">
      <h1 className="title justify-center items-center flex container">
        Histórico de Transações
      </h1>

      <Filter onFilterChange={handleFilterChange} />
      {/* <Dropdown
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
      /> */}

      <ul className="gap-8 green">
        {movements &&
          movements?.map((item) => (
            <div key={item.id}>
              <hr className="border-gray-200 "></hr>
              <li
                key={item.id}
                className={`flex w-full gap-6 h-16 items-center justify-start px-4 divide-y justify-between
                  ${
                    item.recipientAccount.id === account.id
                      ? "bg-green-200"
                      : ""
                  } 
                  ${item.senderAccount.id === account.id ? "bg-red-200" : ""}`}
              >
                <span className="my-2 flex-1">
                  <span className="flex-1 w-36 bg-pink-400">
                    {item.recipientAccount.id === account.id && (
                      <div className="flex gap-4 items-center">
                        <div className="rounded-full p-2 avatar bg-green-300">
                          <Icon
                            width="28"
                            icon="hugeicons:arrow-data-transfer-diagonal"
                            style={{ color: "green" }}
                          />
                        </div>
                        <div className="flex flex-col">
                          <p className="font-medium">Transferência recebida </p>
                          <div className="font-normal text-gray-500 text-sm">
                            de{" "}
                            <span className="font-medium">
                              {item.senderAccount.name}{" "}
                            </span>
                            no valor de{" "}
                            <span className="font-medium">
                              R$ {item.amount}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {item.senderAccount.id === account.id && (
                      <div className="flex gap-4 items-center">
                        <div className="rounded-full p-2 avatar bg-red-300">
                          <Icon
                            width="28"
                            icon="hugeicons:arrow-data-transfer-diagonal"
                            style={{ color: "red" }}
                          />
                        </div>
                        <div className="flex flex-col">
                          <p className="font-medium">Transferência enviada </p>
                          <div className="font-normal text-gray-500 text-sm">
                            para{" "}
                            <span className="font-medium">
                              {item.recipientAccount.name}{" "}
                            </span>
                            no valor de{" "}
                            <span className="font-medium">
                              R$ {item.amount}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </span>
                </span>
                <span>{formattedDate(item.dateMovement)}</span>
              </li>
              <hr className="border-gray-200 "></hr>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default History;
