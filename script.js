document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".app-card").forEach(card => {
    card.addEventListener("click", () => {
      const app = card.getAttribute("data-app");
      openApp(app);
    });
  });
});

function openApp(app) {
  const appUrls = {
    myxl: "https://play.google.com/store/apps/details?id=com.apps.MyXL&hl=id",
    axisnet: "https://play.google.com/store/apps/details?id=com.axis.net",
    mysf: "https://play.google.com/store/apps/details?id=com.smartfren&hl=id"
  };

  const url = appUrls[app];
  if (url) {
    window.open(url, "_blank");
  } else {
    console.warn(`App "${app}" tidak dikenali.`);
  }
}
