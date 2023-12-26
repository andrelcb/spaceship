import { render } from "@testing-library/react"
import Input from "."

describe('<Input>', () => {
    it('should render button', () => {
        const { getByRole } = render(<Input />);
        expect(getByRole('textbox')).toBeInTheDocument();
    });
});