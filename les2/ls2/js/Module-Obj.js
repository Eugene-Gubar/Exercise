
window.onload = function () {
    'user strict';

    /* --------------------------------- begin [add object]  --------------------------------- */
    var ModuleObj = {};
    /* ---------------------------------- end [add object]  ---------------------------------- */

    /* ----------------------- begin [add functionality to the object]  ---------------------- */
    ModuleObj.changeTxtP = function () {
        var p = document.getElementsByTagName('p');

        if (p !== null) {

            for (var i = 0; i < p.length; i++) {
                p[i].innerHTML = 'Hello! Welcome to modular implementation';
            }

        } else { return; }
    };
    /* ------------------------ end [add functionality to the object]  ----------------------- */

    /* ------------------------------- begin [initialization]  ------------------------------- */
    (function () {
        // ModuleObj.changeTxtP();
    })();
    /* -------------------------------- end [initialization]  -------------------------------- */

};