import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = "http://localhost:8000/api/employees/";

const EditEmployee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    await axios.put(endpoint + id, {
      first_name: firstName,
      last_name: lastName,
      email: email,
    });
    navigate("/");
  };

  useEffect(() => {
    const getEmployeeById = async () => {
      const response = await axios.get(endpoint + id);
      setFirstName(response.data.first_name);
      setLastName(response.data.last_name);
      setEmail(response.data.email);
    };
    getEmployeeById();
  }, []);

  return (
    <div>
      <h3>Edit Register</h3>
      <form onSubmit={update}>
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
          Update
        </button>
      </form>
    </div>
  );
};

export default EditEmployee;
