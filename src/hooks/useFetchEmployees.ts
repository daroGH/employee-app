import { useState, useEffect } from 'react';

export interface employees {
  id: string;
  name: string;
  role: string;
  department:
  | "Engineering"
  | "Operations"
  | "Product"
  | "Infrastructure"
  | "Data";
  status: "Active" | "On Leave" | "Probation";
  startDate: string;
  skills: string[];
  avatar: null;
}[];

export const useFetchEmployees = () => {
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
        // Type check before store

        // Check queryParam for any search/sort and return enriched data 
        // Search filter return filter data 
        // Sort 
        if (searchInput && searchInput.trim() !== '') {
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

  return { employees, error, isLoading }

}