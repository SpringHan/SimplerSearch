/* 
 * MoreLinks
 * @Auther: SpringHan
 * @Date: 2020.1.13
 * Function: This file can `Open the Div` and `Save the data which is in Div`.
*/

var clicks = 0;
// var timeOut = 0;

function OpenMoreLinks(clickNum) {
	if(!clickNum) {
		window.alert("错误：通过非正常方式打开链接保存面板！");
		return;
	}
	var EResult = CheckLinksExist(clickNum);
	if(EResult == false) {
		var open = document.getElementById('OpenOtherLinksDiv');
		if(open.style.display == "none") {
			open.style.display = "block";
			open.style.animation = "fadeIntoBlock 1s";
			window.saveNum = clickNum; // Return the Number of the Div needed to save.
		} else {
			if(saveNum == clickNum) {
				ClickTimes();
			} else {
				saveNum = clickNum;
				open.style.animation = "openNewDiv 1s";
				setTimeout(function () {
					open.style.display = "none";
				},1000);
				setTimeout(function () {
					open.style.display = "block";
					open.style.animation = "fadeIntoBlock 1s";
				},1000);
			}
		}
	} else {
		var linksLocation = GetMoreLinksUrl(clickNum);
		if(linksLocation == null) {
			window.alert('错误：找不到目标自定义链接地址！');
			return;
		}
		window.open(linksLocation, '_blank');
	}
}

function CloseMoreLinks() {
	var DivObject = document.getElementById('OpenOtherLinksDiv');
	var Inputer1Status = document.getElementById('NameInputer');
	var Inputer2Status = document.getElementById('LinksUrl');;
	if(Inputer1Status.value != '') {
		Inputer1Status.value = '';
	}
	if(Inputer2Status.value != '') {
		Inputer2Status.value = '';
	}
	DivObject.style.display = "none";
}

function SaveMoreLinks() {
	var linkPosition = null;
	var NameInput = document.getElementById('NameInputer');
	var UrlInput = document.getElementById('LinksUrl');
	var LinksName = NameInput.value;
	var LinksUrl = UrlInput.value;
	switch(saveNum) {
		case '1':
			linkPosition = "Links1";
			break;
		case '2':
			linkPosition = "Links2";
			break;
		case '3':
			linkPosition = "Links3";
			break;
		case '4':
			linkPosition = "Links4";
			break;
		case '5':
			linkPosition = "Links5";
			break;
		case '6':
			linkPosition = "Links6";
			break;
		case '7':
			linkPosition = "Links7";
			break;
		default:
			window.alert("错误：通过非正常方式保存链接！");
			return;
	}
	var linksTime = MakeCookiesTime();
	var linksInfo = linkPosition + "Name=" + LinksName + ";expires=" + linksTime + ";path=/;samesite=strict";
	var linksU = linkPosition + "Url=" + LinksUrl + ";expires=" + linksTime + ";path=/;samesite=strict";
	document.cookie = linksInfo;
	document.cookie = linksU;
	CloseMoreLinks();
	GetMoreLinksName();
}

function GetMoreLinksName() {
	var Cookies = document.cookie;
	var linksNum = 0;
	for(var checkLinksTime = 1; checkLinksTime <= 7; checkLinksTime++) {
		linksNum = checkLinksTime;
		var checkLinksName = 'Links' + linksNum + 'Name';
		var nameResult = CheckCookies(checkLinksName, Cookies);
		if(nameResult != null) {
			WriteMoreLinks(nameResult, linksNum);
		}
	}
}

function RemoveMoreLinksName() {
	var linksNum = 0;
	var checkSpan = '';
	for(var checkLinksTime = 1; checkLinksTime < 7; checkLinksTime++) {
		linksNum = checkLinksTime;
		var checkLinksName = 'links' + linksNum + 'Name';
		var nameResult = CheckCookies(checkLinksName, document.cookie);
		if(nameResult == null) {
			switch(linksNum) {
				case 1:
					checkSpan = 'LinkI';
					break;
				case 2:
					checkSpan = 'LinkII';
					break;
				case 3:
					checkSpan = 'LinkIII';
					break;
				case 4:
					checkSpan = 'LinkIV';
					break;
				case 5:
					checkSpan = 'LinkV';
					break;
				case 6:
					checkSpan = 'LinkVI';
					break;
				case 7:
					checkSpan = 'LinkVII';
					break;
				default:
					window.alert("错误：未知的链接名称！");
			}
			document.getElementById(checkSpan).innerHTML = '';
		}
	}
}

