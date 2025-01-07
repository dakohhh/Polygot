// <div class="container">
import './../Container/Container.css';
import { createButton, clearOutput, displayTranslation } from '../button/Button';
import { createInputContainer } from '../InputContainer/InputContainer';
import { createLanguageSelect } from '../LangaugeSelect/LanguageSelect';
import { createOutputContainer } from '../OutputContainer/OutputContainer';

export function createContainer(): HTMLDivElement {
  const container = document.createElement('div') as HTMLDivElement;
  container.className = 'container';

  const containerTitle = document.createElement('h1') as HTMLHeadingElement;
  containerTitle.innerHTML = 'PollyGlot';

  const containerParagraph = document.createElement('p') as HTMLParagraphElement;
  containerParagraph.innerHTML = 'Perfect Translation Every Time';

  

  container.appendChild(containerTitle);
  container.appendChild(containerParagraph);

  container.appendChild(createInputContainer());

  container.appendChild(createLanguageSelect());



  container.appendChild(createButton({
    label: 'Translate',
    onClick: () => displayTranslation(),
    variant: 'primary'
  }));

  container.appendChild(createOutputContainer());

  container.appendChild(createButton({
    label: 'Start Over',
    onClick: () => clearOutput(),
    variant: 'secondary'
  }));
  return container;
}