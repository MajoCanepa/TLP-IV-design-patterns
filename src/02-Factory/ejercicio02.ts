export interface Periferico {
    detalles(): string
}

export class Monitor implements Periferico {
    constructor(
        public marca: string, 
        public modelo: string, 
        public puertoConexion: string, 
        public resolucion: string ) {}

    detalles(): string {
        return `Tipo: Monitor, Marca: ${this.marca}, Modelo: ${this.modelo}, Puerto de Conexion: ${this.puertoConexion}, Resolucion: ${this.resolucion}`
    }
}

export class Impresora implements Periferico {
    constructor(
        private marca: string, 
        private modelo: string, 
        private puertoConexion: string, 
        private tipoImpresion: string) 
    {}

    detalles(): string {
        return `Tipo: Impresora, Marca: ${this.marca}, Modelo: ${this.modelo}, Puerto de conexion: ${this.puertoConexion}, Tipo de impresion: ${this.tipoImpresion}`
    }
}

export class Proyector implements Periferico {
    constructor (
        private  marca: string, 
        private modelo: string, 
        private puertoConexion: string, 
        private luminosidad: number) 
    {}

    detalles(): string {
        return `Tipo: Proyector, Marca: ${this.marca}, Modelo: ${this.modelo}, Puerto de conexion: ${this.puertoConexion}, Luminosidad: ${this.luminosidad}`
    }
}

export class PerifericoSalidaFactory {
    public crearPeriferico(tipo: string, marca: string, modelo: string, puertoConexion: string, atributo_plus: any): Periferico{
        if(tipo === 'Monitor'){
            return new Monitor(marca, modelo, puertoConexion, atributo_plus)
        } else if(tipo === 'Impresora'){
            return new Impresora(marca, modelo, puertoConexion, atributo_plus)
        } else if(tipo === 'Proyector'){
            return new Proyector(marca, modelo, puertoConexion, atributo_plus)
        } else {
            throw new Error('Periferico no valido')
        }
    }
}


