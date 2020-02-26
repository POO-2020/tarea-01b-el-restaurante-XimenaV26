export default class Fecha {

    /**
     * 
     * @param {number} dia Dia valor 1...32
     * @param {number} año Año de la fecha
     * @param {number} mes Mes valor 1...12
     */

    constructor(dia, año, mes){
        this.fecha = new Date(año, mes -1, dia);
        this.diaSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
        this.diaMes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", 
         "Octubre", "Noviembre", "Diciembre"];
    }

    getAños(){
        let fech = Date.now - this.fecha;
        let multiplicacion = 1000 *60 *60 *24 *365;
        let fechaActual = Math.trunc(fech/multiplicacion);
        return(`La diferencia de años es de: ${fechaActual}`);
    }

    getMeses(){
        let fech = Date.now - this.fecha;
        let multiplicacion = 1000 *60 *60 *24 *7 *4;
        let fechaActual = Math.trunc(fech/multiplicacion);
        return(`La diferencia de meses es de:  ${fechaActual}`);
    }

    getSemanas(){
        let fech = Date.now - this.fecha;
        let multiplicacion = 1000 *60 *60 *24 *7;
        let fechaActual = Math.trunc(fech/multiplicacion);
        return(`La diferencia de semanas es de:  ${fechaActual}`);
    }

    getDias(){
        let fech = Date.now - this.fecha;
        let multiplicacion = 1000 *60 *60 *24;
        let fechaActual = Math.trunc(fech/multiplicacion);
        return(`La diferencia de dias es de:  ${fechaActual}`);
    }

    getFecha(){
        return `${this.fecha.getDate()}/${this.fecha.getMonth()}/${this.fecha.getFullYear()}`;
    }

    getDiaFecha(){
        return `${this.fecha.getDay()}`;
    }
}
