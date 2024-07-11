export default class Empresa{
    constructor() {
        this.empleados = 0;
        this.hombres = 0;
        this.mujeres = 0;
    }

    procesarEmp(Empleado){
        ++this.empleados;
        if (Empleado.sexo == "F") ++this.mujeres;
        else ++this.hombres;
    }

    pctjMujeres(){
        return (this.mujeres*100/this.empleados);
    }
}