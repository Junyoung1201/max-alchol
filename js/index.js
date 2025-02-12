function updateSituation() {
    situation.innerHTML = `${weight}kg인 ${gender === 'male' ? '남성' : '여성'}이 ${alchol}도 술을 ${drink}병(${ml * drink}ml)`;
    
    if(afterHour <= 0) {
        situation.innerHTML += ` 마셨습니다.`;
        afterHour = 0;
    } else {
        situation.innerHTML += ` 마신 후 ${afterHour}시간이 흘렀습니다.`;
    }
    
    const fixed = (float, v = 2) => parseFloat(float.toFixed(v));
    const PREFIX = `:&nbsp;&nbsp;`;

    /*
        al_w    : 음주한 사람이 섭취한 알코올(g)
        al_max  : 혈중 알코올농도 최고 찍었을 때(%)
        al_dc   : 혈중 알코올농도 감소량(%)
        al_tb   : 최종 혈중 알코올농도(%)
        d       : 치사량임?
    */
    let al_w    = (ml * drink) * (alchol/100) * 0.7894 * 0.7;
    let al_max  = al_w / (10 * weight * gOffset);
    let al_dc   = 0.015 * afterHour;
    let al_tb   = Math.max(al_max - al_dc, 0);
    let mode    = 'idle';
    let comment = '아뇨';

    rsAlchol.innerHTML           = `${PREFIX}${fixed(al_w)}g`;
    rsAlcholBlood.innerHTML      = `${PREFIX}${fixed(al_max, 3)}%`
    rsAlcholBloodDc.innerHTML    = `${PREFIX}${fixed(al_dc, 3)}%`
    rsAlcholBloodTotal.innerHTML = `${PREFIX}${fixed(al_tb, 3)}%`
    rsCost.innerHTML             = `${PREFIX}${(cost * drink).toLocaleString()}원`

    if(between(al_tb, 0.01, 0.03)) {
        comment = '아뇨 (가벼운 이완, 약간의 기분 고양)'
    }

    if(between(al_tb, 0.04, 0.06)) {
        comment = '아뇨 (판단력 약간 저하, 경미한 이완, 사교성이 증가할 수 있음)'
    }

    if(between(al_tb, 0.07, 0.09)) {
        comment = '아뇨 (운전 금지, 판단력 저하, 자제력 감소, 과장된 행동이 나타날 수 있음)'
    }

    if(between(al_tb, 0.1, 0.15)) {
        comment = '아뇨 (균형 감각과 협응력이 크게 저하, 감정적 불안정, 공격성, 운동 장애)'
    }

    if(between(al_tb, 0.16, 0.2)) {
        comment = '아뇨 (심한 혼란, 무의식 가능성, 기억 상실)'
    }

    if(between(al_tb, 0.21, 0.29)) {
        comment = '아뇨 (명백한 혼란, 두통, 구토, 의식의 흐릿함)'
    }

    if(between(al_tb, 0.3, 0.4)) {
        comment = '아마도 (무의식 상태, 호흡 억제, 심박수 저하)'
    }

    if(0.2 <= al_tb) {
        mode = 'danger';
    }

    if(0.4 <= al_tb) {
        mode = 'death';
        comment = '예'
    }

    result.setAttribute("mode", mode);
    rsDeath.innerHTML = `${PREFIX}${comment}`;
}

function updateState() {
    weight = inputWeight.value;
    alchol = inputAlchol.value;
    drink = inputDrink.value;
    ml = inputML.value;
    cost = inputCost.value;
    afterHour = inputAfterHour.value;

    gender = document.querySelector("input#male").checked ? "male" : "female";
    updateSituation();
}

updateSituation();
setInterval(updateState, 100);