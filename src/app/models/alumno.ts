export class Alumno {
    constructor(
        private _nombre: string,
        private _apellidos: string,
        private _fecha_nac: Date,
        private _email: string,
        private _nota_final: number,
    ){};
    
    get apellidos(): string { return this._apellidos; }
    set apellidos(value: string) { this._apellidos = value; }
    get nombre(): string { return this._nombre; }
    set nombre(value: string) { this._nombre = value; }
    get email(): string { return this._email; }
    set email(value: string) { this._email = value; }
    get fecha_nac(): Date { return this._fecha_nac; }
    set fecha_nac(value: Date) { this._fecha_nac = value; }

    get nota_final(): number { return this._nota_final; }
    set nota_final(value: number) { this._nota_final = value; }


    public obten_alias(){
        let nombre = this.nombre.charAt(0).toUpperCase;
        let apellidos= this.apellidos.split(" ").map(a => a.toUpperCase()).join();
        return nombre+apellidos;
    }

}
