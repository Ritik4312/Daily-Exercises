const getExpense = async () => {
    // const data = []
    const response = await fetch("http://localhost:3000/api/expense/1")
    return response.json();
}
export default getExpense;