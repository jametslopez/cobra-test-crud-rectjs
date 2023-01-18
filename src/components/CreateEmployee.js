import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const endpoint = "http://localhost:8000/api/employees";

const CreateEmployee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    await axios.post(endpoint, {
      first_name: firstName,
      last_name: lastName,
      email: email,
    });
    navigate("/");
  };

  return (
    <div>
      <h3>New Register</h3>
      <form onSubmit={store}>
        <div className="mt-4">
          <label className="form-label">First Name</label>
          <input
            type="text"
            value={firstName}
            className="form-control"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            value={lastName}
            className="form-control"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <label className="form-label">Email</label>
          <input
            type="text"
            value={email}
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success mt-4">
          Save
        </button>
      </form>
    </div>
  );
};

export default CreateEmployee;
