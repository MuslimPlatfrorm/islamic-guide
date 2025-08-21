let fontSize = 16; // Начальный размер шрифта в px

    function zoomIn() {
        fontSize += 2;
        document.body.style.fontSize = fontSize + 'px';
    }

    function zoomOut() {
        if (fontSize > 10) { // Минимальный размер
            fontSize -= 2;
            document.body.style.fontSize = fontSize + 'px';
        }
    }

    function resetZoom() {
        fontSize = 16;
        document.body.style.fontSize = fontSize + 'px';
    }

const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');
    burger.addEventListener('click', () => {
      nav.classList.toggle('show');
      burger.classList.toggle("active");
    });