export const getEmployeesFromApi = async () => {
  const request = await fetch('http://localhost:3001/employees');
  const requestJson =  await request.json();
  return requestJson;
}

export const allDepartments = [
  'TI',
  'Financeiro',
  'RH',
  'Marketing'
]