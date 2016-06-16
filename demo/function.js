define(function(require, exports, module) {
	var $ = require("jquery"); //要引入jquery才能用$,需要其他库也像这样子引入
	var fullname = 'origin name';

	module.exports = {
		// var fullname = 'origin';  //一定不能定义在这里，要定义在上面
		
		say: function () {
			alert(fullname);
		},

		set:function(name) { //表演传参
			fullname = name;
		},

		get:function() { //表演jquery的使用
			var html = $("#container").html();
  			alert(html);
		}
	}
});