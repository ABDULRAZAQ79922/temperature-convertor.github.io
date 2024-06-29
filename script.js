function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const inputScale = document.getElementById('inputScale').value;

    if (isNaN(inputTemp)) {
        alert('Please enter a valid temperature');
        return;
    }

    let celsius, fahrenheit, kelvin;

    if (inputScale === 'Celsius') {
        celsius = inputTemp;
        fahrenheit = (inputTemp * 9/5) + 32;
        kelvin = inputTemp + 273.15;
    } else if (inputScale === 'Fahrenheit') {
        celsius = (inputTemp - 32) * 5/9;
        fahrenheit = inputTemp;
        kelvin = (inputTemp - 32) * 5/9 + 273.15;
    } else if (inputScale === 'Kelvin') {
        celsius = inputTemp - 273.15;
        fahrenheit = (inputTemp - 273.15) * 9/5 + 32;
        kelvin = inputTemp;
    }

    document.getElementById('results').innerHTML = `
        <p>Celsius: ${celsius.toFixed(2)}°C</p>
        <p>Fahrenheit: ${fahrenheit.toFixed(2)}°F</p>
        <p>Kelvin: ${kelvin.toFixed(2)}K</p>
    `;

    displayScale(celsius, fahrenheit, kelvin);
}

function displayScale(celsius, fahrenheit, kelvin) {
    const scale = document.getElementById('scale');
    scale.innerHTML = `
        <div class="scale-part">Celsius: ${celsius.toFixed(2)}°C</div>
        <div class="scale-part">Fahrenheit: ${fahrenheit.toFixed(2)}°F</div>
        <div class="scale-part">Kelvin: ${kelvin.toFixed(2)}K</div>
    `;
}
