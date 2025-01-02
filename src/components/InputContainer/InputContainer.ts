import './InputContainer.css';


export function createInputContainer(): HTMLDivElement {
  const container = document.createElement('div') as HTMLDivElement;
  container.className = 'input-container';
  const label = document.createElement('label');
  label.htmlFor = 'text';
  label.textContent = 'Text to translate:';
  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'text';
  input.placeholder = 'Enter text here';
  container.appendChild(label);
  container.appendChild(input);
  return container;
}