$(document).ready(function()
{
	$("#toggle-content").on("click",function()
	{
		$("#content").toggleClass("active");
		$("#left-nav-bar").toggleClass("active");
	});
	$("#toggle-day").on("click",function()
	{
		$("#portfolio").toggleClass("active");
	});
	$("#toggle-night").on("click",function()
	{
		$("#portfolio").toggleClass("active");
	});
});
