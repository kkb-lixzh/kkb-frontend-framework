/**
 * Created by lixzh on 15/6/17.
 */

///用于子类继承父类
///@superClass:父类
///@subClass:子类
function extend(superClass,subClass){
    var F=function(){};
    F.prototype=superClass.prototype;
    //var subPrototype=subClass.prototype;
    subClass.prototype= new F();
    subClass.prototype.constructor=subClass;
    subClass.prototype.super=superClass.prototype;

    if(superClass.prototype.constructor==Object.prototype.constructor){
        superClass.prototype.constructor=superClass;
    }
}