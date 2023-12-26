import { Starship } from "@/types/Starship";

export const calculateStops = (distanceMglt: number, starChips: Starship[]) => {
    starChips && starChips.map((result) => {
        const hours = (distanceMglt / result.MGLT); // Calcula o tempo em horas necessário para percorrer a distância
        const stops = hours / 24;  // Considerando que cada viagem tem uma duração de 24 horas.
        result.required_stop = Math.ceil(stops); // Arredonda para cima para obter o número inteiro de paradas necessárias
    })
}