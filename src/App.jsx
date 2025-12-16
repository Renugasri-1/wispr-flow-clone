import { useState } from "react";
import Recorder from "./Components/Recorder";
import Transcript from "./Components/Transcript";

function App() {
  const [transcript, setTranscript] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Wispr Flow Clone</h2>
      <Recorder setText={setTranscript} />
      <Transcript text={transcript} />
    </div>
  );
}

export default App;




