import { useQuery } from '@tanstack/react-query'
import APIClient from "../services/api-client.ts";
import { FetchResponse } from '../services/api-client.ts';
import genre from '../data/genres.ts';

const apiClient = new APIClient<Genre>('/genres');

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: {count : genre.length, results: genre}
    
});
;
export default useGenres;