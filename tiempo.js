class Tiempo {

    constructor(horas, minutos){
         this.hora = horas; 
         this.minutos = minutos;
         this.periodo = ["AM", "PM"];
    }

    getFormato12(){
        if (this.hora>=12 && this.hora<=23){
            if(this.hora==12)
            {
                return(`${this.hora}: ${this.minutos} ${this.periodo[1]}`);
            }
            else{
                var hora = this.hora-12;
            }

            return(`${this.hora}:${this.minutos} ${this.periodo[1]}`); 
        }
        else if(this.hora===24){
            return(`00:${this.minutos}:${this.periodo[0]}`);
        }
        else{
            return(`${this.hora}:${this.minutos} ${this.periodo[0]}`);
        }
    }
    getFormato24(){
        return(`${this.hora}:${this.minutos}`);
    }
}
