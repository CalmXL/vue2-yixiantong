export default {
  formatJSON (array, key) {
    
    return array.filter((item) => {
      if (item[key]) {
        item[key] = item[key].split(',');
      }

      return item;
    })
  },

  jsonToArr (str) {
    return JSON.parse(str);
  },
  
  strToArr (str) {
    return str.split(',');
  },

  replaceToSpace (str) {
    return str.replace(/,/g, ' ');
  },

  trimSpace (str) {
    return str.replace(/\s+/g, '');
  },

  // 节流函数封装
  throttle (fn, delay) {
    var t = null, 
        begin = new Date().getTime();
    
    return function () {
      var _self = this,
          arg = arguments,
          cur = new Date().getTime();

      clearTimeout(t);

      if (cur - begin >= delay) {
        fn.call(_self, arg);
        begin = cur;
      } else {
        t = setTimeout(() => {
          fn.call(_self, arg);
        }, delay);
      }
      
    }
  }


}