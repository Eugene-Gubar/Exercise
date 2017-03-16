


window.onload = function () {

    (function () {

        var count    = 0,
            minutes  = 0,
            seconds  = 0,
            mseconds = 0,
            interval;

        /* ---------------------------------- begin [button] -----------------------------------*/
        var btnStart  = document.getElementById('timer_start'),
            btnStop   = document.getElementById('timer_stop'),
            btnReset  = document.getElementById('timer_reset');
        /* ----------------------------------- end [button] ------------------------------------*/

        /* ---------------------------------- begin [events] -----------------------------------*/
        btnStart.onclick = startHandler;
        btnStop.onclick  = stopHandler;
        btnReset.onclick = resetHandler;
        /* ----------------------------------- end [events] ------------------------------------*/

        /* ---------------------------------- begin [handler] ----------------------------------*/
        function startHandler() {
            
            minutes = parseInt(minutes / 60, 10)
            seconds = parseInt(seconds % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

        }
        /* ----------------------------------- end [handler] -----------------------------------*/

    })();

};