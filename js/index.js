

function visitLink(path) {
    var count = localStorage.getItem(path);
    localStorage.setItem(path, Number(count)+1)
}

function viewResults() {
	var str = parseInt(localStorage.getItem("Page1"));
	var str2 = parseInt(localStorage.getItem("Page2"));
	var str3 = parseInt(localStorage.getItem("Page3"));
	var content = document.querySelector('#content1');
	content.innerHTML= "You visited Page1 " + str + " time(s)" + "<br>" + "You visited Page2 " + str2 + " time(s)" + "<br>" + "You visited Page3 " + str3 + " time(s)";
}

