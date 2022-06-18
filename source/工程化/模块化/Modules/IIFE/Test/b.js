var module2 = (function(module1){
  var _count2,_count3
　var m22 = function(){
    _count2 = module1._count
    _count3 = module1.count2
    console.log('module2 _count 引入module1 的私有属性',_count2);
    console.log('module2 _count 引入module1 的公开属性',_count3);
  };
　return {
    m22 : m22,
　};
})(module1);