

window.onload = function () {
    (function () {

        var loadPageHandler = function () {
            var open = window.open('./part/app.html', 'App', 'width=300px, height=600px');
        }

        var setInterval = setTimeout(loadPageHandler, 5000);

    })();
}