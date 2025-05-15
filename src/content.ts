const redirectIfShorts = () => {
  const url = new URL(window.location.href);
  if (url.pathname.startsWith("/shorts/")) {
    const shortsId = url.pathname.split("/")[2];
    const newUrl = `https://www.youtube.com/watch?v=${shortsId}`;
    if (window.location.href !== newUrl) {
      window.location.replace(newUrl);
    }
  }
};

// 初次載入檢查
redirectIfShorts();

// 補上 history API patch 來監聽 SPA 路由變化
const originalPushState = history.pushState;
const originalReplaceState = history.replaceState;

history.pushState = function(...args) {
  originalPushState.apply(this, args);
  redirectIfShorts();
};

history.replaceState = function(...args) {
  originalReplaceState.apply(this, args);
  redirectIfShorts();
};

window.addEventListener('popstate', redirectIfShorts);