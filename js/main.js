try {
	jQuery(document).ready(function() {
		// ver data = new Date();
		var img = ['../images/background/1.jpg',
			'../images/background/2.jpeg',
			'../images/background/3.jpeg',
			'../images/background/5.jpeg',
			'../images/background/6.jpeg',
			'../images/background/8.jpg',
			'../images/background/11.jpeg',
			'../images/background/15.jpeg',
		]

		moment.locale("zh-cn");
		$("#time").html(moment(new Date()).format('HH:mm:ss'));
		$("#time1").html(moment(new Date()).format('YYYY-MM-DD dddd'));
		$("#app").height(window.innerHeight);
		var icount = Math.floor(Math.random() * 8);
		//随机背景图
		$(".s-skin-container").css('background', 'url(' + img[icount] + ') no-repeat');

		$("#scream").attr('src', img[icount])
		//每秒刷新时间
		setInterval(function() {
			$("#time1").html(moment(new Date()).format('YYYY-MM-DD dddd'));
			$("#time").html(moment(new Date()).format('HH:mm:ss'))
		}, "1000");


		var c = document.getElementById("myCanvas");
		var ctx = c.getContext("2d");
		var img = document.getElementById("scream");

		img.onload = function() {
			ctx.drawImage(img, 10, 10);
			var imgdatas = ctx.getImageData(700, 760, 10, 10)
			// console.log(data)
			var imgdata = imgdatas.data; //获取rgba数据
			var i = 0,
				len = imgdata.length;
			var arr = [];
			//将图片rgba数据push到新数组中
			for (i; i < len; i += 4) {
				arr.push(imgdata[i] + ',' + imgdata[i + 1] + ',' + imgdata[i + 2] + ',' + imgdata[i + 3]);
			}
			// console.log(arr)
			var rs = [];
			var aa = new Map();
			for (var i = 0; i < arr.length; i++) {
				var tag_name = arr[i];
				console.log(tag_name)
				if (tag_name != '0,0,0,0') {
					if (aa.get(tag_name) == undefined) {
						aa.set(tag_name, 1)
					} else {
						aa.set(tag_name, aa.get(tag_name) + 1)
					}
				}


			}
			// console.log(aa)
			var k = 1;
			// var n = "";
			aa.forEach(function(key) {

				if (k < key) {
					k = key;
				}
			})
			// console.log(k)
			aa.forEach(function(e, key) {
				// console.log(e)
				if (e == k) {
					// n = key;
					// console.log(key)
					// $("#ssssss").
					$("#main").css('background-color', 'rgb(' + key + ')');
				}
			})


		}

	});
} catch (e) {
	//TODO handle the exception
}
