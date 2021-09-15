// Function to create date and get hours, minutes and seconds, and replace as an innerHTML of the parameter given in callback.
function setTime(h, min, s) {
    const date = new Date(); 

    // Hours
    let hours = date.getHours();
    h.html(hours);
    if(hours < 10) {
        h.html("0" + hours)
    }

    // Minutes
    let minutes = date.getMinutes();
    min.html(minutes);
    if(minutes < 10) {
        min.html("0" + minutes)
    }

    // Seconds
    let seconds = date.getSeconds();
    s.html(seconds);
    if(seconds < 10) {
        s.html("0" + seconds)
    }
}

setInterval(() => {
    setTime($("#hours"), $("#minutes"), $("#seconds"))
}, 1000);

$("#light").attr("class", "none");

$("#dark").on("click", function () {
    $("#light").removeAttr("class", "none");
    $("#light").attr("id", "light");
    $("#dark").attr("class", "none");

    $(".container").attr("class", "container-dark");

    $(".clock-container").attr("class", "clock-container-dark");

    $(".number").attr("class", "number-dark");

    $(".colun").css("color", "#fff");

    $("#light").on("click", function () {
        $("#light").attr("class", "none");
        $("#dark").removeAttr("class", "none");
        $("#dark").attr("id", "dark");

        $(".container-dark").attr("class", "container");

        $(".clock-container-dark").attr("class", "clock-container");

        $(".number-dark").attr("class", "number");

        $(".colun").css("color", "#000");
    })
})