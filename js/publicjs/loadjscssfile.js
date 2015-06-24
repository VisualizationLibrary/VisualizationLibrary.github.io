// js css 动态加载器
function loadjscssfile(filename, filetype) {

	if (filetype == "js") {
		var fileref = document.createElement('script');
		fileref.setAttribute("src", filename);

	} else if (filetype == "css") {
		var fileref = document.createElement('link');
		fileref.setAttribute("rel", "stylesheet");
		fileref.setAttribute("href", filename);
	}
	if (typeof fileref != "undefined") {
		document.getElementsByTagName("head")[0].appendChild(fileref);
	}
}
loadjscssfile("css/referencecss/bootstrap.min.css","css");
loadjscssfile("css/publiccss/base.css","css");
