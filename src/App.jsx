import './App.css'
import Employees from './components/Employees/Employees';
import Filters from './components/Filters/Filters';
import { useFetchEmployees } from './hooks/useFetchEmployees';

function App() {
  const {employees, error,isLoading} = useFetchEmployees();

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
