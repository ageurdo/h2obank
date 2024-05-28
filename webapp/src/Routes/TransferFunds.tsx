import { useForm, SubmitHandler } from "react-hook-form";
import "../index.css";

type Inputs = {
  senderAccount: string;
  recipientAccount: string;
  balance: string;
};

const TransferFunds = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // Aqui você pode criar uma nova conta bancária com o nome fornecido e saldo inicial zero
    const newAccount = {
      senderAccount: data.senderAccount,
      recipientAccount: data.recipientAccount,
      balance: data.balance,
    };
    console.log(newAccount);
  };

  return (
    <div className="container">
      <h2 className="title">Transferência entre contas</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-4 ">
          <label htmlFor="senderAccount">Conta remetente:</label>
          <input {...register("senderAccount", { required: true })} className="input"/>
          {errors.senderAccount && <span>Este campo é obrigatório</span>}
        </div>
        <div className="my-4 ">
          <label htmlFor="recipientAccount">Conta Destino:</label>
          <input {...register("recipientAccount", { required: true })} className="input"/>
          {errors.recipientAccount && <span>Este campo é obrigatório</span>}
        </div>
        <div className="my-4">
          <label htmlFor="balance">Valor:</label>
          <input {...register("balance", { required: true })} className="input"/>
          {errors.balance && <span>Este campo é obrigatório</span>}
        </div>
     

        <div className="my-4">
          <button type="submit" value="Criar Conta" className="button">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default TransferFunds;
