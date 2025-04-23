export async function chatWithAssistant(req, res) {
    const { message } = req.body;
    // Integrate with Hugging Face or LLaMA3 API here
    res.json({ reply: "This is a mock AI response for: " + message });
}
  