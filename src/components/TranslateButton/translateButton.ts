import './TranslateButton.css';

export interface TranslateButtonProps {
  label: string; 
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export function createButton({ label, onClick, variant = 'primary' }: TranslateButtonProps): HTMLButtonElement {
  const button = document.createElement('button'); // Create a button element
  button.textContent = label; // Set the button label
  button.className = `button ${variant}`; // Apply CSS classes
  button.addEventListener('click', onClick); // Attach the click event listener
  return button; // Return the created button
}