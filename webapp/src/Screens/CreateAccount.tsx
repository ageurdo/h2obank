import { useForm, SubmitHandler } from "react-hook-form";
import "../index.css";
import { AccountContext } from "../Context/ContextProvider";
import { useContext } from "react";
import { createBankAccount } from "../Services/api";
import { NavLink } from "react-router-dom";
import loginBackground from "../assets/loginBackground.jpg";
import loginBackground2 from "../assets/loginBackground2.jpg";
import logo from "../assets/H2O-Innobank-negative.svg";

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
      <div
        className="bg-white w-1/2 h-full bg-no-repeat"
        style={{
          backgroundImage: `url(${loginBackground2})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-md p-4 bg-white rounded py-8 px-8 shadow-2xl shadow-gray-900 ">
        <h2 className="font-regular text-3xl mb-4 text-center">
          Criação de Conta Bancária
        </h2>
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
            <button
              type="submit"
              value="Criar Conta"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded"
            >
              Criar
            </button>
            <NavLink
              to="/login"
              className="text-blue-700  flex my-4 justify-center "
            >
              Já tenho conta
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
