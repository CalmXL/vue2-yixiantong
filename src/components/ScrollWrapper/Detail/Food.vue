<template>
  <div class="detail-wrapper">
    <detail-name :name="name"></detail-name>
    <detail-stars :starNum="starNum" :score="score"></detail-stars>
    <detail-address :address="address"></detail-address>
    <detail-price :price="price"></detail-price>
    <detail-date-time :dateTime="dateTime"></detail-date-time>
    <detail-recom :recom="recom"></detail-recom>
  </div>
</template>

<script>

import DetailName from './Sub/Name';
import DetailStars from './Sub/Stars.vue';
import DetailAddress from './Sub/Address.vue';
import DetailPrice from './Sub/Price.vue';
import DetailDateTime from './Sub/DateTime.vue';
import DetailRecom from './Sub/Recom.vue';

export default {
  name: 'DetailFood',
  components: {
    DetailName,
    DetailStars,
    DetailAddress,
    DetailPrice,
    DetailDateTime,
    DetailRecom
  },
  props: {
    name: String,
    starNum: Number,
    score: String,
    address: String,
    price: String,
    dateTime: String,
    recom: String
  }
}
</script>

<style lang="scss" scoped>
  
</style>