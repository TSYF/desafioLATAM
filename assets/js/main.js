// Activación de tooltips de bootstrap
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
    $('.navbar').css('background','var(--viajes)');
    } else {
    $('.navbar').css('background','transparent');
    }
    });
})