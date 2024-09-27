export class Configuracion {
    private static instancia: Configuracion
    private idioma: string
    private rutaBaseDatos: string
    private nivelRegistro: string

    private constructor() {
        this.idioma =''
        this.rutaBaseDatos = ''
        this.nivelRegistro = ''
    }

    public static obtenerInstancia(): Configuracion {
        if(!Configuracion.instancia) {
            Configuracion.instancia = new Configuracion()
        }
        return Configuracion.instancia
    }

    public obtenerIdioma(): string {
        return this.idioma
    }

    public obtenerRutaBaseDatos(): string {
        return this.rutaBaseDatos
    }

    public obtenerNivelRegistro(): string {
        return this.nivelRegistro
    }

    public actualizarIdioma(idioma: string): void {
        this.idioma = idioma
    }

    public actualizarRutaBaseDatos(rutaBaseDatos: string): void {
        this.rutaBaseDatos = rutaBaseDatos
    }

    public actualizarNivelRegistro(nivelRegistro: string): void {
        this.nivelRegistro = nivelRegistro
    }
        
}



