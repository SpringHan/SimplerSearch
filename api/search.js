function SearchCheck(Searchs) {
	var reg = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0~9-~]+)\.)(.*)/;
	var regII = /bdfy:(.*)/;
	var regIII = /bd:(.*)/;
	var regIV = /bing:(.*)/;
	var regV = /google:(.*)/;
	if(reg.test(Searchs)) {
		window.open(Searchs, '_blank');
	} else if(regII.test(Searchs)) {
		var SearchC = regII.exec(Searchs)[1];
		var SearchContent = "https://fanyi.baidu.com/#en/zh/" + SearchC;
		window.open(SearchContent, '_blank');
	} else if(regIII.test(Searchs)) {
		var SearchC = regIII.exec(Searchs)[1];
		var SearchContent = "https://www.baidu.com/s?wd=" + SearchC;
		window.open(SearchContent, '_blank');
	} else if(regIV.test(Searchs)) {
		var SearchC = regIV.exec(Searchs)[1];
		var SearchContent = "https://cn.bing.com/search?q=" + SearchC;
		window.open(SearchContent, '_blank');
	} else if(regV.test(Searchs)) {
		var SearchC = regV.exec(Searchs)[1];
		var SearchContent = "https://google.com/search?hl=zh_CN&q=" + SearchC;
		window.open(SearchContent, '_blank');
	} else {
		var SearchContent = FindSearchWay(Searchs);
		if(SearchContent == null) {
			alert("搜索引擎出错了哦！");
		} else {
			window.open(SearchContent,'_blank');
		}
	}
}
function SearchWayChooseFirst() {
	var SearchFirst = CheckCookies('SearchWay', document.cookie);
	if(SearchFirst == null) {
		document.getElementById('BaiduSearch').style.backgroundColor = 'rgba(255, 255, 255, .7)';
	} else if(SearchFirst == 'baidu') {
		document.getElementById('BaiduSearch').style.backgroundColor = 'rgba(255, 255, 255, .7)';
	} else if(SearchFirst == 'bing') {
		document.getElementById('BingSearch').style.backgroundColor = 'rgba(255, 255, 255, .7)';
	} else if(SearchFirst == 'google') {
		document.getElementById('GoogleSearch').style.backgroundColor = 'rgba(255, 255, 255, .7)';
	}
}
function FindSearchWay(SearchsC) {
	var SearchWayI = document.getElementById('BaiduSearch');
	var SearchWayII = document.getElementById('BingSearch');
	var SearchWayIII = document.getElementById('GoogleSearch');
	if(SearchWayI.style.backgroundColor == 'rgba(255, 255, 255, 0.7)') {
		var SearchContent = "https://www.baidu.com/s?wd=" + SearchsC;
		return SearchContent;
	} else if(SearchWayII.style.backgroundColor == 'rgba(255, 255, 255, 0.7)') {
		var SearchContent = "https://cn.bing.com/search?q=" + SearchsC;
		return SearchContent;
	} else if(SearchWayIII.style.backgroundColor == 'rgba(255, 255, 255, 0.7)') {
		var SearchContent = "https://google.com/search?hl=zh_CN&q=" + SearchsC;
		return SearchContent;
	} else {
		return null;
	}
}
function ChangeSearchWay(searchWayNum) {
	var SearchWayI = document.getElementById('BaiduSearch');
	var SearchWayII = document.getElementById('BingSearch');
	var SearchWayIII = document.getElementById('GoogleSearch');
	var searchCookie = "";
	var searchTime = "";
	if(searchWayNum == '1') {
		if(SearchWayI.style.backgroundColor == 'rgba(255, 255, 255, 0.7)') {
		} else {
			SearchWayI.style.backgroundColor = 'rgba(255, 255, 255, .7)';
			SearchWayII.style.backgroundColor = 'rgba(255, 255, 255, .3)';
			SearchWayIII.style.backgroundColor = 'rgba(255, 255, 255, .3)';
			searchTime = MakeCookiesTime();
			searchCookie = "SearchWay=baidu;" + "expires=" + searchTime + ";path=/;samesite=strict";
			document.cookie = searchCookie;
		}
	} else if(searchWayNum == '2') {
		if(SearchWayII.style.backgroundColor == 'rgba(255, 255, 255, 0.7)') {
		} else {
			SearchWayI.style.backgroundColor = 'rgba(255, 255, 255, .3)';
			SearchWayII.style.backgroundColor = 'rgba(255, 255, 255, .7)';
			SearchWayIII.style.backgroundColor = 'rgba(255, 255, 255, .3)';
			searchTime = MakeCookiesTime();
			searchCookie = "SearchWay=bing;" + "expires=" + searchTime + ";path=/;samesite=strict";
			document.cookie = searchCookie;
		}
	} else if(searchWayNum == '3') {
		if(SearchWayIII.style.backgroundColor == 'rgba(255, 255, 255, 0.7)') {
		} else {
			SearchWayI.style.backgroundColor = 'rgba(255, 255, 255, .3)';
			SearchWayII.style.backgroundColor = 'rgba(255, 255, 255, .3)';
			SearchWayIII.style.backgroundColor = 'rgba(255, 255, 255, .7)';
			searchTime = MakeCookiesTime();
			searchCookie = "SearchWay=google;" + "expires=" + searchTime + ";path=/;samesite=strict";
			document.cookie = searchCookie;
		}
	}
}
function CheckInputer() {
	var InputerContent = document.getElementById('SearchInputer').value;
	if(InputerContent == 'SW') {
		document.getElementById('SearchWay').style.animation = 'fadeIntoBlock 1s';	
		document.getElementById('SearchWay').style.display = 'block';	
	} else if(InputerContent == 'Schbd') {
		var Baidu = document.getElementById('BaiduSearch');
		var Bing = document.getElementById('BingSearch');
		var Google = document.getElementById('GoogleSearch');
		if(Baidu.style.backgroundColor == 'rgba(255, 255, 255, 0.7)') {
		} else {
			Baidu.style.backgroundColor = 'rgba(255, 255, 255, .7)';
			Bing.style.backgroundColor = 'rgba(255, 255, 255, .3)';
			Google.style.backgroundColor = 'rgba(255, 255, 255, .3)';
			searchTime = MakeCookiesTime();
			searchCookie = "SearchWay=baidu;" + "expires=" + searchTime + ";path=/;samesite=strict";
			document.cookie = searchCookie;
			document.getElementById('SearchInputer').value = null;
		}
	} else if(InputerContent == 'Schbing') {
		var Baidu = document.getElementById('BaiduSearch');
		var Bing = document.getElementById('BingSearch');
		var Google = document.getElementById('GoogleSearch');
		if(Bing.style.backgroundColor == 'rgba(255, 255, 255, 0.7)') {
		} else {
			Baidu.style.backgroundColor = 'rgba(255, 255, 255, .3)';
			Bing.style.backgroundColor = 'rgba(255, 255, 255, .7)';
			Google.style.backgroundColor = 'rgba(255, 255, 255, .3)';
			searchTime = MakeCookiesTime();
			searchCookie = "SearchWay=bing;" + "expires=" + searchTime + ";path=/;samesite=strict";
			document.cookie = searchCookie;
			document.getElementById('SearchInputer').value = null;
		}
	} else if(InputerContent == 'Schgoogle') {
		var Baidu = document.getElementById('BaiduSearch');
		var Bing = document.getElementById('BingSearch');
		var Google = document.getElementById('GoogleSearch');
		if(Google.style.backgroundColor == 'rgba(255, 255, 255, 0.7)') {
		} else {
			Baidu.style.backgroundColor = 'rgba(255, 255, 255, .3)';
			Bing.style.backgroundColor = 'rgba(255, 255, 255, .3)';
			Google.style.backgroundColor = 'rgba(255, 255, 255, .7)';
			searchTime = MakeCookiesTime();
			searchCookie = "SearchWay=google;" + "expires=" + searchTime + ";path=/;samesite=strict";
			document.cookie = searchCookie;
			document.getElementById('SearchInputer').value = null;
		}
	} else {
		if(document.getElementById('SearchWay').style.display == 'block') {
			document.getElementById('SearchWay').style.animation = 'openNewDiv 1s';
			setTimeout(function () {
				document.getElementById('SearchWay').style.display = 'none';
			}, 1000);
		}
	}
}
function KeepFocus() {
	var CheckInputer = document.getElementById('SearchInputer');
	if(CheckInputer.value == '') {
		document.getElementById('hitokoto').style.display = 'none';
		document.getElementById('HappyNewYear').style.display = 'block';
	} else {
		CheckInputer.focus();
	}
}
