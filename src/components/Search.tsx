"use client"
import { useState } from "react";
import * as api from '@/api/starships';
import { SearchForm } from "./SearchForm";
import { SearchReveal } from "./SearchReveal";
import { Starship } from "@/types/Starship";


export const Search = () => {
    const [results, setResults] = useState<Starship[]>();

    const handleSearchButton = async (mglt: number) => {
        if (!mglt) return;
        const json = await api.getAllStarship();
        if (!json) return alert('Desculpe.');
        setResults(json);

    }
    return (
        <section className="bg-gray-900 p-5 rounded">
            {!results && <SearchForm onSearchButton={handleSearchButton} />}
            {results && <SearchReveal results={results} />}
        </section>
    )
}