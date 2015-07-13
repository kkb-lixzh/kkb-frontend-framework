String.prototype.trim1 = function() {
	return this;
}
/**
 * Created by lixzh on 15/6/17.
 */

/**
 * 实现原型链继承
 * @param  {function} superClass 要被继承的父类
 * @param  {function} subClass	需要继承的子类
 * @return {void}
 */
function extend(superClass, subClass) {
	var F = function() {};
	F.prototype = superClass.prototype;
	//var subPrototype=subClass.prototype;
	subClass.prototype = new F();
	subClass.prototype.constructor = subClass;
	subClass.prototype.super = superClass.prototype;
	if (superClass.prototype.constructor == Object.prototype.constructor) {
		superClass.prototype.constructor = superClass;
	}
} 