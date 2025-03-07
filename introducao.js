let aluno1 = "Tiago";
let aluno2 = "Rubens";
let aluno3 = "Marcio";
let aluno4 = "Pedro";

let alunos = ["Tiago", "Rubens", "Marcio", "Pedro"];
alunos[4] = "Ailana";
alunos.push("Victor");
alunos.push("André");
alunos.push("Ieda");
let idades = [23, 25, 17, 31];
let habilitados = [true, false, false, false];

// console.log("Alunos: ", alunos);
// console.log("Aluno na posição 0:", alunos[0]);
// console.log("Aluno na posição 1:", alunos[1]);
// console.log("Aluno na posição 2:", alunos[2]);
// console.log("Aluno na posição 3:", alunos[3]);
// console.log("Aluno na posição 4:", alunos[4]);
// console.log("Aluno na posição 5:", alunos[5]);
// console.log("Aluno na posição 6:", alunos[6]);
// console.log("Aluno na posição 7:", alunos[7]);

// percorrendo o array no sentido crescente
for(let i = 0; i < alunos.length; i++){
    console.log(`Aluno na posição ${i}:`, alunos[i]);
}

// percorrendo o array no sentido decrescente
// for(let i = alunos.length - 1; i >= 0; i--){
//     console.log(`Aluno na posição ${i}:`, alunos[i]);
// }

// for(let i = 0; i < alunos.length; i++){
//     console.log(`${alunos[i]} tem ${alunos[i].length} letras`);
// }
