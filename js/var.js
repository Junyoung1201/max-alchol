let gender = 'male';
let weight = 77;
let alchol = 12;
let drink  = 4;
let ml = 360;
let cost = 1300;
let gOffset = gender === 'male' ? 0.86 : 0.64;
let afterHour = 0;

function setML(value) {
    ml = toNum(value);
    updateSituation();
}

function setWeight(value) {
    weight = toNum(value);
    updateSituation();
}

function setAlchol(value) {
    alchol = toNum(value);
    updateSituation();
}

function setDrink(value) {
    drink = toNum(value);
    updateSituation();
}

function setCost(value) {
    cost = toNum(value);
    updateSituation();
}

function setAfterHour(value) {
    afterHour = toNum(value);
    updateSituation();
}

function setGender(value) {
    if(!['male','female'].includes(value)) {
        throw `올바르지 않은 성별`;
    }
    gender = value;
    updateSituation();
}