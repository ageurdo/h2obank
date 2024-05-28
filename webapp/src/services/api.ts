import axios from "axios";
import { Account, Transaction, TransactionFilters } from "./types";

axios.defaults.baseURL = "https://ageu.com/";

// Create a new bank account
export function loginBankAccount(
  name: string
): Promise<Omit<Account, "balance">> {
  return axios
    .post("/api/bank-accounts", { name })
    .then((response) => response.data);
}
// Create a new bank account
export function createBankAccount(
  name: string,
  balance: number
): Promise<Account> {
  return axios
    .post("/api/bank-accounts", { name, balance })
    .then((response) => response.data);
}

// Transfer funds between two bank accounts
export function transferFunds(
  sender: Account,
  recipient: Account,
  amount: number
): Promise<void> {
  return axios
    .post("/api/transfer-funds", { sender, recipient, amount })
    .then((response) => response.data);
}

// Get all transactions
export function getTransactions(
  filters: TransactionFilters,
  account: string
): Promise<Transaction[]> {
  return axios
    .post("/api/get-transactions", { filters, account })
    .then((response) => response.data);
}
