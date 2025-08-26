const PAGES = {
  menu: {
    title: 'Главное меню',
    desc: 'Выберите один из трех пунктов разделе.',
    html: `
          <div class="grid grid-2">
            <div class="card">
              <div class="pill">Раздел 2</div>
              <h3>Сифатуль хуруф</h3>
              <p class="muted">Описание терминов, классификации и практических примеров.</p>
            </div>
            <div class="card">
              <div class="pill">Раздел 3</div>
              <h3>Суджуд ас сахф</h3>
              <p class="muted">Сценарии, условия, ссылки на источники и примеры.</p>
            </div>
            <div class="card">
              <div class="pill">Раздел 4</div>
              <h3>Таджвид</h3>
              <p class="muted">Правила чтения с примерами и упражнениями.</p>
            </div>
          </div>
        `
  },
  'harakteristiki-bukv': {
    title: 'Характеристики букв',
    desc: 'Здесь вы можете разместить подробности по характеристикам букв.',
    html: `
          <div class="grid">
            <div class="card">Добавьте таблицы, правила, примеры произношения и т. п.</div>
          </div>
        `
  },
  'sifatul-huruf': {
    title: 'Сифатуль хуруф',
    desc: 'Описание терминов, классификации и практических примеров.',
    html: `
          <div class="grid">
            <div class="card">Содержимое раздела «Сифатуль хуруф».</div>
          </div>
        `
  },
  'sujud-as-sahf': {
    title: 'Суджуд ас сахф',
    desc: 'Краткое руководство по теме (замените на актуальный материал).',
    html: `
          <div class="grid">
            <div class="card">Сценарии, условия, ссылки на источники и примеры.</div>
          </div>
        `
  },
  'tadzhvid': {
    title: 'Таджвид',
    desc: 'Правила, исключения и упражнения для закрепления.',
    html: `
          <div class="grid">
            <div class="card">Добавьте схемы махраджов, аудио-примеры и карточки.</div>
          </div>
        `
  }
};

// Рендер секции
function render(route) {
  const key = route && PAGES[route] ? route : 'menu';
  const section = PAGES[key];
  const content = document.getElementById('content');

  // accessibility: показать состояние загрузки (микро-имитация)
  content.setAttribute('aria-busy', 'true');
  content.innerHTML = `
        <div class="section-header">
          <h2>${section.title}</h2>
          <span class="pill">#${key}</span>
        </div>
        <p class="section-desc">${section.desc}</p>
        ${section.html}
      `;
  requestAnimationFrame(() => content.setAttribute('aria-busy', 'false'));

  // Подсветка активного пункта
  document.querySelectorAll('.menu a').forEach(a => a.classList.remove('active'));
  const activeLink = document.querySelector(`.menu a[data-route="${key}"]`);
  if (activeLink) activeLink.classList.add('active');

  // Обновим заголовок вкладки
  document.title = `${section.title} — Главная страница = Меню`;

  // Сфокусируем основной контент для клавиатуры/скринридеров
  content.focus({ preventScroll: true });
}

// Инициализация маршрутизации по хэшу
function getRouteFromHash() {
  return (location.hash || '#menu').replace('#', '');
}

window.addEventListener('hashchange', () => render(getRouteFromHash()));

// Первый рендер
render(getRouteFromHash());

// Год в подвале
document.getElementById('y').textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".menu-title");
  const menu = document.querySelector(".menu");
  const nav = document.querySelector("nav"); // сам контейнер меню
  const header = document.querySelector("header");

  if (title) {
    title.addEventListener("click", () => {
      menu.classList.toggle("open");
    });
    window.addEventListener("scroll", () => {
      if (window.innerWidth <= 768 && menu.classList.contains("open")) {
        menu.classList.remove("open");
      }
      if (window.innerWidth <= 768) {
        const headerBottom = header.offsetTop + header.offsetHeight;
        if (window.scrollY >= headerBottom) {
          nav.classList.add("full-width");
        } else {
          nav.classList.remove("full-width");
        }
      }
    });
  }
});








