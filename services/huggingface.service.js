import axios from "axios";

const queryHuggingFace = async (prompt) => {
  const response = await axios.post(
    "https://api-inference.huggingface.co/models/meta-llama/Llama-3-8b",
    { inputs: prompt },
    {
      headers: {
        Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
      },
    }
  );
  return response.data;
};

module.exports = { queryHuggingFace };
