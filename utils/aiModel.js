import axios from "axios";

const chatWithAI = async (inputText) => {
  try {
    const response = await axios.post(
      "https://api-inference.huggingface.co/models/meta-llama/Llama-3-8b",
      { inputs: inputText },
      {
        headers: { Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}` },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("AI model call failed");
  }
};

module.exports = { chatWithAI };
