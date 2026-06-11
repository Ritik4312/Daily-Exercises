// create Alies of type with name CarYear
type CarYear = number
type car = {
    year: CarYear
    brand: string
}
const carYear: CarYear = 2001;
const carData : car = {
    year: carYear,
    brand: "Toyota"
}
console.log(`car details ${carData.year} and car brand ${carData.brand}`);
