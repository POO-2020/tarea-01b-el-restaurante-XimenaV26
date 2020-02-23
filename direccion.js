export default class Direccion{ 
    /**
     * 
     * @param {string} calle Nombre de la calle
     * @param {number} numeroExterior Numero exterior de la casa o edificio
     * @param {number} numeroInterior Numero interior de la casa
     * @param {string} colonia Nombre de la colonia
     * @param {number} codigoPostal Codigo Postal
     * @param {string} ciudad Nombre de la ciudad
     * @param {string} municipio Nombre del municipio
     */

    constructor(calle, numeroExterior, numeroInterior, colonia, codigoPostal, ciudad, municipio ){
        this.calle = calle;
        this.numeroExterior = numeroExterior; 
        this.numeroInterior = numeroInterior;
        this.colonia = colonia;
        this.codigoPostal = codigoPostal;
        this.ciudad = ciudad;
        this.municipio = municipio; 
    }

    getFormatoCorto(){
        let calle = this.calle; 
        let numExterior = this.numeroExterior; 
        return(`${this.calle} # ${this.numeroExterior}`);
    }

    getFormatoExtendido(){
        let calle = this.calle;
        let numExterior = this.numeroExterior;
        let numInterior = this.numeroInterior;
        let colonia = this.colonia; 
        let codigoPostal = this.codigoPostal;
        let ciudad = this.ciudad;
        let municipio = this.municipio;
        return(`${this.calle} # ${this.numeroExterior}, Num.Interior: ${this.numeroInterior}, Colonia: ${this.colonia}, Codigo postal: ${this.codigoPostal}, ${this.ciudad}, ${this.municipio}`);
    }
}



