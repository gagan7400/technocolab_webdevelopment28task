// Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin

let Kelvin = document.getElementById("kelvin");
let fahrenheit = document.getElementById("fahrenheit");
// let newton = Math.floor(Celsius * (33 / 100))
// console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.
// The temperature is ${newton} degrees newton
// `)
function convertKelvin() {
    let k = Number(Kelvin.value)
    let f = Number(fahrenheit.value)
    let Celsius = k - 273;
    fahrenheit.value = Math.floor(Celsius * (9 / 5) + 32);
}
function convertFahrenheit() {
    let k = Number(Kelvin.value)
    let f = Number(fahrenheit.value)
    Kelvin.value = Math.floor((f - 32) * 5 / 9 + 273.15)

}