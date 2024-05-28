import { useForm, SubmitHandler } from "react-hook-form";
import "../index.css";
import { AccountContext } from "../Context/ContextProvider";
import { useContext } from "react";

type Inputs = {
  name: string;
  balance: number;
};

const CreateAccount = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const { account, createAccountContext } = useContext(AccountContext);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // Aqui você pode criar uma nova conta bancária com o nome fornecido e saldo inicial zero
    const newAccount = {
      name: data.name,
      balance: data.balance,
    };
    console.log(newAccount);
    createAccountContext(newAccount.name, newAccount.balance);
    console.log(account, account);
  };

  return (
    <div className="container">
      <h2 className="title">Criação de Conta Bancária</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-4 ">
          <label htmlFor="name">Nome:</label>
          <input {...register("name", { required: true })} className="input" />
          {errors.name && <span>Este campo é obrigatório</span>}
        </div>
        <div className="my-4">
          <label htmlFor="balance">Saldo:</label>
          <input
            {...register("balance", { required: true })}
            className="input"
          />
          {errors.name && <span>Este campo é obrigatório</span>}
        </div>

        <div className="my-4">
          <button type="submit" value="Criar Conta" className="button">
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
