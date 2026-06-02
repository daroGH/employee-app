import './App.css'
import { useState, useEffect } from 'react';
import Employees from './components/Employees/Employees';

function App() {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/applicants.json');
        if (!response.ok) throw new Error('Failed to fetch employee records');
        const data = await response.json();
        setEmployees(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEmployees();
  }, []);

  if (isLoading) {
    return <div>Loading</div>
  };

  if (error)  {
    return <div>Error: {error}</div>
  };

  return (
    <div>
      <Employees employees={employees}/>
    </div>
  )
}

export default App
