import { Starship } from "./Starship"

export type StarshipsResult = {
    count: number,
    next: string,
    previous: string,
    results: Starship[],
}