const piedra = document.getElementById('piedra').addEventListener('click',seleccionPiedra);
const papel = document.getElementById('papel').addEventListener('click',seleccionPapel);
const tijeras = document.getElementById('tijeras').addEventListener('click',seleccionTijeras);
const lista = ['Piedra','Papel','Tijeras'];
let elemento = document.querySelector('h5');
let elemento2 = document.querySelector('h6');
let contadorUsuario=0;
let contadorPC=0;

function seleccionPiedra(){
    let PC = seleccionPC();
    if(PC === 'Piedra'){
        elemento.innerHTML = 'EMPATE!';        
    }else{
        if(PC === 'Tijeras'){
            elemento.innerHTML = 'GANASTE!';
            contadorUsuario++;
            elemento2.innerHTML = `Usuario ${contadorUsuario} - ${contadorPC} PC`
        }else{
            if(PC === 'Papel'){
                elemento.innerHTML = 'PERDISTE!';
                contadorPC++;
                elemento2.innerHTML = `Usuario ${contadorUsuario} - ${contadorPC} PC`
            }
        }
    }
}

function seleccionPapel(){
    let PC = seleccionPC();
    if(PC === 'Papel'){
        elemento.innerHTML = 'EMPATE!';        
    }else{
        if(PC === 'Piedra'){
            elemento.innerHTML = 'GANASTE!';
            contadorUsuario++;
            elemento2.innerHTML = `Usuario ${contadorUsuario} - ${contadorPC} PC`
        }else{
            if(PC === 'Tijeras'){
                elemento.innerHTML = 'PERDISTE!';
                contadorPC++;
                elemento2.innerHTML = `Usuario ${contadorUsuario} - ${contadorPC} PC`
            }
        }
    }
}

function seleccionTijeras(){
    let PC = seleccionPC();
    if(PC === 'Tijeras'){
        elemento.innerHTML = 'EMPATE!';        
    }else{
        if(PC === 'Papel'){
            elemento.innerHTML = 'GANASTE!';
            contadorUsuario++;
            elemento2.innerHTML = `Usuario ${contadorUsuario} - ${contadorPC} PC`
        }else{
            if(PC === 'Piedra'){
                elemento.innerHTML = 'PERDISTE!';
                contadorPC++;
                elemento2.innerHTML = `Usuario ${contadorUsuario} - ${contadorPC} PC`
            }
        }
    }
}

function seleccionPC(){
    let seleccionPC = Math.floor(Math.random()*3);
    let PC = lista[seleccionPC];
    return PC;
}