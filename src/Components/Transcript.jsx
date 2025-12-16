export default function Transcript({ text }) {
  return (
    <div
      style={{
        marginTop: "20px",
        padding: "12px",
        border: "1px solid #ccc",
        minHeight: "120px",
        whiteSpace: "pre-wrap"
      }}
    >
      <strong>Transcript:</strong>
      <p>{text || "Speak to see transcription here..."}</p>
    </div>
  );
}

