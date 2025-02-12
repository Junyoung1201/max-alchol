function onValueChange(e) {
    let id = e.target.id;
    let value = e.target.value;
    switch(id) {
        case 'inputML':
            setML(value);
            break;
        case 'inputWeight':
            setWeight(value);
            break;
        case 'inputAlchol':
            setAlchol(value);
            break;
        case 'inputDrink':
            setDrink(value);
            break;
        case 'inputAfterHour':
            setAfterHour(value);
            break;
        case 'inputCost':
            setCost(value);
            break;
    }
}

inputML.addEventListener('keydown', onValueChange)
inputWeight.addEventListener('keydown', onValueChange)
inputAlchol.addEventListener('keydown', onValueChange)
inputDrink.addEventListener('keydown', onValueChange)
inputAfterHour.addEventListener('keydown', onValueChange)
inputCost.addEventListener('keydown', onValueChange)

document.querySelector("input#male").addEventListener('change', (e) => {
    if(e.target.checked) {
        setGender('male')
    }
});
document.querySelector("input#female").addEventListener('change', (e) => {
    if(e.target.checked) {
        setGender('female')
    }
});