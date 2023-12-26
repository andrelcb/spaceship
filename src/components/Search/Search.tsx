"use client"
import { useState } from "react";
import * as api from '@/api/starships';
import { SearchForm } from "../SearchForm/SearchForm";
import { SearchReveal } from "../SearchReveal/SearchReveal";
import { calculateStops } from "@/utils/calculateStops";
import { StarshipsResult } from "@/types/StarshipsResult";


export const Search = () => {
    const [starships, setStarships] = useState<StarshipsResult>();
    const [nextPage, setNextPage] = useState('');
    const [previousPage, setPreviousPage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSearchButton = async (distanceMglt: number) => {
        if (!distanceMglt) return;
        setLoading(true);
        const response = await api.getAllStarship();
        setLoading(false);
        if (!response) return alert('Desculpe não foi encontrada nenhuma espaçonave.');

        setNextPage(response.next);
        calculateStops(distanceMglt, response.results)
        setStarships(response);

    }

    const handleNextPage = async () => {
        try {
            const params = new URLSearchParams(new URL(nextPage).search);
            const pageNumber = params.get('page');
            if (pageNumber) {
                setLoading(true);
                const response = await api.getAllStarship(parseInt(pageNumber));
                setLoading(false);
                if (!response) return alert('Desculpe não foi encontrada nenhuma espaçonave.');
                setStarships(response);
                setNextPage(response.next);
                setPreviousPage(response.next);
            }
        } catch (error) {
            console.error('Erro ao tentar alterar a pagina. ', error);
        }
    };

    const handlePreviousPage = async () => {
        try {
            const params = new URLSearchParams(new URL(previousPage).search);
            const pageNumber = params.get('page');
            if (pageNumber) {
                setLoading(true);
                const response = await api.getAllStarship(parseInt(pageNumber));
                setLoading(false);
                if (!response) return alert('Desculpe não foi encontrada nenhuma espaçonave.');
                setStarships(response);
                setNextPage(response.next);
                setPreviousPage(response.previous);
            }
        } catch (error) {
            console.error('Erro ao tentar alterar a pagina. ', error);
        }
    };

    return (
        <section className="my-10">
            {!starships && <SearchForm
                onSearchButton={handleSearchButton}
                loading={loading}
            />
            }
            {loading && starships &&
                <p className="text-4xl py-4">Carregando..</p>
            }

            {!loading && starships && <SearchReveal response={starships} />}

            {!loading &&
                < div className="flex items-center justify-center p-4 gap-10">
                    {previousPage &&
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={handlePreviousPage}>Página Anterior
                        </button>
                    }
                    {nextPage &&
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={handleNextPage}>Próxima página
                        </button>
                    }
                </div>
            }
        </section >
    )
}