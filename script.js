const container = document.getElementsByClassName("container")[0] ;
function showElement() {
	container.innerHTML = '' ;
	const div = document.createElement("div")
		div.id = "line" ;
	div.className = "line" ;
	container.append(div);
}
