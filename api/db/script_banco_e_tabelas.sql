CREATE DATABASE h20bank
GO

USE h20bank
GO

CREATE SEQUENCE Accounts_Sequence
    START WITH 1
    INCREMENT BY 1
    NO CYCLE;

CREATE TABLE Accounts (
    Id INT PRIMARY KEY DEFAULT NEXT VALUE FOR Accounts_Sequence,
    Name VARCHAR(50) NOT NULL,
    Balance DECIMAL(10, 2) NOT NULL DEFAULT 0.00
);
GO

CREATE SEQUENCE Movements_Sequence
    START WITH 1
    INCREMENT BY 1
    NO CYCLE;

CREATE TABLE Movements (
    Id INT PRIMARY KEY DEFAULT NEXT VALUE FOR Movements_Sequence,
    IdSenderAccount INT NOT NULL,
    IdRecipientAccount INT NOT NULL,
    Amount DECIMAL(10, 2) NOT NULL,
    dateMovement DATETIMEOFFSET NOT NULL DEFAULT GETDATE(),
    FOREIGN KEY (IdSenderAccount) REFERENCES Accounts(Id),
    FOREIGN KEY (IdRecipientAccount) REFERENCES Accounts(Id)
);
GO

CREATE INDEX IX_Movements_IdSenderAccount ON Movements(IdSenderAccount)
CREATE INDEX IX_Movements_IdRecipientAccount ON Movements(IdRecipientAccount)
GO