import axios from "axios";
import {
  Account,
  Transaction,
  TransactionFilters,
  TransactionQuery,
} from "./types";

// const apiKey = process.env.REACT_APP_API_KEY;
// console.log("API KEY: ", apiKey);

axios.defaults.baseURL = "http://localhost:5153/api/";

export function loginBankAccount(
  name: string
): Promise<Account> {
  return axios.post("/GetAccount", { name }).then((response) => response.data);
}
export function createBankAccount(
  name: string,
  balance: number
): Promise<Account> {
  return axios
    .post("/AddAccount", { name, balance })
    .then((response) => response.data);
}

export function transfer(payload: TransactionQuery): Promise<void> {
  return axios.post("/Transfer", payload).then((response) => response.data);
}

export function getTransactions(
  filters: TransactionFilters,
  account: string
): Promise<Transaction[]> {
  return axios
    .post("/api/get-transactions", { filters, account })
    .then((response) => response.data);
}
