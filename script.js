const uploadButton = document.getElementById('buttonSendPDF');
const inputPDF = document.getElementById('inputPDF');

uploadButton.addEventListener('click', () => {
    inputPDF.click();
});

document.getElementById('inputPDF').addEventListener('change', function(){
    const filename = this.files [0]?.name || "Nenhum arquivo selecionado";
    document.getElementById('buttonSendPDF').textContent = filename;
})