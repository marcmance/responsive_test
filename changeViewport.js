
viewport = document.querySelector("meta[name=viewport]");
if(screen.width <=  320){
	viewport.setAttribute('content', 'width=640');
}
else if(screen.width > 320 && screen.width <= 1024) {
	//alert('ipad');
	viewport.setAttribute('content', 'width=1024');
}
else {
	//alert('here');
	viewport.setAttribute('content', 'width=device-width');
}