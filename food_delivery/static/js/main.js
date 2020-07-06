$(document).on('click', '.number-spinner button', function () {

    var btn = $(this),
        oldValue = btn.closest('.number-spinner').find('input').val().trim(),
        newVal = 0;

    if (btn.attr('data-dir') == 'up') {
        newVal = parseInt(oldValue) + 1;
    } else {
        if (oldValue > 0) {
            newVal = parseInt(oldValue) - 1;
        } else {
            newVal = 0;
        }
    }
    btn.closest('.number-spinner').find('input').val(newVal);
});

let priceArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

$(document).on('click', '.number-spinner button', function () {
    let m1 = document.getElementById('m1').textContent;
    let m2 = document.getElementById('m2').textContent;
    let m3 = document.getElementById('m3').textContent;
    let m4 = document.getElementById('m4').textContent;
    let m5 = document.getElementById('m5').textContent;
    let m6 = document.getElementById('m6').textContent;
    let m7 = document.getElementById('m7').textContent;
    let m8 = document.getElementById('m8').textContent;
    let m9 = document.getElementById('m9').textContent;
    let m10 = document.getElementById('m10').textContent;

    let pm1 = document.getElementById('countM1').value;
    let pm2 = document.getElementById('countM2').value;
    let pm3 = document.getElementById('countM3').value;
    let pm4 = document.getElementById('countM4').value;
    let pm5 = document.getElementById('countM5').value;
    let pm6 = document.getElementById('countM6').value;
    let pm7 = document.getElementById('countM7').value;
    let pm8 = document.getElementById('countM8').value;
    let pm9 = document.getElementById('countM9').value;
    let pm10 = document.getElementById('countM10').value;

    priceArr[0] = m1 * pm1;
    priceArr[1] = m2 * pm2;
    priceArr[2] = m3 * pm3;
    priceArr[3] = m4 * pm4;
    priceArr[4] = m5 * pm5;
    priceArr[5] = m6 * pm6;
    priceArr[6] = m7 * pm7;
    priceArr[7] = m8 * pm8;
    priceArr[8] = m9 * pm9;
    priceArr[9] = m10 * pm10;

    console.log(priceArr);

    let finalPriceArr = 0;

    for (let index = 0; index < 10; index++) {
        finalPriceArr += priceArr[index];
    }

    let finalPrice = document.getElementById('finalPrice');
    let finalMosalPrice = document.getElementById('finalModalPrice');
    finalPrice.innerText = finalPriceArr;
    finalMosalPrice.innerText = finalPriceArr;
});

function getAdmArea(data) {
    let tempArr = [];
    var selectId = document.getElementById("inputAdmArea");
    data.forEach(elem => {
        if (elem.admArea) {
            if (!tempArr.includes(elem.admArea)) {
                var createOption = document.createElement("option");
                createOption.innerHTML = elem.admArea;
                selectId.appendChild(createOption);
                tempArr.push(elem.admArea);
            }
        }
    });
}

function getDistrict(data) {
    let tempArr = [];
    var selectId = document.getElementById("inputDistrict");
    data.forEach(elem => {
        if (elem.district) {
            if (!tempArr.includes(elem.district)) {
                var createOption = document.createElement("option");
                createOption.innerHTML = elem.district;
                selectId.appendChild(createOption);
                tempArr.push(elem.district);
            }
        }
    });
}

function getTypeObject(data) {
    let tempArr = [];
    var selectId = document.getElementById("inputTypeObject");
    data.forEach(elem => {
        if (elem.typeObject) {
            if (!tempArr.includes(elem.typeObject)) {
                var createOption = document.createElement("option");
                createOption.innerHTML = elem.typeObject;
                selectId.appendChild(createOption);
                tempArr.push(elem.typeObject);
            }
        }
    });
}

function getTable(data, page) {
    console.log(data);
    let data2 = [];
    console.log(data.length);
    if (data.length < 20) {
        for (let index = 0; index < data.length; index++) {
            data2[index] = data[index];
        }
    } else {
        for (let index = page * 20; index < page * 20 + 20; index++) {
            if (index > data.length) {
                break
            } else {
                data2[index % 20] = data[index];
            }
        }
    }

    console.log(data2);
    if (data2.length > 0) {
        var temp = "";

        data2.forEach((u) => {
            temp += "<tr>";
            temp += "<td>" + u.name + "</td>";
            temp += "<td>" + u.typeObject + "</td>";
            temp += "<td>" + u.address + "</td>";
            temp += "<td><button type=\"submit\" class=\"btn btn-primary\" id=";
            temp += `${u.id}`
            temp += ">Выбрать</button></td>"
        })

        document.getElementById("restTable").innerHTML = temp;
    }
}

