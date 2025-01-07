import './Button.css';
import { translateText } from '../../lib/translate';

interface ButtonProps {
  label: string; 
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}


// Clear Output Functions
export function clearOutput() {
  const textInput = document.getElementById('text') as HTMLInputElement;
  const textarea = document.getElementById('translation') as HTMLTextAreaElement;
  const languageSelect = document.getElementById('language') as HTMLSelectElement;

  textInput.value = '';
  textarea.value = '';
  languageSelect.selectedIndex = 0;
}


export async function displayTranslation() {
  const textInput = document.getElementById('text') as HTMLInputElement;
  const textarea = document.getElementById('translation') as HTMLTextAreaElement;
  const languageSelect = document.getElementById('language') as HTMLSelectElement;

  if (!textInput.value) {
    alert('Please enter some text to translate');
    return;
  }

  const language = languageSelect.selectedOptions[0].value;

  const translation = await translateText(textInput.value, language);

  if (translation){
    textarea.value = translation;
  }
}



export function createButton({ label, onClick, variant = 'primary' }: ButtonProps): HTMLButtonElement {
  const button = document.createElement('button'); // Create a button element
  button.textContent = label; // Set the button label
  button.className = `button ${variant}`; // Apply CSS classes
  button.addEventListener('click', onClick); // Attach the click event listener
  return button; // Return the created button
}
