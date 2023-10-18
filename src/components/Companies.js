import React, { useState, useEffect } from "react";
import CompanyList from "./CompanyList";
// import CompanyCard from "./company/CompanyCard";
// import CompanyDetail from "./company/CompanyDetail";
import JoblyApi from "./Users/windie/Documents/Springboard/SEC/React/react-jobly/api.js"; 

function Companies() {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCompanies() {
      try {
        const data = await JoblyApi.getCompanyList(); 
        setCompanies(data.companies);
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading companies", error);
      }
    }

    getCompanies();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Companies</h1>
      <CompanyList companies={companies} />
    </div>
  );
}

export default Companies;
