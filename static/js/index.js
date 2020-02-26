function ChangeFunctionDiv(enterNumber) {
	var ID1 = document.getElementById('SearchBody');
	var ID2 = document.getElementById('OtherFunctions');
	var Menu1 = document.getElementById('Menu1');
	var Menu2 = document.getElementById('Menu2');
	var HT = document.getElementById('HitokotoDiv');
	var OL = document.getElementById('MoreLinks');
	if(enterNumber == '1') {
		if(Menu1.style.color == "white") {
		} else {
			ID1.style.left = "0";
			ID2.style.left = "-100%";
			Menu1.style.color = "white";
			Menu2.style.color = "rgba(255, 255, 255, .6)";
			HT.style.display = "block";
			OL.style.display = "none";
		}
	} else {
		if(Menu2.style.color == "white") {
		} else {
			ID2.style.left = "0";
			ID1.style.left = "-100%";
			Menu2.style.color = "white";
			Menu1.style.color = "rgba(255, 255, 255, .6)";
			HT.style.display = "none";
			OL.style.display = "block";
		}
	}
}

function SearchIn() {
	var SearchValue = document.getElementById('SearchInputer').value;
	SearchCheck(SearchValue);
	document.getElementById('SearchInputer').value = null;
}

function OCSettings() { /* OC = Open&Close */
	var Opens = document.getElementById('SettingsSpan');
	var SetDiv = document.getElementById('SettingsDiv');
	if(SetDiv.style.display == "none") {
		Opens.style.cssText += 'text-decoration: overline;font-size: 20px;';
		SetDiv.style.display = 'block';
	} else {
		SetDiv.style.display = 'none';
		Opens.style.textDecoration = null;
		Opens.style.fontSize = null;
	}
}

function OpenBGI() {
	var Opened = document.getElementById('ChooseBGI');
	Opened.style.display = 'block';
	OCSettings();
}

function CloseBGI() {
	var Closed = document.getElementById('ChooseBGI');
	Closed.style.display = 'none';
}

function ChooseImg(imageNum) {
	ChangeImg(imageNum);
	var imageTime = MakeCookiesTime();
	var imageCookie = "bgimg=" + imageNum + ";expires=" + imageTime + ";path=/;samesite=strict"
	document.cookie = imageCookie;
}

function OCFunctions() { /* OC = Open&Close */
	var Opens = document.getElementById('FunctionsSpan');
	var FuncDiv = document.getElementById('FunctionDiv');
	if(FuncDiv.style.display == "none") {
		Opens.style.cssText += 'text-decoration: overline;font-size: 20px;';
		FuncDiv.style.display = 'block';
	} else {
		FuncDiv.style.display = 'none';
		Opens.style.textDecoration = null;
		Opens.style.fontSize = null;
	}
}

function AboutTS() {
	var Opened = document.getElementById('AboutDiv');
	Opened.style.display = 'block';
}

function CloseAbout() {
	var Closed = document.getElementById('AboutDiv');
	Closed.style.display = 'none';
}

function OpenOW() {
	window.alert('官网正在维护，无法进行访问。');
	// window.open('http://www.hlunn.com','_blank');
}

function OpenBasicSettings() {
	//document.getElementById('BasicSettings').style.display = 'block';
	OCSettings();
	window.alert('本功能需要用户功能的支持，因此正在维护。');
}

function CloseBasicSettings() {
	document.getElementById('BasicSettings').style.display = 'none';
}

function OpenLogin() {
	OCFunctions();
	window.alert('我们正在申请SSL证书，为了保证用户的账户安全，本功能正在维护中。');
}

// function CloseLogin() { /* The function will be added later. */ }

function HoverDiv(DivNum) {
	document.getElementsByClassName('AWin')[DivNum].style.transform = "rotate3d(5, 5, 0, 13deg)";
}

function OutDiv(DivNum) {
	document.getElementsByClassName('AWin')[DivNum].style.transform = "rotate3d(0, 0, 0, 0deg)";
}

function OpenHelpWebpage() {
	OCFunctions();
	window.open('./help.html', '_blank');
}

function OpenUpdateLog() {
	document.getElementById('UpdateLog').style.display = "block";
	OCSettings();
}

function CloseUpdateLog() {
	document.getElementById('UpdateLog').style.display = "none";
}

function ShowHitokoto() {
	var hitokotoSpan = document.getElementById('hitokoto');
	if(hitokotoSpan.style.display == 'block') {
		location.reload(true);
	} else if(hitokotoSpan.style.display == 'none') {
			hitokotoSpan.style.display = 'block';
	}
}

function ComputerActions() {
	document.getElementById('FunctionsSpan').onclick = OCFunctions;
	document.getElementById('SettingsSpan').onclick = OCSettings;
	document.getElementById('FunctionsSpan').innerHTML = 'Functions';
	document.getElementById('SettingsSpan').innerHTML = 'Settings';
	document.getElementById('FunctionDiv').childNodes[1].onclick = OpenLogin;
	document.getElementById('FunctionDiv').childNodes[3].onclick = OpenHelpWebpage;
	document.getElementById('SettingsDiv').childNodes[1].onclick = OpenBGI;
	document.getElementById('SettingsDiv').childNodes[3].onclick = OpenUpdateLog;
	document.getElementById('SettingsDiv').childNodes[5].onclick = OpenBasicSettings;
	if(CheckCookies('helpDoc', document.cookie) == null) {
		if(confirm("您似乎是第一次使用，要跳转到帮助文档吗？")) {
			window.open('./help.html', '_blank');
		}
		document.cookie = "helpDoc=1;expires=" + MakeCookiesTime() + ";path=/;samesite=strict";
	}
}