function GetMoreLinksUrl(searchNum) {
	var SearchLinksUrlName = "Links" + searchNum + "Url";
	var urlResult = CheckCookies(SearchLinksUrlName, document.cookie);
	return urlResult;
}

function WriteMoreLinks(linkName, linkSpan) {
	var linksSpan = '';
	switch(linkSpan) {
		case 1:
			linksSpan = 'LinkI';
			break;
		case 2:
			linksSpan = 'LinkII';
			break;
		case 3:
			linksSpan = 'LinkIII';
			break;
		case 4:
			linksSpan = 'LinkIV';
			break;
		case 5:
			linksSpan = 'LinkV';
			break;
		case 6:
			linksSpan = 'LinkVI';
			break;
		case 7:
			linksSpan = 'LinkVII';
			break;
		default:
			window.alert('错误：自定义链接无法获取！');
			return;
	}
	var LinksObject = document.getElementById(linksSpan);
	LinksObject.innerHTML = linkName;
}

function CheckLinksExist(checkedName) {
	var spanName = '';
	switch(checkedName) {
		case '1':
			spanName = "LinkI";
			break;
		case '2':
			spanName = "LinkII";
			break;
		case '3':
			spanName = "LinkIII";
			break;
		case '4':
			spanName = "LinkIV";
			break;
		case '5':
			spanName = "LinkV";
			break;
		case '6':
			spanName = "LinkVI";
			break;
		case '7':
			spanName = "LinkVII";
			break;
	}
	var checkObject = document.getElementById(spanName);
	var CResult = checkObject.innerHTML;
	if(CResult == '') {
		return false;
	} else {
		return true;
	}
}

function RemoveMoreLinks(RClickNum) {
	if(!RClickNum) {
		window.alert("错误：通过非正常方式删除链接！");
		return;
	}
	var CheckRemove = CheckLinksExist(RClickNum);
	if(CheckRemove == true) {
		if(confirm("您真的要删除此链接吗？")) {
			var removeLinkName = "Links" + RClickNum + "Name";
			var removeLinkUrl = "Links" + RClickNum + "Url";
			RemoveCookies(removeLinkName);
			RemoveCookies(removeLinkUrl);
			RemoveMoreLinksName();
		}
	}
}
/*
function ClickTimes() {
	clicks = clicks + 1;
	if(clicks == 100) {
		window.alert("你已经点击了这个按钮100次啦！");
	} else if(clicks == 50) {
		window.alert("你还要点吗？你都已经点击50次了！");
	}
}
*/

/*
function SetTouchStart(touchedNum) {
	timeOut = setTimeout(LongPress(touchedNum), 550);
	return false;
}

function LongPress(linksNum) {
	var linksName = '';
	var cookieNameResult = '';
	var cookieUrlResult = '';
	timeOut = 0;
	switch(linksNum) {
		case '1':
			linksName = 'LinkI';
			break;
		case '2':
			linksName = 'LinkII';
			break;
		case '3':
			linksName = 'LinkIII';
			break;
		case '4':
			linksName = 'LinkIV';
			break;
		case '5':
			linksName = 'LinkV';
			break;
		case '6':
			linksName = 'LinkVI';
			break;
		case '7':
			linksName = 'LinkVII';
			break;
		default:
			window.alert('错误：未知的链接名！');
			return;
	}
	cookieNameResult = CheckCookies(linksName + 'Name', document.cookie);
	cookieUrlResult = CheckCookies(linksName + 'Url', document.cookie);
	if(cookieNameResult == null) {
		if(cookieUrlResult == null) {
			window.alert('错误：无法找到相应的来链接！');
			return;
		} else {
			window.alert('错误：由cookies数据被删除导致无法查找到对应链接！');
			return;
		}
	} else {
		document.getElementById('NameInputer').value = cookieNameResult;
		document.getElementById('LinksUrl').value = cookieUrlResult;
		document.getElementById('OpenOtherLinksDiv').style.display = 'block';
	}
}

function SetTouchEnd(clickNum) {
	clearTimeout(timeOut);
	if(timeOut != 0) {
		OpenMoreLinks(clickNum);
		timeOut = 0;
	}
	return false;
}

function SetTouchMove() {
	clearTimeout(timeOut);
	timeOut = 0;
}
*/
