import { startRecording, stopRecording } from "../services/audioservice";
import { transcribeAudio } from "../services/deepgramservice";

export default function Recorder({ setText }) {
  const start = async () => {
    await startRecording();
  };

  const stop = async () => {
    const audioBlob = await stopRecording();
    if (!audioBlob) return;
    const text = await transcribeAudio(audioBlob);
    setText(text);
  };

  return (
    <button
      onMouseDown={start}
      onMouseUp={stop}
      style={{ padding: "20px", fontSize: "18px" }}
    >
      🎤 Hold to Talk
    </button>
  );
}

