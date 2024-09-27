export interface Observador {
    actualizar(equipos: string[]): void;
}

export class Inventario {

    private observadores: Observador[] = [];
    private equipos: string[] = [];     

    agregarObservador(observador: Observador): void {  
        this.observadores.push(observador) 
    }

    eliminarObservador(observador: Observador): void {
        this.observadores = this.observadores.filter(o => o !== observador);
    }

    agregarEquipo(equipo: string): void {
        this.equipos.push(equipo)
        this.notificarObservadores()
    }

    eliminarEquipo(equipo: string): void {
        this.equipos = this.equipos.filter(e => e !== equipo);
        this.notificarObservadores()
    }

    modificarEquipo( equipoNuevo: string[]): void {
        this.equipos = equipoNuevo
        this.notificarObservadores()
    }

    private notificarObservadores(): void {
        this.observadores.forEach(obs => obs.actualizar(this.equipos));
    }
}

export class Interfazusuario implements Observador {
    actualizar(equipos: string[]): void {
        console.log(`La lista de equipos se ha actualizado: ${equipos}`);
    }
}