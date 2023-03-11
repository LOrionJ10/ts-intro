/*
    ===== Código de TypeScript =====
*/

export interface Producto {
    desc:string;
    precio: number;

}

const telefono: Producto = {
    desc: 'iPad Air',
    precio: 350
}

const tableta: Producto = {
    desc: 'Nokia A1',
    precio: 150
}

export function calculaISV(producto:Producto[] ): [number, number]{

    let total = 0;

                      //( producto ) *destructuracion*
    producto.forEach( ( { precio } ) => {

                //producto.precio;   *destructuracion*
        total += precio;
    })

    return [total, total * 0.15];

}

const articulos = [ telefono, tableta ];

        //isv = calculaISV( articulos ); *destructuracion*
const [ total, isv ] = calculaISV( articulos );

console.log('Total:', total);
console.log('ISV:', isv);