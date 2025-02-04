window.onload = function() {
    let who = ["El perro ", "Mi vecino ", "El vago de enfrente ", "El Gato ", "Un Mapache "];
    let action = ["hizo sus necesidades en ", "tiró basura en ", "ensució ", "se sentó sobre ", "se durmió sobre "];
    let what = ["mi tarea ", "la banqueta ", "la calle ", "la mesa ", "el piso "];
    let when = ["hace un rato.", "ayer.", "hace unos momentos.", "por la mañana.", "por la noche."];

    let rndm1 = Math.floor(Math.random() * who.length);
    let rndm2 = Math.floor(Math.random() * action.length);
    let rndm3 = Math.floor(Math.random() * what.length);
    let rndm4 = Math.floor(Math.random() * when.length);

    let excusa = who[rndm1] + action[rndm2] + what[rndm3] + when[rndm4];

    console.log(excusa); 

    document.querySelector("#excusa").innerHTML = excusa;
};