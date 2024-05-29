import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white text-center p-4">
      <div className="container mx-auto">
        <Link to="/" className="text-2xl font-bold">
          <img
            src="your-application-logo.png"
            alt="Application Logo"
            className="inline-block h-10 w-auto mr-2"
          />
          Application Name
        </Link>
        <p className="text-sm mt-2">
          &copy; {new Date().getFullYear()} Application Name. All rights
          reserved.
        </p>
        <nav className="flex justify-center mt-4">
          <Link
            to="/transfer"
            className="text-white mr-4 hover:text-gray-200"
          >
            Transferência
          </Link>
          <Link
            to="/history"
            className="text-white mr-4 hover:text-gray-200"
          >
            Histórico
          </Link>
          <Link
            to="/"
            className="text-white mr-4 hover:text-gray-200"
          >
            Sair
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;