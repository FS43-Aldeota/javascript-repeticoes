let diaSelect = document.querySelector("#dia");
let mesSelect = document.querySelector("#mes");
let anoSelect = document.querySelector("#ano");

for (let i = 1; i <= 31; i++) {
    diaSelect.innerHTML += `<option value="${i}">${i}</option>`;
}

for (let i = 1; i <= 12; i++) {
    mesSelect.innerHTML += `<option value="${i}">${i}</option>`;
}

for (let i = 2025; i >= 1925; i--) {
    anoSelect.innerHTML += `<option value="${i}">${i}</option>`;
}

function atualizarDias(mes) {
    // numero de dias do mes
    let dias = 31;
    // verifica qual mes foi escolhido e reatribui a variavel dias
    switch (mes) {
        case "1":
            dias = 31;
            break;
        case "2":
            let anoValue = Number(anoSelect.value);
            if (anoValue % 400 == 0) {
                dias = 29;
            } else if(anoValue % 4 == 0 && anoValue % 100 != 0){
                dias = 29;
            }else{
                dias = 28
            }
            break;
        case "3":
            dias = 31;
            break;
        case "4":
            dias = 30;
            break;

        default:
            alert("Escolha um mês válido")
            return; 
    }

    // limpando o select de dia
    diaSelect.innerHTML = "";

    // inseri a nova quantidade de dias
    for (let i = 1; i <= dias; i++) {
        diaSelect.innerHTML += `<option value="${i}">${i}</option>`;
    }
}

function atualizarAno(){
    atualizarDias(mesSelect.value);
}

