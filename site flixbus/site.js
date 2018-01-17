filterSelectieNr = 0;

function wisselFilterClassA() {
	var el = document.getElementById('filtermenu');
	if (el.className == "view gesloten")
		el.className = "view open";
	else
		el.className = "view gesloten";
}

function wisselFilterClass() {
	var el = document.getElementById('filtermenu');
	if (el.className == "gesloten")
		el.className = "open";
	else
		el.className = "gesloten";
}

function selectie(nr) {
	var i;
	for (i = 1; i <= 5; i++) {
		if (i <= nr)
			document.getElementById('hart' + i).className = 'hartactief';
		else
			document.getElementById('hart' + i).className = 'hart';
	}
}

function selectieTerug() {
	var i;
	for (i = 1; i <= 5; i++) {
		if (i <= filterSelectieNr)
			document.getElementById('hart' + i).className = 'hartactief';
		else
			document.getElementById('hart' + i).className = 'hart';
	}
}

function wisselZoekbalkClass() {
	var el = document.getElementById('menubalk');
	if (el.className == "menubalk zoekgesloten") {
		el.className = "menubalk zoekopen";
		document.getElementById('zoekbalk').focus();
	} else
		el.className = "menubalk zoekgesloten";
}

function download(el) {
	el.style.opacity = 0;
	
	setTimeout(function() {
		el.className = "downloadloading";
		el.style.opacity = 1;
	}, 250)
	
	setTimeout(function() {
		el.style.opacity = 0;
	}, 1300)
	
	setTimeout(function() {
		el.className = "downloadcheck";
		el.style.opacity = 1;
	}, 1550)
}

function openLoginVenster() {
	var el = document.getElementById('loginvenster')
	if (el.style.display == 'block') {
		el.style.display = 'none';
	} else {
		var rect = document.getElementById('loginlink').getBoundingClientRect();
		el.style.display = 'block';
		resize();
		document.getElementById('loginemail').focus();
	}
}

function resize() {
	var loginvenster = document.getElementById('loginvenster')
	if (loginvenster != null && loginvenster.style.display == 'block') {
		var rect = document.getElementById('loginlink').getBoundingClientRect();
		loginvenster.style.display = 'block';
		loginvenster.style.left = (rect.left - loginvenster.offsetWidth * 0.9) + 'px';
		loginvenster.style.top = (rect.bottom + 20) + 'px';
	}
}

function initieer(nr) {
	filterSelectieNr = nr;
	window.addEventListener("resize", resize);
}