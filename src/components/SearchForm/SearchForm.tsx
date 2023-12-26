"use client"
import { useState } from "react"
import Input from "../Input";
import { Button } from "../Button";

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

            <Button 
                onClick={handleButtonClick}
                isLoading={loading}
                isInputValid={isInputValid}
                disabled={!isInputValid || loading}
            >
                Calcular
            </Button>
        </div>
    )
}