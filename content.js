function short_to_video() {
    let currentUrl = window.location.href;
    newUrl = currentUrl.replace('shorts/', 'watch?v=');
    window.location.href = newUrl;
    location.replace(newUrl);

    setTimeout(function() {
        location.replace(newUrl);
    }, 1000);
}



// short_to_video();
// location.reload();