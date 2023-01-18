import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const endpoint = "http://localhost:8000/api";

const ShowEmployees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllEmployees = async () => {
    const response = await axios.get(endpoint + "/employees");
    setEmployees(response.data);
  };

  const deleteEmployee = async (id) => {
    await axios.delete(endpoint + "/employees/" + id);
    getAllEmployees();
  };

  return (
    <div className="container">
      <Link to="/create" className="btn btn-success btn-sm d-block">
        Create
      </Link>
      <div className="p-2 mt-4 d-flex flex-row justify-content-between bg-secondary text-light">
        <div>First Name</div>
        <div>Last Name</div>
        <div>Email</div>
        <div>Actions</div>
      </div>
      <div className="mt-2">
        {employees.map((employee) => (
          <div className="d-flex flex-row justify-content-between mb-1">
            <div key={employee.id}></div>
            <div>{employee.first_name}</div>
            <div>{employee.last_name}</div>
            <div>{employee.email}</div>
            <div>
              <Link to={"/edit/" + employee.id} className="btn btn-success btn-sm">
                Edit
              </Link>
              <button
                onClick={() => deleteEmployee(employee.id)}
                className="btn btn-danger btn-sm m-1"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowEmployees;
