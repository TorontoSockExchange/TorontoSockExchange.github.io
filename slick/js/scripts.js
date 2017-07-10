onLoad: function onLoad() {
	this.setYear();
}

setYear: function setYear() {
    var date = new Date();
    var dom = document.getElementById('copyrights');
    dom.innerText = dom.innerText.concat(' ' + date.getFullYear());
}