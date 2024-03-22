chrome.webRequest.onBeforeRequest.addListener(
	(details) => {
	  const url = new URL(details.url);
	  if (url.pathname.startsWith('/shorts/')) {
		const newPath = url.pathname.replace('/shorts/', '/watch?v=');
		return { redirectUrl: url.origin + newPath + url.search };
	  }
	},{
		urls: [
			"*://*.youtube.com/",
			"*://youtu.be/"
		]
	},
	["blocking"]
  );