function convertTemperature() {
    const celsiusInput = document.getElementById("celsius").value;
    const celsius = parseFloat(celsiusInput);

    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        const kelvin = celsius + 273.15;

        const results = `
            <p>${celsius} Celsius is:</p>
            <p>${fahrenheit.toFixed(2)} Fahrenheit</p>
            <p>${kelvin.toFixed(2)} Kelvin</p>
        `;

        document.getElementById("results").innerHTML = results;
    } else {
        alert("Please enter a valid temperature in Celsius.");
    }
}