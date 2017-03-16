

'use strict';

window.onload = function () {

    (function () {

        /* ---------------------------------- begin [button] -----------------------------------*/
        var btnP   = document.getElementById('slc_p'),
            btnA   = document.getElementById('slc_links'),
            btnDiv = document.getElementById('slc_div');
        /* ----------------------------------- end [button] ------------------------------------*/

        /* ---------------------------------- begin [events] -----------------------------------*/
        btnP.onclick   = selectPHandler;
        btnA.onclick   = selectAHandler;
        btnDiv.onclick = selectDivHandler;
        /* ----------------------------------- end [events] ------------------------------------*/

        /* ---------------------------------- begin [handler] ----------------------------------*/
        function selectPHandler() {
            var p = document.getElementsByTagName('p');

            if (p !== null) {

                for (var i = 0; i < p.length; i++) {
                    p[i].style.border = '1px dashed green';
                }

            } else {
                return;
            }

        }

        function selectAHandler() {
            var a = document.getElementsByTagName('a');

            if (a !== null) {

                for (var i = 0; i < a.length; i++) {
                    a[i].style.border = '1px dashed red';
                }

            } else {
                return;
            }

        }

        function selectDivHandler() {
            var div = document.getElementById('test_div');

            if (div !== null) {
                div.style.border = '2px dotted blue';
            }

        }
        /* ----------------------------------- end [handler] -----------------------------------*/

    })();

};