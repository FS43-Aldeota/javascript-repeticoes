let diaSelect = document.querySelector("#dia");

for(let i = 1; i <= 31; i++){
    diaSelect.innerHTML += `<option value="${i}">${i}</option>`
}