function MakeCookiesTime() {
	var time = new Date();
	time.setHours(time.getHours() + 4320);
	var tResult = time.toGMTString();
	return tResult;
}

function RemoveCookies(cookieName) {
	var time = new Date();
	time.setHours(time.getHours() - 1);
	var tFResult = time.toGMTString();
	document.cookie = cookieName + "=;expires=" + tFResult + ";path=/";
}

function CheckCookies(checkName, wholeCookies) {
	var arr,Reg = new RegExp("(^| )" + checkName + "=([^;]*)(;|$)");
	if(wholeCookies.match(Reg)) {
		return wholeCookies.match(Reg)[2];
	} else {
		return null;
	}
}

function ChangeImg(imgName) {
	var Body = document.body;
	var Html = document.documentElement;
	switch(imgName) {
		case '1':
			Html.style.cssText += "background-image: url('./src/background1.jpg')";
			Body.style.cssText += "background-image: url('./src/background1.jpg')";
			break;
		case '2':
			Html.style.cssText += "background-image: url('./src/background2.jpg')";
			Body.style.cssText += "background-image: url('./src/background2.jpg')";
			break;
		case '3':
			Html.style.cssText += "background-image: url('./src/background3.jpg')";
			Body.style.cssText += "background-image: url('./src/background3.jpg')";
			break;
		case '4':
			Html.style.cssText += "background-image: url('./src/background4.jpg')";
			Body.style.cssText += "background-image: url('./src/background4.jpg')";
			break;
	}
}

function GetElementPosition(elementName) {
}
