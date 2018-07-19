/*
 sincrono: enquanto um processamento nao termina, vc nao vai pro proximo.

 assincrono: delego para fazer uma coisa, mas enquanto nao termina, posso fazer outra coisa.
*/

setTimeout(() => {
    console.log(1);
}, 0);

console.log(2);

const alunos = [
    {
        nome: "Lucas",
        notas: [5,4,3,1]
    },
    {
        nome: "José",
        notas: [4,3,2,1]
    }
]

    /* verbos: GET, PUT, POST, PETCH, DELETE */

    /* Status code - Protocolo HTTP*/

    //200 = ok

    // 404 - não encontrado

    // 500 - erro no servidor

    // 404 - Forbidden (não encontrado)