import { Starship } from "@/types/Starship";

export const calculateStops = (distanceMglt: number, starChips: Starship[]) => {
    return starChips.map((result) => {
        const hours = (distanceMglt / result.MGLT);
        const stops = hours / 24;
        const requiredStops = Math.ceil(stops);

        // Retornar o objeto modificado com a propriedade 'required_stop'
        return {
            ...result,
            required_stop: requiredStops,
        };
    })
}