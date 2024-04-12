document.addEventListener('DOMContentLoaded', function () {
    const downloadBtn = document.getElementById('downloadButton');

    downloadBtn.addEventListener('click', function () {
        // Coloca la ruta de tu archivo PDF aquí
        const pdfURL = 'docs/Preliminary program.pdf';
        
        // Abre una nueva ventana para la descarga del PDF
        window.open(pdfURL, '_blank');
    });
});
