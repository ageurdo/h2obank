import { useForm, SubmitHandler } from "react-hook-form";
import "../index.css";
import { AccountContext } from "../Context/ContextProvider";
import { useContext } from "react";
import { loginBankAccount } from "../Services/api";
import { NavLink } from "react-router-dom";
import loginBackground from "../assets/loginBackground.jpg";
import loginBackground2 from "../assets/loginBackground2.jpg";
import logo from "../assets/H2O-Innobank-negative.svg";
import negativeLogo from "../assets/simboloNegative.svg";

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
    <div className="h-screen flex justify-center items-center">
      <div
        className="flex w-1/2 h-full"
        style={{ backgroundImage: `url(${loginBackground})` }}
      >
        <div className="m-4">
          <img
            src={logo}
            alt="logo"
            className="w-32 mx-auto justify-self-start-start flex"
          />
        </div>
      </div>
      <div className="bg-white w-1/2 h-full bg-no-repeat" 
      style={{ backgroundImage: `url(${loginBackground2})`, backgroundPosition: "right"}}
      ></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-md p-4 bg-white rounded py-8 px-8 shadow-2xl shadow-gray-900 ">
        <h2 className="font-regular text-3xl mb-4 text-center">
          Entra na conta bancária
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
          <div className="">
            <label htmlFor="name" className="block mb-2">
              Nome:
            </label>
            <input
              {...register("name", { required: true })}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            {errors.name && (
              <span className="text-red-500">Este campo é obrigatório</span>
            )}
          </div>
          <div className="">
            <button type="submit" value="Criar Conta" className="button">
              Entrar
            </button>
            <span className="flex justify-center items-center gap-2">
              Tem uma conta?
              <NavLink
                to="/create"
                className="text-blue-700  flex my-4 justify-center "
              >
                Criar
              </NavLink>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginAccount;
