import { APITranslateText } from '../http';



// Translate API Function
export async function translateText(text: string, language: string): Promise<string | void> {
  try {
    
    const { content }: { role:string, content:string } = await APITranslateText({ text, language });

    return content;

  } catch (error) {
    console.error('Error translating text:', error);
    alert('Error translating text: Cannot Access AI');
  }
 
}