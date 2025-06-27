import React from "react";
import Data from "/src/data.jsx";
import { useParams } from "react-router-dom";

const Role = () => {
  const { id } = useParams();

  if (!Data || !Data.roles) {
    return <p>Roles data not found</p>;
  }

  const matched = Data.roles.find((x) => String(x.id) === String(id));

  if (!matched) {
    return <p>Product not found</p>;
  }

  return (
    <div className="card">
      <h1>{matched.name}</h1>
    </div>
  );
};

export default Role;
