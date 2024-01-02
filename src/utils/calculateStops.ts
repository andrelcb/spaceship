import { Starship } from "@/types/Starship";
import { convertUnitToDay } from "./convertUnitToDay";

export const calculateStops = (distanceMglt: number, starChips: Starship[]) => {
    return starChips.map((result) => {
        const unitInDays = convertUnitToDay(result.consumables);
        if (!unitInDays) {
            return {
                ...result,
                required_stop: 0,
            };
        }
        const mgltPerDay = result.MGLT * 24;
        const mgltPerConsumables = mgltPerDay * unitInDays;
        const requiredStops = Math.floor(distanceMglt / mgltPerConsumables);

        // Retornar o objeto modificado com a propriedade 'required_stop'
        return {
            ...result,
            required_stop: requiredStops,
        };
    })
}