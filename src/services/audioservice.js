let mediaRecorder;
let stream;
let audioChunks = [];

export async function startRecording() {
  stream = await navigator.mediaDevices.getUserMedia({ audio: true });

  mediaRecorder = new MediaRecorder(stream, {
    mimeType: "audio/webm"
  });

  audioChunks = [];

  mediaRecorder.ondataavailable = (event) => {
    if (event.data.size > 0) {
      audioChunks.push(event.data);
    }
  };

  mediaRecorder.start();
}

export async function stopRecording() {
  return new Promise((resolve) => {
    if (!mediaRecorder) {
      console.warn("⚠️ mediaRecorder not initialized");
      resolve(null);
      return;
    }
    mediaRecorder.onstop = () => {
      const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
      stream.getTracks().forEach(track => track.stop());
      resolve(audioBlob);
    };


  if (mediaRecorder.state !== "inactive") {
    mediaRecorder.stop();
  } else {
    resolve(null);
  }
  });
}