function clickHandler(event) {
    let target = event.target;
    if (target.tagName != 'BUTTON') return;

    let menu1 = document.getElementById('m1');
    let menu2 = document.getElementById('m2');
    let menu3 = document.getElementById('m3');
    let menu4 = document.getElementById('m4');
    let menu5 = document.getElementById('m5');
    let menu6 = document.getElementById('m6');
    let menu7 = document.getElementById('m7');
    let menu8 = document.getElementById('m8');
    let menu9 = document.getElementById('m9');
    let menu10 = document.getElementById('m10');

    const apilink = `http://exam-2020-1-api.std-900.ist.mospolytech.ru/api/data1/`;
    const request = new XMLHttpRequest();
    request.open('GET', apilink + `${target.id}`);

    if (target.id != '') {
        console.log(target.id);
        request.onload = reqListener;
        function reqListener() {
            menu1.innerText = JSON.parse(request.response).set_1;
            menu2.innerText = JSON.parse(request.response).set_2;
            menu3.innerText = JSON.parse(request.response).set_3;
            menu4.innerText = JSON.parse(request.response).set_4;
            menu5.innerText = JSON.parse(request.response).set_5;
            menu6.innerText = JSON.parse(request.response).set_6;
            menu7.innerText = JSON.parse(request.response).set_7;
            menu8.innerText = JSON.parse(request.response).set_8;
            menu9.innerText = JSON.parse(request.response).set_9;
            menu10.innerText = JSON.parse(request.response).set_10;
        }
        request.send();
    }
}

window.onload = function () {
    const apilink = `http://exam-2020-1-api.std-900.ist.mospolytech.ru/api/data1`;

    const request = new XMLHttpRequest();
    const request2 = new XMLHttpRequest();
    const request3 = new XMLHttpRequest();
    const request4 = new XMLHttpRequest();

    request.open('GET', apilink);
    request2.open('GET', apilink);
    request3.open('GET', apilink);
    request4.open('GET', apilink);

    request.onload = () => getDistrict(JSON.parse(request.response));
    request.send();

    request2.onload = () => getAdmArea(JSON.parse(request2.response));
    request2.send();

    request3.onload = () => getTypeObject(JSON.parse(request3.response));
    request3.send();

    var area = document.querySelector("#inputAdmArea");
    var area_val = area.options[area.selectedIndex].value;
    var distr = document.querySelector("#inputDistrict");
    var distr_val = distr.options[distr.selectedIndex].value;
    var type = document.querySelector("#inputTypeObject");
    var type_val = type.options[type.selectedIndex].value;
    var rests = document.querySelector("#inputState");
    var rests_val = rests.options[rests.selectedIndex].value == "Есть" ? 1 : 0;

    request4.onload = () => getTable(JSON.parse(request4.response).sort(function (obj1, obj2) {
        return obj1.rate - obj2.rate;
    }).filter(elem => {
        let result = true;
        if (area_val != "Не выбрано") {
            result *= (elem.admArea == area_val);
        }
        if (distr_val != "Не выбрано") {
            result *= (elem.district == distr_val);
        }
        if (type_val != "Не выбрано") {
            result *= (elem.typeObject == type_val);
        }
        if (rests_val != "Не выбрано") {
            result *= (elem.socialPrivileges == rests_val);
        }
        return result;
    }), 0);
    request4.send();

    btnTable.onclick = function () {
        document.getElementById("restTable").innerHTML = '';
        const apilink = `http://exam-2020-1-api.std-900.ist.mospolytech.ru/api/data1`;
        const request4 = new XMLHttpRequest();
        request4.open('GET', apilink);

        var area = document.querySelector("#inputAdmArea");
        var area_val = area.options[area.selectedIndex].value;
        var distr = document.querySelector("#inputDistrict");
        var distr_val = distr.options[distr.selectedIndex].value;
        var type = document.querySelector("#inputTypeObject");
        var type_val = type.options[type.selectedIndex].value;
        var rests = document.querySelector("#inputState");
        var rests_val = rests.options[rests.selectedIndex].value == "Есть" ? 1 : 0;

        setTimeout(request4.onload = () => getTable(JSON.parse(request3.response).sort(function (obj1, obj2) {
            return obj1.rate - obj2.rate;
        }).filter(elem => {
            let result = true;
            if (area_val != "Не выбрано") {
                result *= (elem.admArea == area_val);
            }
            if (distr_val != "Не выбрано") {
                result *= (elem.district == distr_val);
            }
            if (type_val != "Не выбрано") {
                result *= (elem.typeObject == type_val);
            }
            if (rests_val != "Не выбрано") {
                result *= (elem.socialPrivileges == rests_val);
            }
            return result;
        }), 0), 1000);
        request4.send();
    }

    let tbl = document.getElementById('restTable');
    tbl.onclick = clickHandler;

}