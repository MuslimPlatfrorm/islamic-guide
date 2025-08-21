let currentZoom = 100;
        
        function zoomIn() {
            if (currentZoom < 200) {
                currentZoom += 10;
                updateZoom();
            }
        }
        
        function zoomOut() {
            if (currentZoom > 50) {
                currentZoom -= 10;
                updateZoom();
            }
        }
        
        function updateZoom() {
            document.body.style.zoom = currentZoom + '%';
            document.getElementById('zoomLevel').textContent = currentZoom + '%';
        }
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey) {
                if (e.key === '=' || e.key === '+') {
                    e.preventDefault();
                    zoomIn();
                } else if (e.key === '-') {
                    e.preventDefault();
                    zoomOut();
                } else if (e.key === '0') {
                    e.preventDefault();
                    currentZoom = 100;
                    updateZoom();
                }
            }
        });

const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');
    burger.addEventListener('click', () => {
      nav.classList.toggle('show');
      burger.classList.toggle("active");
    });

    