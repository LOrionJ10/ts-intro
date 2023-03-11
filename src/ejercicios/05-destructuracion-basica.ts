/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Sinmigo',
    detalles:{
        autor: 'Jose Madero',
        anio: 2015
    }
}

//  *** DESTRUCTURACION ***
const {volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles;

// console.log('El volumen actual es:', volumen );
// console.log('El segundo actual es:',segundo );
// console.log('La cancion actual es:',cancion );
// console.log('El autor actual es:', autor );

// *** DESTRUCTURACION DE ARREGLOS ***
const dbz: string[] = ['Krilin', 'Vegeta', 'Trunks'];
const [ p1, p2, p3 ] = dbz;

console.log('Personaje 1:', p1);
console.log('Personaje 2:', p2);
console.log('Personaje 3:', p3);