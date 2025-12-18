import { Alumno } from "./alumno";

export class Convenio {
    alumno(alumno: any) {
        throw new Error("Method not implemented.");
    }

    constructor(
        private _fecha_ini: Date,
        private _fecha_fin: Date,
        private _num_horas: number,
        private _alumnos: Alumno[],
        
    ) { };

    get num_horas(): number { return this._num_horas; }
    set num_horas(value: number) { this._num_horas = value; }
    get alumnos(): Alumno[] { return this._alumnos; }
    set alumnos(value: Alumno[]) { this._alumnos = value; }
    get fecha_ini(): Date { return this._fecha_ini; }
    set fecha_ini(value: Date) { this._fecha_ini = value; }
    get fecha_fin(): Date { return this._fecha_fin; }
    set fecha_fin(value: Date) { this._fecha_fin = value; }

    //public num_sesiones(): number {
    
    //}
}
    //Funcion es_finde
    function es_finde(fecha: Date): boolean {
    const dia: number = fecha.getDay();
    return dia === 0 || dia === 6;
    }


