import './App.css'
import { useState, useEffect } from 'react';
import Employees from './components/Employees/Employees';
import Filters from './components/Filters/Filters';

function App() {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const queryParams = new URLSearchParams(window.location.search)
	const searchInput = queryParams.get('search')

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/applicants.json');
        if (!response.ok) throw new Error('Failed to fetch employee records');
        const data = await response.json();

        // Check queryParam for any search/sort and return enriched data 
        // Search filter return filter data 
        // Sort 
        if(searchInput && searchInput.trim()!== '') {
          const filteredData = 
            data.filter(employee => employee.name.toLowerCase().includes(searchInput.toLocaleLowerCase));
          
          return setEmployees(filteredData)
        } 

        setEmployees(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEmployees();
  }, [searchInput]);

  if (isLoading) {
    return <div>Loading</div>
  };

  if (error)  {
    return <div>Error: {error}</div>
  };

  return (
    <div>
      <Filters />
      <Employees employees={employees}/>
    </div>
  )
}

export default App
