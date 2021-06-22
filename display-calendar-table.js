console.log(window.colorMonth);
if (leapYear === 0){
	document.writeln("<script src='month-35-days.js'></script>");
	if (colorMonth === "Sun"){
	document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"sun-non-leap-year.css\" />");
	}else{
	document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"style-calendar.css\" />");
	};
}else{
	document.writeln("<script src='month-36-days.js'></script>");
	if (colorMonth === "Sun"){
	document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"sun-leap-year.css\" />");
	}else{
	document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"style-calendar.css\" />");
	};
}