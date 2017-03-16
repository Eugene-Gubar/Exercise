
(function () {
    'use strict'

    function changeTxtP() {
        var p = document.getElementsByTagName('p');

        if (p !== null) {

            for (var i = 0; i < p.length; i++) {
                p[i].innerHTML = 'Hello! Welcome to modular implementation';
            }

        } else { return; }
    };
    changeTxtP();
})();