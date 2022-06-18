var module1 = (function(){
　var _count = 0;
　var count2 = 0;
　var m1 = function(){
    _count++
    count2++
  };
　var m2 = function(){
    _count++
　};
  return {
    m1 : m1,
    m2 : m2,
    count2: count2
  };
})();