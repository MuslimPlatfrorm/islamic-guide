function showHarakat(harakatName) {
            // Deactivate all harakat groups (tbody elements)
            const harakatGroups = document.querySelectorAll('.harakat-group');
            harakatGroups.forEach(group => {
                group.classList.remove('active');
            });

            // Deactivate all buttons
            const buttons = document.querySelectorAll('.harakat-btn');
            buttons.forEach(btn => {
                btn.classList.remove('active');
            });

// Activate the selected group
            const selectedGroup = document.getElementById(harakatName + '-group');
            if (selectedGroup) {
                selectedGroup.classList.add('active');
            }

            // Activate the clicked button
            // We find the button by its onclick attribute content
            const activeButton = Array.from(buttons).find(btn => btn.getAttribute('onclick') === showHarakat('${harakatName}'));
            if (activeButton) {
                activeButton.classList.add('active');
            }
        }

document.addEventListener('DOMContentLoaded', () => {
            const harakatButtons = document.querySelectorAll('.harakat-btn');
            const harakatGroups = document.querySelectorAll('.harakat-group');
            const zoomInButton = document.getElementById('zoom-in');
            const zoomOutButton = document.getElementById('zoom-out');
            const htmlElement = document.documentElement;

            function showHarakat(harakatId) {
                harakatButtons.forEach(btn => btn.classList.remove('active'));
                harakatGroups.forEach(group => group.classList.remove('active'));

                const activeButton = document.querySelector(`.harakat-btn[data-harakat="${harakatId}"]`);
                const activeGroup = document.querySelector(`.harakat-group[data-harakat-group="${harakatId}"]`);

                if (activeButton) activeButton.classList.add('active');
                if (activeGroup) activeGroup.classList.add('active');
            }

            harakatButtons.forEach(button => {
                button.addEventListener('click', (event) => {
                    const harakatId = event.currentTarget.getAttribute('data-harakat');
                    showHarakat(harakatId);
                });
            });
            
            function changeZoom(amount) {
                let currentSize = parseFloat(window.getComputedStyle(htmlElement).fontSize);
                let newSize = currentSize + amount;
                if (newSize >= 10 && newSize <= 24) {
                    htmlElement.style.fontSize = newSize + 'px';
                }
            }

            zoomInButton.addEventListener('click', () => { changeZoom(1); });
            zoomOutButton.addEventListener('click', () => { changeZoom(-1); });

            showHarakat('fatha');
        });

const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');
    burger.addEventListener('click', () => {
      nav.classList.toggle('show');
      burger.classList.toggle("active");
    });

document.addEventListener('DOMContentLoaded', () => {
            const harakatButtons = document.querySelectorAll('.harakat-btn');
            const harakatGroups = document.querySelectorAll('.harakat-group');
            const zoomInButton = document.getElementById('zoom-in');
            const zoomOutButton = document.getElementById('zoom-out');
            const htmlElement = document.documentElement;

            function showHarakat(harakatId) {
                harakatButtons.forEach(btn => btn.classList.remove('active'));
                harakatGroups.forEach(group => group.classList.remove('active'));

                const activeButton = document.querySelector(`.harakat-btn[data-harakat="${harakatId}"]`);
                const activeGroup = document.querySelector(`.harakat-group[data-harakat-group="${harakatId}"]`);

                if (activeButton) activeButton.classList.add('active');
                if (activeGroup) activeGroup.classList.add('active');
            }

            harakatButtons.forEach(button => {
                button.addEventListener('click', (event) => {
                    const harakatId = event.currentTarget.getAttribute('data-harakat');
                    showHarakat(harakatId);
                });
            });
            
            function changeZoom(amount) {
                let currentSize = parseFloat(window.getComputedStyle(htmlElement).fontSize);
                let newSize = currentSize + amount;
                if (newSize >= 10 && newSize <= 24) {
                    htmlElement.style.fontSize = newSize + 'px';
                }
            }

            zoomInButton.addEventListener('click', () => { changeZoom(1); });
            zoomOutButton.addEventListener('click', () => { changeZoom(-1); });

            showHarakat('fatha');
        });