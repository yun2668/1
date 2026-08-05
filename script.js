const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

if (menuBtn && mainNav) {

  menuBtn.addEventListener("click", () => {

    const isOpen = mainNav.classList.toggle("active");

    menuBtn.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

    menuBtn.textContent = isOpen ? "✕" : "☰";

  });


  mainNav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      mainNav.classList.remove("active");

      menuBtn.setAttribute(
        "aria-expanded",
        "false"
      );

      menuBtn.textContent = "☰";

    });

  });


  window.addEventListener("resize", () => {

    if (window.innerWidth > 760) {

      mainNav.classList.remove("active");

      menuBtn.setAttribute(
        "aria-expanded",
        "false"
      );

      menuBtn.textContent = "☰";

    }

  });

}


// ==============================
// 常見問題 FAQ
// ==============================

document.querySelectorAll(".faq-item").forEach(item => {

  const btn = item.querySelector(".faq-question");

  if (!btn) return;


  btn.addEventListener("click", () => {

    const wasOpen = item.classList.contains("active");


    // 先關閉其他 FAQ
    document.querySelectorAll(".faq-item").forEach(other => {

      other.classList.remove("active");

    });


    // 再開啟目前這一題
    if (!wasOpen) {

      item.classList.add("active");

    }

  });

});
