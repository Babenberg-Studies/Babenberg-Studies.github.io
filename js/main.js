(function () {
  const APP_STORE = {
    en: "https://apps.apple.com/jp/app/symptomtrack/id6751636595?l=en-US",
    es: "https://apps.apple.com/jp/app/symptomtrack/id6751636595?l=es-ES",
    ja: "https://apps.apple.com/jp/app/symptomtrack/id6751636595?l=ja",
  };

  const STRINGS = {
    en: {
      metaDescription:
        "Babenberg — iPhone health diary for symptoms and medication. Clear history for healthcare visits.",
      tagline:
        "Babenberg is a health diary on iPhone that helps you record, with little effort, symptoms and medication, so you have a clear history when you visit a healthcare professional and rely less on memory.",
      sub: "Free for daily tracking · Premium for PDF export, health card, and profiles",
      download: "Download on the App Store",
      whatTitle: "What you can do",
      f1: "Log symptoms with sliders and quick buttons",
      f2: "Track medications, intakes, and reminders",
      f3: "Review history and spot patterns over time",
      f4: "Notes, sleep, and temperature in one place",
      f5: "Your health data stays on your device",
      shotsTitle: "Screenshots",
      shotsHint: "Swipe horizontally to see more",
      whoTitle: "Who is it for?",
      whoBody:
        "Built with neurodivergent users in mind (ADHD, autism, and similar needs) but useful for everyone. Built with simplicity, continuity, less friction.",
      tiersTitle: "Free vs Premium",
      freeTitle: "Free",
      free1: "Symptoms, medications, and alarms",
      free2: "History, charts, and daily tracking",
      free3: "User profile and health info — no full-app lock",
      premiumTitle: "Premium",
      premium1: "Export activity history (PDF)",
      premium2: "User health card: view, PDF, and QR",
      premium3: "Multiple profiles (up to 6)",
      tierNote: "No subscription required to keep using Babenberg every day.",
      videoTitle: "Video",
      helpTitle: "Help & manual",
      helpBody: "User guide will be published here.",
      legalPrivacy: "Privacy & Terms",
      contact: "Contact",
      disclaimer:
        "Babenberg does not provide medical advice. Always consult a healthcare professional.",
      copyright: "© Babenberg Studies",
    },
    es: {
      metaDescription:
        "Babenberg — diario de salud en iPhone: síntomas y medicación. Historial claro para la consulta.",
      tagline:
        "Babenberg es un diario de salud en el iPhone que te ayuda a registrar, con poco esfuerzo, síntomas y medicación, para tener un historial claro cuando visites al profesional sanitario y no dependas tanto de la memoria.",
      sub: "Gratis para el día a día · Premium para PDF, ficha de salud y perfiles",
      download: "Descargar en App Store",
      whatTitle: "Qué puedes hacer",
      f1: "Registrar síntomas con sliders y botones rápidos",
      f2: "Llevar medicación, tomas y recordatorios",
      f3: "Revisar historial y ver patrones en el tiempo",
      f4: "Notas, sueño y temperatura en un solo sitio",
      f5: "Tus datos de salud permanecen en tu dispositivo",
      shotsTitle: "Capturas",
      shotsHint: "Desliza horizontalmente para ver más",
      whoTitle: "Para quién es",
      whoBody:
        "Pensada para personas neurodivergentes (TDAH, autismo y necesidades similares) pero útil para todos los usuarios. Construida para simplicidad, continuidad, y menos puntos de fricción.",
      tiersTitle: "Gratis vs Premium",
      freeTitle: "Gratis",
      free1: "Síntomas, medicación y alarmas",
      free2: "Historial, gráficos y seguimiento diario",
      free3: "Perfil de usuario e info de salud — sin bloqueo de la app",
      premiumTitle: "Premium",
      premium1: "Exportar historial de actividad (PDF)",
      premium2: "Ficha de salud: ver, PDF y QR",
      premium3: "Varios perfiles (hasta 6)",
      tierNote: "No hace falta suscripción para seguir usando Babenberg cada día.",
      videoTitle: "Vídeo",
      helpTitle: "Ayuda y manual",
      helpBody: "La guía de usuario se publicará aquí.",
      legalPrivacy: "Privacidad y términos",
      contact: "Contacto",
      disclaimer:
        "Babenberg no ofrece consejo médico. Consulta siempre con un profesional sanitario.",
      copyright: "© Babenberg Studies",
    },
    ja: {
      metaDescription:
        "Babenberg — iPhoneの健康日記。症状と服薬を手間なく記録。診察時にわかりやすい履歴。",
      tagline:
        "Babenbergは、iPhone向けの健康日記です。症状と服薬を手間なく記録し、医療専門家の診察時にわかりやすい履歴を残して、記憶に頼りすぎないために役立ちます。",
      sub: "日常の記録は無料 · PremiumでPDFエクスポート、健康カード、プロファイル",
      download: "App Storeでダウンロード",
      whatTitle: "できること",
      f1: "スライダーで強度を、「今すぐ」ボタンでその瞬間を記録",
      f2: "服薬、服用記録、リマインダーを管理",
      f3: "履歴とグラフで傾向を確認",
      f4: "メモ、睡眠、体温を一か所に",
      f5: "健康データはあなたの端末に保存されます",
      shotsTitle: "スクリーンショット",
      shotsHint: "横にスワイプして続きを見る",
      whoTitle: "こんな方に",
      whoBody:
        "ニューロダイバージェント（ADHD、自閉スペクトラムなど）を念頭に設計していますが、どなたにも使えます。シンプルさ、継続性、摩擦の少なさを重視しています。",
      tiersTitle: "無料 vs Premium",
      freeTitle: "無料",
      free1: "強度記録、服薬、アラーム",
      free2: "履歴、グラフ、毎日の記録",
      free3: "ユーザープロファイルと健康情報 — アプリ全体のロックなし",
      premiumTitle: "Premium",
      premium1: "活動履歴のエクスポート（PDF）",
      premium2: "健康カード：表示、PDF、QR",
      premium3: "複数プロファイル（最大6）",
      tierNote: "毎日使い続けるのにサブスクリプションは不要です。",
      videoTitle: "動画",
      helpTitle: "ヘルプとマニュアル",
      helpBody: "ユーザーガイドはこちらに掲載予定です。",
      legalPrivacy: "プライバシーと利用規約",
      contact: "お問い合わせ",
      disclaimer:
        "Babenbergは医療アドバイスを提供しません。必ず医療専門家にご相談ください。",
      copyright: "© Babenberg Studies",
    },
  };

  const SCREENSHOT_COUNT = 9;

  const LEGAL_URL = "https://rvbservices.wixsite.com/babenberg-studies/legal";
  const CONTACT_EMAIL = "contact@babenberg-studies.com";

  const stored = localStorage.getItem("st-lang");
  let lang =
    stored === "en" || stored === "es" || stored === "ja"
      ? stored
      : navigator.language.startsWith("es")
        ? "es"
        : navigator.language.startsWith("ja")
          ? "ja"
          : "en";

  function t(key) {
    return STRINGS[lang][key] || STRINGS.en[key] || "";
  }

  function renderShots() {
    const gallery = document.getElementById("shots-gallery");
    if (!gallery) return;
    gallery.innerHTML = "";
    gallery.setAttribute("aria-label", t("shotsTitle"));
    for (let i = 1; i <= SCREENSHOT_COUNT; i += 1) {
      const num = String(i).padStart(2, "0");
      const wrap = document.createElement("div");
      wrap.className = "shot";
      wrap.setAttribute("role", "group");
      wrap.setAttribute("aria-label", `${i} / ${SCREENSHOT_COUNT}`);
      const img = document.createElement("img");
      img.src = `assets/screenshots/${lang}/${num}.png?v=1.6.0`;
      img.alt = `Babenberg screenshot ${i}`;
      img.loading = i <= 2 ? "eager" : "lazy";
      wrap.appendChild(img);
      gallery.appendChild(wrap);
    }
    gallery.scrollLeft = 0;
  }

  function applyLang() {
    document.documentElement.lang = lang;
    document.title = "Babenberg";
    document.querySelector('meta[name="description"]')?.setAttribute("content", t("metaDescription"));

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key) el.textContent = t(key);
    });

    document.querySelectorAll(".btn-app-store").forEach((a) => {
      a.href = APP_STORE[lang];
    });

    document.getElementById("btn-en")?.classList.toggle("active", lang === "en");
    document.getElementById("btn-es")?.classList.toggle("active", lang === "es");
    document.getElementById("btn-ja")?.classList.toggle("active", lang === "ja");

    renderShots();
  }

  document.getElementById("btn-en")?.addEventListener("click", () => {
    lang = "en";
    localStorage.setItem("st-lang", lang);
    applyLang();
  });

  document.getElementById("btn-es")?.addEventListener("click", () => {
    lang = "es";
    localStorage.setItem("st-lang", lang);
    applyLang();
  });

  document.getElementById("btn-ja")?.addEventListener("click", () => {
    lang = "ja";
    localStorage.setItem("st-lang", lang);
    applyLang();
  });

  const legal = document.getElementById("legal-link");
  if (legal) legal.href = LEGAL_URL;

  const contact = document.getElementById("contact-link");
  if (contact) contact.href = "mailto:" + CONTACT_EMAIL;

  applyLang();
})();
