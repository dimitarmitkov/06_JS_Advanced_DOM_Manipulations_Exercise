function attachEventsListeners() {

    let inputArea = document.querySelector(' div input#inputDistance');
    let resultArea = document.querySelector('html body div input#outputDistance');
    let convertButton = document.querySelector('html body div input#convert');

    let currentInputUnit = document.getElementById('inputUnits');
    let currentOutputUnit = document.getElementById('outputUnits');


    convertButton.addEventListener('click', result);
    let inputText = '';

    let unitsValues  = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    };

    function result() {
        inputText = inputArea.value;

        let temp = unitsValues[currentInputUnit.value]*(Number(inputText));

        resultArea.value = (Number(temp))/(unitsValues[currentOutputUnit.value]);
    }
}