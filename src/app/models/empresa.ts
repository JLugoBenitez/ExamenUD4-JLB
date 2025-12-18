import { Alumno } from "./alumno";
import { Convenio } from "./convenio";

export class Empresa {

    constructor(
        private _nombre: string,
        private _num_empleados: number,
        private _convenios: Convenio[],
    ) { };

    get nombre(): string { return this._nombre; }
    set nombre(value: string) { this._nombre = value; }
    get num_empleados(): number { return this._num_empleados; }
    set num_empleados(value: number) { this._num_empleados = value; }
    get convenios(): Convenio[] { return this._convenios; }
    set convenios(value: Convenio[]) { this._convenios = value; }

    public listado_alumnos(): Alumno[] {
        let alumnos_repetidos: Alumno[] = this._convenios.flatMap(f => f.alumnos);
        let alumnos_set: Set<Alumno> = new Set(alumnos_repetidos);
        let alumnos_sin_repetir: Alumno[] = [...alumnos_set];

        return alumnos_sin_repetir;
    }

    public nota_media_alumnos(): number {
        let suma_notas: number = this.listado_alumnos().reduce((acc,alumno)=> acc +alumno.nota_final,0);
        return suma_notas / this.listado_alumnos().length;
    }

    public total_horas(): number {
        return this.convenios.filter(convenio => convenio.fecha_ini < convenio.fecha_fin )
        .reduce((acc, conve)=> acc + conve.num_horas, 0);
    }
}
