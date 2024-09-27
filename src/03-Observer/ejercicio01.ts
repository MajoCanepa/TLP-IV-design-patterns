export interface Observador {
    mantenimiento(equipo: Equipo): void;
}

export class DepartamentoMantenimiento implements Observador {
    mantenimiento(equipo: Equipo): void {
        console.log(`El equipo ${equipo.nombre} necesita mantenimiento preventivo porque alcanzo el tiempo de uso.`);
    }
}

export class Equipo {
    private observadores: Observador[] = [];
    
    constructor(public nombre: string, public tipo: string, public estado: string, public tiempoUso: number) {}

    agregarObservador(observador: Observador): void {
        this.observadores.push(observador);
    }

    private notificarObservadores(): void {
        this.observadores.forEach(obs => obs.mantenimiento(this));
    }

    aumentarTiempoUso(horas: number, umbral: number): void {
        this.tiempoUso += horas;    
        if (this.tiempoUso > umbral ) { 
            this.notificarObservadores(); 
        }
    }

    cambiarEstado(nuevoEstado: string): void {   
        this.estado = nuevoEstado;   
        this.notificarObservadores();  
    }

}