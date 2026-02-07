// Simple i18n toggler for RU/EN
const DEFAULT_LANG = "ru";
const STORAGE_KEY = "site_lang";

function setPressed(lang) {
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.langBtn === lang));
  });
}

function applyLang(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = el.getAttribute(`data-${lang}`);
    if (value !== null) {
      // keep it simple: textContent for safety
      el.textContent = value;
    }
  });

  setPressed(lang);
  localStorage.setItem(STORAGE_KEY, lang);
}

function initLang() {
  const saved = localStorage.getItem(STORAGE_KEY);
  const lang = saved || DEFAULT_LANG;
  applyLang(lang);

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.dataset.langBtn));
  });
}

initLang();

// Year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());
