import { act, render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {

    it('rendered button', () => {
        const { getByTestId } = render(<Button />)
        const button = getByTestId('button');
        expect(button).toBeTruthy();
    });

    it('render 1 button before button click', () => {
        const { getAllByTestId } = render(<Button />);
        const buttonList = get
    });

});