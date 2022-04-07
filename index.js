let nomeCompleto = "Mateus Farias Santos";

console.log("\n");

console.log(nomeCompleto);

console.log("\n\n\n");

let numeroA = 5 , numeroB = 3;
let resultado = numeroA * numeroB;

console.log(resultado);

console.log("\n\n\n");

function saudacao() {
	
	console.log("Oi, eu sou o Goku!");
	
	}

saudacao();

console.log("\n\n\n");

function multiplica (nA, nB) {
	
	console.log(nA * nB);

	}

multiplica(5, 3);

console.log("\n\n\n");

function podeDirigir(idade) {
	
	if (idade > 18) {
		console.log("Você pode dirigir");
		}

	else {
		console.log("Você não pode dirigir");

		}

	}

podeDirigir(15);
podeDirigir(20);

console.log("\n\n\n");

for(let i = 0; i <= 20; i++) {
	
	console.log(i);
	
	}

console.log("\n\n\n");

for (let i = 0; i <= 20; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

console.log("\n\n\n");

function tabuada(n) {
	
	let c = 1;
	
	while ( c <= 10) {
		console.log(n + " X " + c + " = " + (c * n));
		c++;

		}

	}

tabuada(5);

console.log("\n\n\n");

function converterEmHoras(n_minutos) {

	console.log(n_minutos + " minutos equivalem a " + (n_minutos / 60) + " horas.");
}

converterEmHoras(120);

console.log("\n");
