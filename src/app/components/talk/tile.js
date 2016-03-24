(function ($) {
    $(document).ready(function () {
        var random = Math.random();
        var css;
        var number = $('tiles').length;
        if (number <= 3) {
            if(random <= 0.25){
                css = 'app/styles/video1_1.css';
            }else if (random > 0.25 && random <= 0.5) {
                css = 'app/styles/video2_1.css';
            }else if (random > 0.5 && random <= 0.75) {
                css = 'app/styles/video3_1.css';
            }else if (random > 0.75 && random < 1) {
                css = 'app/styles/video4_1.css';
            }
        }else if (number > 3 && number <= 7) {
            if(random <= 0.25){
                css = 'app/styles/video1_2.css';
            }else if (random > 0.25 && random <= 0.5) {
                css = 'app/styles/video2_2.css';
            }else if (random > 0.5 && random <= 0.75) {
                css = 'app/styles/video3_2.css';
            }else if (random > 0.75 && random < 1) {
                css = 'app/styles/video4_2.css';
            }
        }
        var styleNode = document.createElement('link');
        styleNode.href = css;
        styleNode.rel = 'stylesheet';
        document.appendChild(styleNode);
    });  
})(jQuery);