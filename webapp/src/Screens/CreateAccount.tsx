import { useForm, SubmitHandler } from "react-hook-form";
import "../index.css";
import { AccountContext } from "../Context/ContextProvider";
import { useContext } from "react";
import { createBankAccount } from "../Services/api";
import { NavLink } from "react-router-dom";

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

  const { account, loginAccountContext } = useContext(AccountContext);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // Aqui você pode criar uma nova conta bancária com o nome fornecido e saldo inicial zero
    const newAccount = {
      name: data.name,
      balance: data.balance,
    };
    console.log(newAccount);

    const response = await createBankAccount(
      newAccount.name,
      newAccount.balance
    ).then(
      (response) => {
        loginAccountContext({
          id: response.id,
          name: newAccount.name,
          balance: newAccount.balance,
        });
        console.log("Then -> ", response);
        return response;
      },
      (error) => {
        console.log(error);
      }
    );

    console.log("retorno da request", response);
    console.log(account, account);
  };

  return (
    <div className="container mx-auto h-full flex-1 flex justify-center items-center">
      <div className="w-96 bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Criação de Conta Bancária</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-4 ">
            <label htmlFor="name">Nome:</label>
            <input
              {...register("name", { required: true })}
              className="input"
            />
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
            <button type="submit" value="Criar Conta" className="w-full bg-blue-500 text-white py-2 px-4 rounded">
              Criar
            </button>
            <NavLink to="/login" className="text-blue-700  flex my-4 justify-center ">
            Já tenho conta
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
