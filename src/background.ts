chrome.webNavigation.onCommitted.addListener((details) => {
  const url = new URL(details.url);
  if ((url.hostname === "www.youtube.com" || url.hostname === "youtube.com") && url.pathname.startsWith("/shorts/")) {
    const shortsId = url.pathname.split("/")[2];
    const newUrl = `https://www.youtube.com/watch?v=${shortsId}`;
    chrome.tabs.update(details.tabId, { url: newUrl });
  }
}, {
  url: [
    { hostEquals: "www.youtube.com", pathPrefix: "/shorts/" },
    { hostEquals: "youtube.com", pathPrefix: "/shorts/" }
  ]
});