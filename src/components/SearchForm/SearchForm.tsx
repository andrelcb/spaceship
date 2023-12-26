"use client"
import { useState } from "react"
import Input from "../Input";

type Props = {
    onSearchButton: (mglt: number) => void;
    loading: boolean;

}

export const SearchForm = ({ onSearchButton, loading }: Props) => {
    const [distanceMgltInput, setDistanceMgltInput] = useState("");
    const [isInputValid, setIsInputValid] = useState<boolean>(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setDistanceMgltInput(inputValue);
        setIsInputValid(!isNaN(parseInt(inputValue)) && parseInt(inputValue) > 0);
    };

    const handleButtonClick = () => {
        if (isInputValid) {
            onSearchButton(parseInt(distanceMgltInput));
        }
    };

    return (
        <div className="bg-gray-900 rounded-md p-5">
            <p className="mb-3 text-xl">Qual a distancia em MGLT?</p>
            <Input
                type="number"
                inputMode="numeric"
                placeholder="Digite a distancia em Mega Lights"
                autoFocus
                value={distanceMgltInput}
                disabled={loading}
                onChange={handleInputChange}
            />

            <button className={`w-full p-3 mt-3 rounded-lg text-white text-4xl bg-blue-900 border-b-4 border-blue-600 active:border-0 disabled:opacity-50 ${!isInputValid && 'cursor-not-allowed opacity-50'}`}
                onClick={handleButtonClick}
                disabled={!isInputValid || loading}
            >
                {loading ? 'Buscando...' : 'Calcular'}
            </button>
        </div>
    )
}