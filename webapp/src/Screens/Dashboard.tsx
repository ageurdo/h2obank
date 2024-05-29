import { NavLink } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <div>
        <ul className="flex justify-center items-center">
          <li className="mr-4">
            <NavLink to="/transfer" className="text-blue-700">
              Transferência
            </NavLink>
          </li>
          <li className="mr-4">
            <NavLink to="/history" className="text-blue-700">
              Histórico
            </NavLink>
          </li>
        </ul>
      </div>
      <div>Dashboard</div>
    </>
  );
}
