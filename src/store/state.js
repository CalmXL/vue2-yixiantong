/**
 * 驱动应用的数据源, 用于保存所有组件的公共数据.
 * 用来储存 n个状态数据的模块
 */ 

let cityInfo = {
  cityId: '0',
  cityName: '全部',
  field: 'all'
}

try {
  if (localStorage.cityInfo) {
    cityInfo = JSON.parse(localStorage.cityInfo);
  }
} catch (e) {

}

export default cityInfo;