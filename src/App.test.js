// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CrewGroth title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CrewGroth/i);
    expect(titleElement).toBeInTheDocument();
});
