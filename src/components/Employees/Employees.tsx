interface EmployeesProps {}

export default function Employees(props: EmployeesProps) {
  const { employees } = props;

  return <div>{employees.map((employee) => employee.name)}</div>;
}
