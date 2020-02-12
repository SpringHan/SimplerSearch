function PhoneActions() {
	document.getElementById('MenuDiv').style.display = 'none';
	document.getElementById('OtherFunctions').style.display = 'none';
	document.getElementById('FunctionTitle').addEventListener("click", ChangeFunctions);
	document.getElementById('FunTitle').addEventListener("click", ChangeFunctions);
	document.getElementById('FunctionsSpan').innerHTML = '功能';
	document.getElementById('SettingsSpan').innerHTML = '设置'
	document.getElementById('FunctionsSpan').onclick = function() { PhoneOCFunctions('function'); };
	document.getElementById('SettingsSpan').onclick = function() { PhoneOCFunctions('setting'); };
	document.getElementById('FunctionDiv').childNodes[1].onclick = function() { PhoneOpenFunction('login'); };
	document.getElementById('FunctionDiv').childNodes[3].onclick = function() { PhoneOpenFunction('help'); };
	document.getElementById('SettingsDiv').childNodes[1].onclick = function() { PhoneOpenSettings('backgImage'); };
	document.getElementById('SettingsDiv').childNodes[3].onclick = function() { PhoneOpenSettings('updateLog'); };
	document.getElementById('SettingsDiv').childNodes[5].onclick = function() { PhoneOpenSettings('basicSettings'); };
	if(CheckCookies('helpDoc', document.cookie) == null) {
		if(confirm("您似乎是第一次使用，要跳转到帮助文档吗？")) {
			window.open('./help.html', '_blank');
		}
		document.cookie = "helpDoc=1;" + MakeCookiesTime() + ";path=/;samesite=strict";
	}
}

/* ChangeFunctions() {{{*/
function ChangeFunctions() {
	var OpClO = document.getElementById('OtherFunctions');
	var OtherO = document.getElementById('SearchBody');
	var HitoO = document.getElementById('HitokotoDiv');
	var MoreO = document.getElementById('MoreLinks');
	var OpClObject = window.getComputedStyle(OpClO, null);
	var OtherObject = window.getComputedStyle(OtherO, null);
	var HitokotoObject = window.getComputedStyle(HitoO, null);
	if(OpClObject.getPropertyValue('display') == 'block') {
		if(OtherObject.getPropertyValue('display') == 'none') {
			if(HitokotoObject.getPropertyValue('display') == 'none')
			{
				OpClO.style.animation = 'openNewDiv 0.65s';
				MoreO.style.animation = 'openNewDiv 0.65s';
				setTimeout(function () {
					OpClO.style.display = 'none';
					MoreO.style.display = 'none';
				}, 650);
				OtherO.style.animation = 'fadeIntoBlock 0.65s';
				HitoO.style.animation = 'fadeIntoBlock 0.65s';
				setTimeout(function () {
					OtherO.style.display = 'block';
					HitoO.style.display = 'block';
				}, 650);
			} else
				location.reload();
		} else
			location.reload();
	} else if(OpClObject.getPropertyValue('display') == 'none') {
		if(OtherObject.getPropertyValue('display') == 'block') {
			if(HitokotoObject.getPropertyValue('display') == 'block') {
				OtherO.style.animation = 'openNewDiv 0.65s';
				HitoO.style.animation = 'openNewDiv 0.65s';
				setTimeout(function () {
					OtherO.style.display = 'none';
					HitoO.style.display = 'none';
				}, 650);
				OpClO.style.animation = 'fadeIntoBlock 0.65s';
				MoreO.style.animation = 'fadeIntoBlock 0.65s';
				setTimeout(function () {
					OpClO.style.display = 'block';
					MoreO.style.display = 'block';
				}, 650);
			}
		} else
			location.reload();
	} else
		location.reload();
}
/* }}}*/

/* PhoneOCFunctions() {{{ */
function PhoneOCFunctions(clickSpan) {
	if(clickSpan == 'function') {
		var SpanO = document.getElementById('FunctionsSpan');
		var SettO = document.getElementById('FunctionDiv');
		var FObject = window.getComputedStyle(SettO, null);
		if(FObject.getPropertyValue('display') == 'none') {
			SpanO.style.marginLeft = '0';
			SpanO.style.width = '100%';
			SpanO.style.backgroundColor = 'cyan';
			SettO.style.animation = 'fadeIntoBlock 0.8s';
			SettO.style.display = 'block';
		} else if(FObject.getPropertyValue('display') == 'block') {
			SettO.style.animation = 'openNewDiv 1.2s';
			SettO.style.display = 'none';
			SpanO.style.backgroundColor = 'transparent';
			SpanO.style.marginLeft = '1%';
			SpanO.style.width = 'auto';
		} else
			location.reload();
	} else if(clickSpan == 'setting') {
		var SpanO = document.getElementById('SettingsSpan');
		var SettO = document.getElementById('SettingsDiv');
		var FObject = window.getComputedStyle(SettO, null);
		if(FObject.getPropertyValue('display') == 'none') {
			SpanO.style.marginRight = '0';
			SpanO.style.width = '100%';
			SpanO.style.backgroundColor = 'cyan';
			SettO.style.animation = 'fadeIntoBlock 0.8s';
			SettO.style.display = 'block';
		} else if(FObject.getPropertyValue('display') == 'block') {
			SettO.style.animation = 'openNewDiv 1.2s';
			SettO.style.display = 'none';
			SpanO.style.backgroundColor = 'transparent';
			SpanO.style.marginRight = '1%';
			SpanO.style.width = 'auto';
		} else
			location.reload();
	}
}
/* }}} */

function PhoneOpenFunction(funcName) {
	if(funcName == 'login')
		window.alert('我们正在申请SSL证书，为了保证用户的账户安全，本功能正在维护中。');
	else if(funcName == 'help')
		window.open('./help.html', '_blank');
}

function PhoneOpenSettings(settingName) {
	if(settingName == 'backgImage')
		document.getElementById('ChooseBGI').style.display = 'block';
	else if(settingName == 'updateLog')
		document.getElementById('UpdateLog').style.display = 'block';
	else if(settingName == 'basicSettings')
		window.alert('本功能需要用户功能的支持，因此正在维护。');
}
