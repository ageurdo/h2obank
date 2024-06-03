export interface Account {
  id: string;
  name: string;
  balance: number;
}

export interface Transaction {
  id: number;
  amount: number;
  dateMovement: string;
  senderAccount: Account;
  recipientAccount: Account;
}

export interface TransferQuery {
  sender: string;
  recipient: string;
  amount: number;
}

export interface TransactionFilters {
  minValue?: number;
  maxValue?: number;
  senderId?: number;
  recipientId: number;
  startDate?: string;
  endDate?: string;
}
