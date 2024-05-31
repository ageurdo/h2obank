import React from "react";
import { NavLink } from "react-router-dom";
import { Account } from "../Services/types";

interface HeaderProps {
  user: Account; // Add null as a possible type for the user prop
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ user = null, onLogout }) => {
  // Provide a default value of null for the user prop
  const initials = user?.name
    ? user.name
        .split(" ")
        .map((word) => word[0])
        .join("")
    : "";

  return (
    <nav className="bg-blue-500 h-16 flex justify-between items-center w-full px-16">
      <div className="flex items-center ml-4 gap-4">
        <div className="w-10 h-10 bg-gray-50 rounded-full flex justify-center items-center">
          <span className="text-lg text-blue-500 font-bold">{initials}</span>
        </div>
        <div>
          <span className="text-lg text-white font-bold">{user?.name}</span>
          <br />
          <span className="text-sm text-white">{`Saldo: R$ ${user?.balance}`}</span>
        </div>
      </div>
      <ul className="flex justify-center items-center">
        <li className="mr-4">
          <NavLink to="/transfer" className="text-white">
            Transferência
          </NavLink>
        </li>
        <li className="mr-4">
          <NavLink to="/history" className="text-white">
            Histórico
          </NavLink>
        </li>
        <li>
          <button
            className="bg-blue-700 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={onLogout}
          >
            Sair
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
