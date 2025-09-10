document.addEventListener("DOMContentLoaded", () => {
  console.log("Script aktif");
  document.querySelectorAll(".app-card").forEach(card => {
    card.addEventListener("click", () => {
      const app = card.getAttribute("data-app");
      const platform = detectPlatform();
      openApp(app, platform);
    });
  });
});

function detectPlatform() {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes("iphone") || ua.includes("ipad") || ua.includes("ipod")) {
    return "ios";
  } else if (ua.includes("android")) {
    return "android";
  } else {
    return "unknown";
  }
}

function openApp(app, platform) {
  const appUrls = {
    myxl: {
      android: "https://play.google.com/store/apps/details?id=com.apps.MyXL&hl=id",
      ios: "https://apps.apple.com/id/app/myxl-cek-kuota-beli-paket-xl/id683141076"
    },
    axisnet: {
      android: "https://play.google.com/store/apps/details?id=com.axis.net&hl=id",
      ios: "https://apps.apple.com/id/app/axisnet/id497146073?l=id"
    },
    mysf: {
      android: "https://play.google.com/store/apps/details?id=com.smartfren&hl=id",
      ios: "https://apps.apple.com/id/app/mysmartfren/id1209898190"
    }
  };

  const url = appUrls[app]?.[platform];

  if (url) {
    const opened = window.open(url, "_blank");
    if (!opened) {
      alert("Silakan izinkan pop-up atau klik tautan ini: " + url);
    }
  } else {
    alert("Maaf, perangkat atau aplikasi tidak dikenali.");
  }
}
