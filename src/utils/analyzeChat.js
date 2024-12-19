import axios from "axios";

export const analyzeChat = async (parsedContent) => {
  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "Analyze the given chat content and identify themes and patterns.",
        },
        {
          role: "user",
          content: JSON.stringify(parsedContent),
        },
      ],
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.VITE_OPENAI_API_KEY}`,
      },
    }
  );
  return response.data.choices[0].message.content;
};
