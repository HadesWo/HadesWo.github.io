let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	/* 	if (mySrc === 'images/tag.jpg') {
			myImage.setAttribute('src', 'images/tag2.jpg');
		} else {
			myImage.setAttribute('src', 'images/tag.jpg');
		} */



	switch (mySrc) {
		case 'images/tag1.jpg':
			myImage.setAttribute('src', 'images/tag2.jpg');
			break;
		case 'images/tag2.jpg':
			myImage.setAttribute('src', 'images/tag3.jpg');
			break;
		case 'images/tag3.jpg':
			myImage.setAttribute('src', 'images/tag4.jpg');
			break;
		case 'images/tag4.jpg':
			myImage.setAttribute('src', 'images/tag5.jpg');
			break;
		case 'images/tag5.jpg':
			myImage.setAttribute('src', 'images/tag1.jpg');
			break;
	}
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('请输入你的名字。');
	if (!myName || myName === null) {
		setUserName();
	} else {
		localStorage.setItem('name', myName);
		myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
	}
}

//初始化代码，页面初次读取时工作
if (!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

// 为按钮设置 onclick 事件处理器：
myButton.onclick = function() {
	setUserName();
};
