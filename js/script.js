// ----------------------------------------------------------General------------------------------------------
function log(key) {
    console.log(key)
}
function getRandom(key) {
   return Math.floor(Math.random()*key)
}
// ----------------------------------------------------------General------------------------------------------
function manipulate() {
    $('#move_up').click(function () {
        $('#change_me').animate({top: 30}, 400)
    })
    $('#move_down').click(function () {
        $('#change_me').animate({top: 130}, 200)
    })
    $('#color').click(function () {
        $('#change_me').toggleClass('change_color')
    })
    $('#disappear').click(function () {
        $('#change_me').toggle(300)
    })
}
manipulate()
$(function () {
    $('.show-img').click(function () {
        $(".dog").fadeToggle(500)
        $('.img_wrap').slideToggle(200)
    })
})