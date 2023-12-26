import { req } from '@/api/axios';
import { Starship } from '@/types/Starship';


export const getAllStarship = async (): Promise<Starship[] | false> => {
    const json = await req.get(`starships/`);
    return json.data.results as Starship[] ?? false;
}