document.addEventListener("DOMContentLoaded", () => {
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
      android: "https://play.google.com/store/apps/details?id=com.axis.net",
      ios: "https://apps.apple.com/id/app/axisnet/id1473123824"
    },
    mysf: {
      android: "https://play.google.com/store/apps/details?id=com.smartfren&hl=id",
      ios: "https://apps.apple.com/id/app/my-smartfren/id1477797633"
    }
  };

  const url = appUrls[app]?.[platform];

  if (url) {
    window.open(url, "_blank");
  } else {
    alert("Maaf, perangkat atau aplikasi tidak dikenali.");
  }
}
