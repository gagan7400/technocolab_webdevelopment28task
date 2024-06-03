// Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin
const Kelvin = 299;
let Celsius = Kelvin - 273;
let fahrenheit = Math.floor(Celsius * (9 / 5) + 32);
let newton = Math.floor(Celsius * (33 / 100))
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.
The temperature is ${newton} degrees newton
`)