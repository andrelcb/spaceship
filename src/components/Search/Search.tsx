"use client"
import { useState } from "react";
import * as api from '@/api/starships';
import { SearchForm } from "../SearchForm/SearchForm";
import { SearchReveal } from "../SearchReveal/SearchReveal";
import { Starship } from "@/types/Starship";
import { calculateStops } from "@/utils/calculateStops";


export const Search = () => {
    const [results, setResults] = useState<Starship[]>();
    const [loading, setLoading] = useState(false);

    const handleSearchButton = async (distanceMglt: number) => {
        if (!distanceMglt) return;
        setLoading(true);
        const response = await api.getAllStarship();
        setLoading(false);
        if (!response) return alert('Desculpe não foi encontrada nenhuma espaçonave.');

        calculateStops(distanceMglt, response)
        setResults(response);

    }
    return (
        <section className="my-10">
            {!results && <SearchForm
                onSearchButton={handleSearchButton}
                loading={loading}
            />
            }
            {results && <SearchReveal results={results} />}
        </section>
    )
}