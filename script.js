const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

// ==============================
// 手機版選單
// ==============================
if (menuBtn && mainNav) {

  menuBtn.addEventListener("click", () => {

    const isOpen = mainNav.classList.toggle("active");

    menuBtn.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

    menuBtn.textContent = isOpen ? "✕" : "☰";

  });


  // 點選選單項目後，自動收合
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


  // 從手機版切回電腦版時，自動關閉選單
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

  // 找不到 FAQ 按鈕就跳過
  if (!btn) return;


  btn.addEventListener("click", () => {

    const wasOpen = item.classList.contains("active");


    // 先把其他 FAQ 全部關閉
    document.querySelectorAll(".faq-item").forEach(other => {

      other.classList.remove("active");

    });


    // 如果原本沒有打開，就開啟目前這一題
    if (!wasOpen) {

      item.classList.add("active");

    }

  });

});