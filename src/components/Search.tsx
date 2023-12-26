"use client"
import { useState } from "react";
import * as api from '@/api/starships';
import { SearchForm } from "./SearchForm";
import { SearchReveal } from "./SearchReveal";
import { Starship } from "@/types/Starship";
import { calculateStops } from "@/utils/calculateStops";


export const Search = () => {
    const [results, setResults] = useState<Starship[]>();
    const [loading, setLoading] = useState(false);

    const handleSearchButton = async (distanceMglt: number) => {
        if (!distanceMglt) return;
        setLoading(true);
        const json = await api.getAllStarship();
        setLoading(false);
        if (!json) return alert('Desculpe não foi encontrado nenhuma Espaçonave.');

        calculateStops(distanceMglt, json)
        setResults(json);

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