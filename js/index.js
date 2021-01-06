let skills =
  "HTML,CSS,Javascript,jQuery,Git,Front-End Development,SCSS / SASS,AJAX,CSS3,React.js,Redux,Webpack,Tornado web framework,konvaJS,D3.js";
$(document).ready(function () {
	let html = ``;
  skills.split(",").map((d) => {
    html = html +`<div class="person-info-details">
		${d}
	</div>`;
  });
  $("#person-skills").html(html)
  var toggleNav = function () {
    $("#content").toggleClass("active");
    $("#left-nav-bar").toggleClass("active");
  };

  $("#toggle-content").on("click", function () {
    toggleNav();
  });
  $("#toggle-day").on("click", function () {
    $("#portfolio").toggleClass("active");
  });
  $("#toggle-night").on("click", function () {
    $("#portfolio").toggleClass("active");
  });
  $("#slide-down").on("click", function () {
    $("html,body").animate(
      {
        scrollTop: $("#person-objective").offset().top - 100,
      },
      "slow"
    );
  });
  $("#left-nav-bar li").on("click", function () {
    toggleNav();

    var id = $(this).data("id");
    $("html,body").animate(
      {
        scrollTop: $("#" + id).offset().top - 100,
      },
      "slow"
    );
  });
});
