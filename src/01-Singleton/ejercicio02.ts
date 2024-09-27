export class ConexionDB {
    private static instancia: ConexionDB
    private propiedades: { host: string, puerto: number, usuario: string }

    private constructor() {
        this.propiedades = { host: '', puerto: 0, usuario: '' }
    }

    public static obtenerInstancia(): ConexionDB{
        if(!ConexionDB.instancia) {
            ConexionDB.instancia = new ConexionDB()
        }
        return ConexionDB.instancia
    }

    public conectarDB(host: string, puerto: number, usuario: string): void {
        this.propiedades.host = host
        this.propiedades.puerto = puerto
        this.propiedades.usuario = usuario

        console.log('BD conectada')
    } 

    public desconectarDB(): void {
        this.propiedades.host = ''
        this.propiedades.puerto = 0
        this.propiedades.usuario = ''

        console.log('BD desconectada')
    }

    public mostrarPropiedades(): { host: string, puerto: number, usuario: string } {
        return this.propiedades
    }
    
}


