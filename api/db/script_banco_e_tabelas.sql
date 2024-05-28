CREATE DATABASE h20bank
GO

USE h20bank
GO

CREATE TABLE Accounts (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Name VARCHAR(50) NOT NULL,
    Balance DECIMAL(10, 2) NOT NULL DEFAULT 0.00
)
GO

CREATE TABLE Movements (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    IdSenderAccount INT NOT NULL,
    IdRecipientAccount INT NOT NULL,
    Amount DECIMAL(10, 2) NOT NULL,
    dateMovment DATETIME NOT NULL DEFAULT GETDATE(),
    FOREIGN KEY (IdSenderAccount) REFERENCES Accounts(Id),
    FOREIGN KEY (IdRecipientAccount) REFERENCES Accounts(Id)
)
GO

CREATE INDEX IX_Movements_IdSenderAccount ON Movements(IdSenderAccount)
CREATE INDEX IX_Movements_IdRecipientAccount ON Movements(IdRecipientAccount)
GO