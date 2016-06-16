define(function(require, exports, module) {
	var myfunc = require('./function');
	var main = require('./main');
	// var main = require('main');//不加一个“./”的话，会从seajs.config的base目录下去搜索
	var m = new main(); //一个main的实例

	exports.niubi = function() {		
		alert("it is here!!");
	}

	m.render();
	myfunc.say();
	myfunc.set('haven been set to new name');
	// myfunc.set(); //不带参数的话，就成undefine了
	myfunc.say();
});