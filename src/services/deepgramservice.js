export async function transcribeAudio(audioBlob) {
  const response = await fetch(
    "https://api.deepgram.com/v1/listen?model=nova-2&language=en",
    {
      method: "POST",
      headers: {
        Authorization: `Token ${import.meta.env.VITE_DEEPGRAM_API_KEY}`,
        "Content-Type": "audio/webm"
      },
      body: audioBlob
    }
  );

  const data = await response.json();

  return data.results?.channels?.[0]?.alternatives?.[0]?.transcript || "";
}


