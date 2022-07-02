import { render, screen } from '@testing-library/react';
import React from 'react';
import { Properties } from '.';

describe("<Properties />", () => {
    test('renders correctly', () => {
        const weight = 10;
        const height = 20;
        render(<Properties height={height} weight={weight} />)

        screen.getByText("Weight: 10");
        screen.getByText("Height: 20");
    })
})