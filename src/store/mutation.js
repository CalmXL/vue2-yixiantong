// 包含n个可以直接更新数据方法的模块
// mutation 必须是同步函数
export default {
  selectCity (state, cityInfo) {
    state.cityName = cityInfo.cityName;
    state.cityId = cityInfo.cityId;

    try {
      localStorage.cityInfo = JSON.stringify(state);
    } catch (error) {
      
    }
  },

  selectField (state, field) {
    state.field = field;

    try {
      localStorage.cityInfo = JSON.stringify(state);
    } catch (error) {
      
    }
  }
}