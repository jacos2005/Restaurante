export class Plato {
    public codPlato: number;
    public nombrePlato: string;
    public precioPlato: string;
    public regionPlato: string;
    public imagenPlato: string;
    public imagenPlatobase64: string;

    constructor(codp: number, nomb: string, prec: string, regi: string, imag: string, base: string) {
        this.codPlato = codp;
        this.nombrePlato = nomb;
        this.precioPlato = prec;
        this.regionPlato = regi;
        this.imagenPlato = imag;
        this.imagenPlatobase64 = base;

    }


}