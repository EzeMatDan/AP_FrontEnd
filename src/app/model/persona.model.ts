export class persona{
    id: number;
    nombre: string;
    apellido: string;
    titulo: string;
    img: string;
    acerca: string;

    constructor (nombre: string, apellido: string, img: string, titulo:string, acerca:string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.titulo = titulo;
        this.acerca = acerca;
    }
}