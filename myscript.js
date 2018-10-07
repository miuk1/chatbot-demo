$(document).ready(
    $('#what').click(function () {
        $("#hide-what").fadeIn('slow');
        $('#hide-what').removeClass("hide-box");
        $('.text-main').addClass("hide-box");
        $('#why').addClass("hide-box");
        $('#where').addClass("hide-box");
        $('#how').addClass("hide-box");
        $('#back').removeClass("hide-box");
    })
);

$(document).ready(
    $('#why').click(function () {
        $("#why-box").animate({
            right: "8%"
        });
        $("#hide-why").fadeIn('slow');
        $('#hide-why').removeClass("hide-box");
        $('.text-main').addClass("hide-box");
        $('#what').addClass("hide-box");
        $('#where').addClass("hide-box");
        $('#how').addClass("hide-box");
        $('#back').removeClass("hide-box");
        $('#why-poly').removeClass("why-poly");
        $('#why-poly').addClass("what-poly");
        $('#why-poly').removeClass("why-poly");
        $('#why-box').removeClass("why");
        $('#why-box').addClass("what");
        $("img").css({
            "height": "40%",
            "right": "15%",
            "bottom": "20%"
        });
        $(".what-poly").css({
            "background": "#f4cbf9c7"
        });
    })
);

$(document).ready(
    $('#where').click(function () {
        $("#where-box").animate({
            right: "8%",
            bottom: "0%"
        });
        $("#hide-where").fadeIn('slow');
        $('#hide-where').removeClass("hide-box");
        $('.text-main').addClass("hide-box");
        $('#why').addClass("hide-box");
        $('#what').addClass("hide-box");
        $('#how').addClass("hide-box");
        $('#back').removeClass("hide-box");
        $('#where-poly').removeClass("where-poly");
        $('#where-poly').addClass("what-poly");
        $('#where-poly').removeClass("where-poly");
        $('#where-box').removeClass("where");
        $('#where-box').addClass("what");
        $("img").css({
            "height": "50%",
            "right": "10%",
            "bottom": "15%"
        });
        $(".what-poly").css({
            "background": "#dae9d2cb"
        });
    })
);

$(document).ready(
    $('#how').click(function () {
        $("#how-box").animate({
            bottom: "0%"
        });
        $("#hide-how").fadeIn('slow');
        $('#hide-how').removeClass("hide-box");
        $('.text-main').addClass("hide-box");
        $('#why').addClass("hide-box");
        $('#where').addClass("hide-box");
        $('#what').addClass("hide-box");
        $('#back').removeClass("hide-box");
        $('#how-poly').removeClass("how-poly");
        $('#how-poly').addClass("what-poly");
        $('#how-poly').removeClass("how-poly");
        $('#how-box').removeClass("how");
        $('#how-box').addClass("what");
        $("img").css({
            "height": "30%",
            "right": "10%",
            "bottom": "30%"
        });
        $(".what-poly").css({
            "background": "#f8f5cfd5"
        });


    })
);

$(document).ready(
    $('#chatbox-area').click(function () {
        $('#chatbot').fadeIn('slow');
        $('#back').removeClass("hide-box");
        $('#why').addClass("hide-box");
        $('#where').addClass("hide-box");
        $('#what').addClass("hide-box");
        $('#how').addClass("hide-box");
        $('#chatbox-area').addClass("hide-box");
        $('.text-main').addClass("hide-box");
        $('#chatbot').removeClass('hide-box');

    })
)