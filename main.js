const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const postChat = async (text) => {
  const response = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: text }],
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
    },
  );

  return response.data.choices[0].message.content;
};

postChat('Go言語でHello worldするコードを教えて下さい').then((data) =>
  console.dir(data, { depth: null }),
);
