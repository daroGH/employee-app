interface EmployeesProps {
  employees: {
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
}

export default function Employees(props: EmployeesProps) {
  const { employees } = props;

  function getInitials(name: string) {
    return name
      .trim() // Remove extra spacing from ends
      .split(/\s+/) // Split by any number of spaces
      .map((word) => word[0].toUpperCase()) // Get first letter of each word
      .join(""); // Combine them back together
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xs border border-slate-100 overflow-hidden">
      <div className="p-6 border-b border-slate-100">
        <h1 className="text-xl font-bold text-black!">Employee App</h1>
      </div>

      <div className="px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {employees.map((employee) => (
            <div
              key={employee.id}
              className="p-4 bg-white rounded-lg border border-slate-200 text-black shadow-xs flex flex-col justify-between"
            >
              <div className="py-5 border-2">{getInitials(employee.name)}</div>
              <div>
                <div className="text-sm font-bold text-black">
                  {employee.name}
                </div>
                <p className="text-xs mt-0.5">{employee.role}</p>
                <p className="text-xs mt-1">{employee.department}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider font-medium text-slate-400">
                  Status
                </span>
                <span
                  className={`text-xs font-medium ${
                    employee.status === "Active"
                      ? "text-blue-600"
                      : employee.status === "Probation"
                        ? "text-yellow-600"
                        : "text-red-600"
                  }`}
                >
                  {employee.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
