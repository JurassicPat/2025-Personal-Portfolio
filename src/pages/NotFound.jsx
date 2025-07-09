// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-vh-100 d-flex flex-column justify-content-center align-items-center text-light bg-dark text-center p-5">
      <h1 className="display-3">Whoops</h1>
      <p className="lead">I think you made a wrong turn.</p>
      <Link to="/" className="btn btn-outline-light mt-3">
        Go Back Home
      </Link>
    </main>
  );
}
