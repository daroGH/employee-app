import './App.css'

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


  return (
    <div>
      Hello
    </div>
  )
}

export default App
