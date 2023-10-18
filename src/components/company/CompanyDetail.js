
import React from "react";

function CompanyDetail({ company }) {
  return (
    <div>
      <h2>{company.name}</h2>
      <p>{company.description}</p>
      <p>Number of Employees: {company.numEmployees}</p>
    </div>
  );
}

export default CompanyDetail;
