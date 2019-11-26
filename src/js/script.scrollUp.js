$(document).ready(function() {
  $(".footer__footerButton").click(function() {
    $(".footer__footerButton").scroll(function() {
      $("body").scroll(".header")
    })
  })
})
