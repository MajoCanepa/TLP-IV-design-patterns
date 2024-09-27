export interface Dispositivo {
    detalles(): string
}

export class Teclado implements Dispositivo {
    private nombre: string
    private tipoConexion: string
    private marca: string

    constructor(nombre: string, tipoConexion: string, marca: string) {
        this.nombre = nombre
        this.tipoConexion = tipoConexion
        this.marca = marca
    }

    detalles(): string {
        return  `Tipo: Teclado, Nombre: ${this.nombre}, Tipo de conexion: ${this.tipoConexion}, Marca: ${this.marca}`
    }
}

export class Raton implements Dispositivo {
    private nombre: string
    private tipoConexion: string
    private marca: string 

    constructor(nombre: string, tipoConexion: string, marca: string) {
        this.nombre = nombre
        this.tipoConexion = tipoConexion
        this.marca = marca
    }

    detalles(): string {
        return  `Tipo: Raton, Nombre: ${this.nombre}, Tipo de conexion: ${this.tipoConexion}, Marca: ${this.marca}`
    }

}

export class Scanner implements Dispositivo {
    private nombre: string
    private tipoConexion: string
    private marca: string 

    constructor(nombre: string, tipoConexion: string, marca: string) {
        this.nombre = nombre
        this.tipoConexion = tipoConexion
        this.marca = marca
    }

    detalles(): string {
        return  `Tipo: Scanner, Nombre: ${this.nombre}, Tipo de conexion: ${this.tipoConexion}, Marca: ${this.marca}`
    }

}

export class DispositivoEntradaFactory {

    public crearDispositivo(tipo: string, nombre: string, tipoConexion: string, marca: string): Dispositivo {
        if(tipo === 'Teclado'){
            return new Teclado(nombre, tipoConexion, marca)
        } else if(tipo === 'Raton'){
            return new Raton(nombre, tipoConexion, marca)
        } else if(tipo === 'Scanner'){
            return new Scanner(nombre, tipoConexion, marca)
        } else {
            throw new Error('Dispositivo no valido')
        }
    }
}