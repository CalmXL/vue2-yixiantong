<template>
  <div class="service-bd">
    <detail-title
      icon="icon-service"
      title="商家服务"
    ></detail-title>
    <div class="service-content">
      <p 
        v-for="(key,index) of Object.keys(service)"
        :key="index"
      >
        {{ serviceText[key]}}: {{ service[key] ? '有' : '无'}}
      </p>
    </div>
  </div>
</template>

<script>

import DetailTitle from './Title.vue';

export default {
  name: 'DetailService',
  data () {
    return {
      serviceText: {
        'parking': '停车场',
        'wifi': 'WIFI'
      }
    }
  },
  components: {
    DetailTitle
  },
  props: {
    service: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .service-bd {
    margin-top: .1rem;

    .service-content {
      font-size: .14rem;
      padding: .1rem .15rem;
      background-color: #fff;

      p{
        line-height: .18rem;
      }
    }
  }
</style>