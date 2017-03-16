

window.onload = function () {

    (function () {

        /* ------------------------------ begin [create DOM element] ------------------------------ */
        var button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.innerHTML = 'Добавить параграф';
        document.body.appendChild(button);
        /* ------------------------------- end [create DOM element] ------------------------------- */


        /* ------------------------------------ begin [events] ------------------------------------ */
        button.onclick = addPHandler;
        /* ------------------------------------- end [events] ------------------------------------- */

        /* ------------------------------------- end [handler] ------------------------------------ */

        /**
         * Function addPHandler - Add Paragraph with text
         */
        function addPHandler() {
            var els = document.getElementsByClassName('newP165798216');

            if (els.length < 10) {

                var p = document.createElement('p');
                p.setAttribute('class', 'newP165798216');
                p.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi culpa, assumenda, sequi consectetur fuga maxime neque soluta ut fugiat, cumque, incidunt magni mollitia minima. Iure praesentium dolorem perferendis necessitatibus non.';
                document.body.appendChild(p);

            } else {
                removeEls('newP165798216');
            }

        }

        /* ------------------------------------ begin [handler] ----------------------------------- */


        /* -------------------------------- begin [utility function] ------------------------------ */

        /**
         * Function removeEls - Remove elements by class
         * @param {string} c 
         */
        function removeEls(c) {
            var els = document.getElementsByClassName(c);

            for (var i = 0; i < 10; i++) { els[0].remove(); };
        }
        
        /* --------------------------------- end [utility function] ------------------------------- */
        
    })();

};