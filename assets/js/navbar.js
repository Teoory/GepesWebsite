$("[data-toggle=tooltip]").tooltip(),
  $(document).ready(function () {
    console.log("ready!"),
      $(window).scroll(function () {
        $("#main-navbar").offset().top > 50
          ? $("#main-navbar").addClass("navbar-fixed-top")
          : $("#main-navbar").removeClass("navbar-fixed-top");
      });
  });



  function showmenu() {
    $("#selector .dropdown-content").show();
  }
  
  $(function() {
    var $win = $(window),
      $box = $("#selector button"),
      $menu = $("#selector .dropdown-content");
  
    $win.on("click", function(event) {
      if (!$box.is(event.target)) {
        $menu.hide();
      }
    });
  });
  