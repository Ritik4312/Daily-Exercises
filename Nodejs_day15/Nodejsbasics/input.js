const readline = require('readline');
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
r1.question("Enter your name" ,(name) =>{
    const date = new Date()

    const formatDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
    console.log(`Name = ${name} Date = ${formatDate}`)
    r1.close();

})