import './LanguageSelect.css';
// <div class="language-select">
//     <label for="language">Select language:</label>
//     <select id="language">
//         <option value="french">French <img src="french_flag.png" alt="French Flag" height="16" width="24"></option>
//         <option value="spanish">Spanish <img src="spanish_flag.png" alt="Spanish Flag" height="16" width="24"></option>
//         <option value="japanese">Japanese <img src="japanese_flag.png" alt="Japanese Flag" height="16" width="24"></option>
//     </select>
// </div>

export interface LanguageOptionProps {
    value: string;
    imageSrc: string;
}
export function createLanguageOption({  value, imageSrc }: LanguageOptionProps): HTMLOptionElement {
    const option = document.createElement('option') as HTMLOptionElement;
    option.value = value;
    option.innerHTML = `${value} <img src=${imageSrc} alt="${value} Flag" height="16" width="24">`;
    return option;

}


export function createLanguageSelect(): HTMLDivElement {

    const container = document.createElement('div') as HTMLDivElement;
    container.className = 'language-select';

    const label = document.createElement('label') as HTMLLabelElement;

    label.htmlFor = 'language';
    label.innerHTML = 'Select language:';

    const select = document.createElement('select') as HTMLSelectElement;
    select.id = 'language';

    select.options.add(createLanguageOption({  value: 'French', imageSrc: 'french_flag.png' }));
    select.options.add(createLanguageOption({  value: 'Spanish', imageSrc: 'spanish_flag.png' }));
    select.options.add(createLanguageOption({  value: 'Japanese', imageSrc: 'japanese_flag.png' }));


    container.appendChild(label);
    container.appendChild(select);

    return container;
}
