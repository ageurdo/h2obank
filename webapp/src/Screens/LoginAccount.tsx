import { useForm, SubmitHandler } from "react-hook-form";
import "../index.css";
import { AccountContext } from "../Context/ContextProvider";
import { useContext } from "react";
import { loginBankAccount } from "../Services/api";
import { NavLink } from "react-router-dom";

type Inputs = {
  name: string;
  balance: number;
};

const LoginAccount = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const { loginAccountContext } = useContext(AccountContext);

 

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const newAccount = {
      name: data.name,
      balance: data.balance,
    };
    console.log(newAccount);

    await loginBankAccount(newAccount.name).then(
      (response) => {
        loginAccountContext({
          name: response.name,
          balance: response.balance,
          id: response.id,
        });
        console.log("loginBankAccount -> ", response);
        return response;
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div className="container mx-auto h-full flex-1 flex justify-center items-center">
      <div className="w-96 bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Entra na conta bancária</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-4">
            <label htmlFor="name" className="block mb-2">
              Nome:
            </label>
            <input
              {...register("name", { required: true })}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            {errors.name && <span className="text-red-500">Este campo é obrigatório</span>}
          </div>

          <div className="my-4">
            <button type="submit" value="Criar Conta" className="w-full bg-blue-500 text-white py-2 px-4 rounded">
              Entrar
            </button>
            <NavLink to="/create" className="text-blue-700  flex my-4 justify-center ">
              Criar conta bancária
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginAccount;
