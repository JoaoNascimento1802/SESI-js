let usuarioNome = prompt("Insira seu Nome :")
let usuarioSenha = prompt("Insira sua Senha :")

const nomeComum = 'usuariocomum';
const senhaComum = 'user123';
const nomeVisitante = 'visitante';
const senhaVisitante = 'visitante';
const nomeChefe = 'chefe';
const senhaChefe ='chefe';

if (usuarioNome === nomeComum && usuarioSenha === senhaComum) {
    console.log("Usuario Comum!");
} else if (usuarioNome === nomeVisitante && usuarioSenha === senhaVisitante) {
    console.log("Visitante!");
} else if(nomeChefe === usuarioNome && senhaChefe === usuarioSenha){
    console.log("Chefe!");
}
else {
    console.log('Logue na sua conta !')
}



