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
	$("#slide-down").on("click",function()
	{
		window.scrollBy(0,600);
	});
	function scroll(x,y)
	{
		window.scrollBy(x,y);
	}
});