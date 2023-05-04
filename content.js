function short_to_video() {
    let currentUrl = window.location.href;
    newUrl = currentUrl.replace('shorts/', 'watch?v=');
    window.location.assign(newUrl);
}

short_to_video();