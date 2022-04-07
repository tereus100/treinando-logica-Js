
let nomeCompleto = "Mateus Farias Santos";

console.log(nomeCompleto);


let numeroA = 5 
let  numeroB = 3;
let resultado = numeroA * numeroB;

console.log(resultado);

function saudacao() {

	console.log("Oi, eu sou o Goku!");

	}



function multiplica (vA, vB) {

	console.log(vA * vB);
 const resultado = vA * vB;
 console.log(resultado);
	}

function podeDirigir(idade) {

	if (idade > 18) {
		console.log("Você pode dirigir");
		}
 else {
	console.log("Você não pode dirigir");
 }
	}

for (let i = 0; i <= 20; i++) {
  console.log(i);
}

for (let i = 0; i <= 20; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}



function tabuada(n) {

	let c = 1;

	while ( c <= 10) {
		console.log(n + " X " + c + " = " + (c * n));
		c++;

		}

	}

tabuada(2);

function converterEmHoras(n_minutos) {

	console.log(n_minutos + " minutos equivalem a " + (n_minutos / 60) + " horas.");
}

converterEmHoras(180);
   