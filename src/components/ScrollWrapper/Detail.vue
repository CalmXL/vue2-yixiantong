<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div v-if="!errorShow">
      <div class="scroll-content">
        <detail-swiper :picDatas="detailData.pics"></detail-swiper>
        <detail-food 
          v-if="field === 'food'"
          :name="detailData.name"
          :starNum="Number(detailData.star)"
          :score="detailData.score"
          :address="detailData.address"
          :price="detailData.default_price"
          :dateTime="detailData.open_datetime"
          :recom="detailData.recom"
        ></detail-food>
        <detail-hotel
          v-else-if="field === 'hotel'"
          :name="detailData.name"
          :starNum="Number(detailData.star)"
          :score="detailData.score"
          :address="detailData.address"
          :price="detailData.default_price"
          :service="detailData.service"
        ></detail-hotel>
        <detail-ktv
          v-else-if="field === 'ktv'"
          :name="detailData.name"
          :starNum="Number(detailData.star)"
          :score="detailData.score"
          :address="detailData.address"
          :price="detailData.default_price"
          :service="detailData.service"
        ></detail-ktv>
        <detail-massage
          v-else-if="field === 'massage'"
          :name="detailData.name"
          :starNum="Number(detailData.star)"
          :score="detailData.score"
          :address="detailData.address"
          :price="detailData.default_price"
          :service="detailData.service"
          :keywords="detailData.comment_keyword"
        ></detail-massage>
      </div>
    </div>
    <div v-else>
      <error :errorShow="errorShow"></error>
    </div>
  </div>
</template>

<script>

import BetterScroll from 'better-scroll';
import DetailSwiper from './Sub/Swiper.vue';
import DetailFood from './Detail/Food.vue';
import DetailHotel from './Detail/Hotel.vue';
import DetailKtv from './Detail/Ktv.vue'; 
import DetailMassage from  './Detail/Massage.vue';
import Error from './Sub/Error.vue';

import { DetailModel } from 'models/detail';
import tools from 'utils/tools';

export default {
  name: 'DetailScrollWrapper',
  components: {
    DetailSwiper,
    DetailFood,
    DetailHotel,
    DetailKtv,
    DetailMassage,
    Error
  },
  data () {
    return { 
      field: '',
      id: 0,
      detailData: {},
      errorShow: false
    }
  },
  mounted () {
    this.scroll = new BetterScroll(this.$refs.wrapper, {
      observeDOM: true
    });
    // console.log(this.$route);
    this.field = this.$route.query.field;
    this.id = this.$route.query.id;
    this.getDetail(this.field, this.id);
  },
  methods: {
    getDetail (field, id) {
      const detailModel = new DetailModel();

      detailModel.getDetail(field, id).then((res) => {
        console.log(res.status)
        if (res.status === 0) {
          this.errorShow = false;

          const data  = res.data;
          data.pics && (data.pics = tools.jsonToArr(data.pics));
          data.comment_keyword && (data.comment_keyword = tools.strToArr(data.comment_keyword));
          data.recom && (data.recom =  tools.replaceToSpace(data.recom));
          data.service && (data.service = tools.jsonToArr(data.service));

          this.detailData = data;
        } else {
          this.errorShow = true;
        }
    
        
      })
    }
  }
}
</script>

<style>

</style>