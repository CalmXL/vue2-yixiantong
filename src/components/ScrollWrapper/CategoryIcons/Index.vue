<template>
  <div class="icons-wrapper">
    <category-icons-sub
      v-for="item of itemList"
      :key="item.id"
      :bgColor="item.bgColor"
      :icon="item.icon"
      :field="item.field"
      :iconText="item.iconText"
    ></category-icons-sub>
  </div>
</template>

<script>

import CategoryIconsSub from './Sub.vue';
import fieldDatas from 'data/fields';

export default {
  name: 'CategoryIcons',
  components: {
    CategoryIconsSub
  },
  data () {
    return {
      itemList: fieldDatas
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles/mixins.scss';
  @import 'styles/variable.scss';

  .icons-wrapper {
    @include flex-row;
    flex-wrap: wrap;
    background-color: #fff;
    border-bottom: solid 1px #ddd;
  }


</style>