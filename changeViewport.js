
viewport = document.querySelector("meta[name=viewport]");
if(screen.width > 320) {
	alert('ipad');
	viewport.setAttribute('content', 'width=1024');
}
else {
	viewport.setAttribute('content', 'width=640');
}