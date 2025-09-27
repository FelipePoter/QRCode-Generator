const textInput = document.getElementById("textInput");
const generateBtn = document.getElementById("generateBtn");
const qrCodeContainer = document.getElementById("qrcode");

generateBtn.addEventListener("click", () => {
  const text = textInput.value;

  qrCodeContainer.innerHTML = "";

  if (text.trim() === "") {
    alert("Por favor, insira algum texto para gerar o QR Code.");
    return;
  }

  const canvas = document.createElement("canvas");
  qrCodeContainer.appendChild(canvas);

  QRCode.toCanvas(canvas, text, { width: 300 }, (error) => {
    if (error) {
      console.error(error);
      alert("Erro ao gerar o QR Code.");
    } else {
      console.log("QR Code gerado com sucesso!");
    }
  });
});
