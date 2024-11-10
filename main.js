const lengthUnits = ['Meter', 'Kilometer', 'Centimeter', 'Millimeter', 'Nanometer', 'Mile', 'Yard', 'Foot', 'Inch'];
const lengthUnitItems = lengthUnits.map(lengthUnit => `<option>${lengthUnit}</option>`);
const lengthUnitList = document.getElementsByClassName('unit');

// Populate dropdowns
Array.from(lengthUnitList).forEach(unitElement => {
    unitElement.innerHTML = lengthUnitItems.join('');
});

// Conversion factors relative to 1 meter
const conversionFactors = {
    Meter: 1,
    Kilometer: 0.001,
    Centimeter: 100,
    Millimeter: 1000,
    Nanometer: 1_000_000_000,
    Mile: 1 / 1609.34,
    Yard: 1.09361,
    Foot: 3.28084,
    Inch: 39.3701
};

function convert() {
    const value = parseFloat(document.getElementById('value').value);
    const unitFrom = document.getElementById('unitFrom').value;
    const unitTo = document.getElementById('unitTo').value;
    
    if (isNaN(value)) {
        document.getElementById('result').innerHTML = "Please enter a valid number";
        return;
    }

    // Convert input value to meters first
    const valueInMeters = value / conversionFactors[unitFrom];
    // Convert from meters to the target unit
    const result = valueInMeters * conversionFactors[unitTo];
    
    // Display the result
    document.getElementById('result').innerHTML = `${value} ${unitFrom} = ${result.toFixed(4)} ${unitTo}`;
}
