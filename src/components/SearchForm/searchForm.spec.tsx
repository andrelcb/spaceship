import { fireEvent, render, screen } from "@testing-library/react"
import { SearchForm } from "./SearchForm";
import { act } from "react-dom/test-utils";


describe('<SearchForm />', () => {

    it('should be render inputs correctly', () => {
        render(<SearchForm onSearchButton={() => 10} loading={false} />);
        ['Digite a distancia em Mega Lights'].map((label) => {
            expect(screen.getByPlaceholderText(label)).toBeInTheDocument();
        });
    });

    it('should be render button correctly', () => {
        render(<SearchForm onSearchButton={() => 10} loading={false} />);
        ['Calcular'].map((label) => {
            expect(screen.getByText(label)).toBeInTheDocument();
        });
    });
})