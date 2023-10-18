
import React, { useState } from "react";
import JoblyApi from '../Api';
import CompanyCard from "./CompanyCard";
import CompanyList from "./CompanyList"; 
import CompanyDetail from "./CompanyDetail";


function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [search, setSearch] = useState("");

  const filteredCompanies = companies.filter(company =>
    company.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    async function fetchCompanies() {
      try {
        const data = await JoblyApi.getCompanyList();
        setCompanies(data.companies);
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    }

    fetchCompanies();
  }, []);

  return (
    <div>
      <h1>Companies</h1>
      <input
        type="text"
        placeholder="Search companies..."
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredCompanies.map(company => (
        <CompanyCard key={company.handle} company={company} />
      ))}
    </div>
  );
}

export default CompanyList;