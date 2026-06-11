interface car{
    year: number
    brand: string
    model:string 
}
interface EV extends car{
    battery: number
}
const carData : EV = {
    year: 2001,
    brand: "Toyota",
    model: "Camry",
    battery: 100
}
console.log(`car details ${carData.year} and car brand ${carData.brand}`);