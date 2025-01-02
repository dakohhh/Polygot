/* <div class="output-container">
<label for="translation">Your translation:</label>
<textarea id="translation" readonly></textarea>
</div> */
import './OutputContainer.css';


export function createOutputContainer(): HTMLDivElement {
    const container = document.createElement('div') as HTMLDivElement;
    container.className = 'output-container';
    const label = document.createElement('label');
    label.htmlFor = 'translation';
    label.textContent = 'Your translation:';
    const textarea = document.createElement('textarea') as HTMLTextAreaElement;
    textarea.id = 'translation';
    textarea.readOnly = false;
    container.appendChild(label);
    container.appendChild(textarea);
    return container;
};


