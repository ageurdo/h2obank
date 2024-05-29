export interface Account {
  id: string;
  name: string;
  balance: number;
}

export interface Transaction {
  id: string;
  sender: Account;
  recipient: Account;
  amount: number;
  timestamp: string;
}

export interface TransactionQuery {
  sender: string;
  recipient: string;
  amount: number;
}

export interface TransactionFilters {
  startDate?: string;
  endDate?: string;
  minAmount?: number;
  maxAmount?: number;
}
