// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TextVibe title', () => {
    render(<App />);
    const titleElement = screen.getByText(/TextVibe/i);
    expect(titleElement).toBeInTheDocument();
});
