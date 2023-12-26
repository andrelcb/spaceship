import { req } from '@/api/axios';
import { StarshipsResult } from '@/types/StarshipsResult';
import { Starship } from '@/types/Starship';


export const getAllStarship = async (page = 1): Promise<StarshipsResult | false> => {
    const response = await req.get(`starships/?page=${page}`);
    return response.data as StarshipsResult ?? false;
}