import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
});


// Translate API Function
export async function translateText(text: string, language: string): Promise<string> {
  try {
    const messages = [
      {
        role: 'system',
        content: `You're a language translator assistant. Once given a text in english and a language, you will translate the text to the language provided.`
      },

      {
        role: 'user',
        content: `How are you? to French` 
      },

      {
        role: 'assistant',
        content: `Comment vas-tu`
      },
      {
        role: 'user',
        content: `How are you? to Spanish` 
      },

      {
        role: 'assistant',
        content: `¿Cómo estás?`
      },
      {
        role: 'user',
        content: `How are you? to Japanese` 
      },

      {
        role: 'assistant',
        content: `お元気ですか`
      },
      {
        role: 'user',
        content: `${text} to ${language}`
      }
    ]
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: messages as any,
      temperature: 0,
      max_tokens: 100,

    });
  
    return response.choices[0].message.content as string;

  } catch (error) {
    console.error('Error translating text:', error);
    return "";
  }
 
}