function toNum(value) {
    try {
        if(typeof value === "string") {
            return parseInt(value);
        }
        if(typeof value === 'number') {
            return value;
        }
    } catch (err) {
        throw err;
    }
}

function between(value, num1, num2) {
    let min = Math.min(num1, num2);
    let max = Math.max(num1, num2);

    return min <= value && value <= max;
}