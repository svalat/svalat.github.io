$(document).ready(function() {
	//define
	var menuEntries = [
		{title: 'Home', url: 'index.html'},
		{title: 'Research', url: 'research.html'},
		{title: 'Projects',url: 'projects.html'},
		{title: 'Teaching',url: 'teaching.html'},
		{title: 'Timeline',url: 'timeline.html'},
		{title: 'Others', url: 'others.html'},
		{title: 'Blog', url: 'http://blog.progranet.ovh'},
		//{title: 'CV', url: 'docs/2017-11-cv.pdf'},
		//{title: 'Contribute', url: 'contrib.html'},
	];

	//get current address
	var pathname = $(location).attr('pathname').split('/').pop();

	//setup
	var ul = $(".navbar ul");

	//insert
	for (var i in menuEntries)
	{
		//create link
		var a = $("<a>")
			.text(menuEntries[i].title)
			.attr('href',menuEntries[i].url)

		//if current
		if (pathname == menuEntries[i].url)
			a.addClass('active');

		//append
		ul.append($("<li>").append(a));
	}
});
