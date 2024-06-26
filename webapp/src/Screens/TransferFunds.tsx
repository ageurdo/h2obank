import { useForm, SubmitHandler } from "react-hook-form";
import "../index.css";
import { transfer } from "../Services/api";
import { TransferQuery } from "../Services/types";
import { AccountContext } from "../Context/ContextProvider";
import { useContext } from "react";

type Inputs = {
  senderAccount: string;
  recipientAccount: string;
  balance: string;
};

const TransferFunds = () => {
  const { account, loginAccountContext } = useContext(AccountContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // Aqui você pode criar uma nova conta bancária com o nome fornecido e saldo inicial zero

    const newAccount: TransferQuery = {
      sender: account.id,
      recipient: data.recipientAccount,
      amount: parseInt(data.balance),
    };

    console.log(newAccount);
    await transfer(newAccount).then(
      (response) => {
        console.log("Then -> ", response);

        loginAccountContext({
          id: account.id,
          name: account.name,
          balance: account.balance - newAccount.amount,
        });

        return response;
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div className="container">
      <h2 className="title">Transferência entre contas</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-4 ">
          <label htmlFor="recipientAccount">Conta Destino:</label>
          <input
            {...register("recipientAccount", { required: true })}
            className="input"
          />
          {errors.recipientAccount && <span>Este campo é obrigatório</span>}
        </div>
        <div className="my-4">
          <label htmlFor="balance">Valor:</label>
          <input
            {...register("balance", { required: true })}
            className="input"
          />
          {errors.balance && <span>Este campo é obrigatório</span>}
        </div>

        <div className="my-4">
          <button type="submit" value="Criar Conta" className="button">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default TransferFunds;
