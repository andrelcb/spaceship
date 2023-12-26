import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
    isLoading?: boolean;
    isInputValid?: boolean
}

export const Button = ({ children, isLoading = false, isInputValid, ...rest }: ButtonProps) => {
    return (
        <>
            <button {...rest} className={`w-full p-3 mt-3 rounded-lg text-white text-4xl bg-blue-900 border-b-4 border-blue-600 active:border-0 disabled:opacity-50 ${!isInputValid && 'cursor-not-allowed opacity-50'}`}>
                {isLoading ? 'Buscando....' : children}
            </button>
        </>
    );
};