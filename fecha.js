class Fecha {

    constructor(dia, año, mes){
        this.fecha = new Date(año, mes -1, dia,);
        this.diaSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
        this.diaMes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", 
         "Octubre", "Noviembre", "Diciembre"];
    }
    
}