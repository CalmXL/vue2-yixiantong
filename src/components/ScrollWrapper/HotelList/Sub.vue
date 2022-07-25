<template>
  <div class="hotel-item">
    <router-link
      :to="{
        path:'./detail',
        query: { 
          field: 'hotel',
          id: data.id  
        },
        
      }"
    >
      <div class="img">
        <img class="hotel-img" :src="data.img" :alt="data.name">
      </div>
      <div class="info">
        <h1 class="title">{{ data.name }}</h1>
        <p class="star">
          <stars :starNum="Number(data.star)"></stars>
          <span class="score">{{ data.score }}分</span>
        </p>
        <p class="area"> {{ data.area }}</p>
        <p class="others">
          <span class="price">${{ data.default_price }}起</span>
          <span class="city">{{ data.city_name }}</span>
        </p>
      </div>

    </router-link>
  </div>
</template>

<script>

import Stars from '../Sub/Stars.vue';

export default {
  name: 'HotelListSub',
  props: {
    data: Object
  },
  components: {
    Stars
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles/mixins.scss';
  @import 'styles/variable.scss';

  .hotel-item {
    position: relative;
    width: 100%;
    border-bottom: solid 1px #ddd;
    background-color: #fff;

    .img {
      width: 1.2rem;
      height: 1.2rem;
      padding: .1rem;
      box-sizing: border-box;

      .hotel-img {
        width: 100%;
        height: 100%; 
      }
    }

    .info {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      padding: .1rem .1rem 0 1.2rem; 
      box-sizing: border-box;

      .title {
        @include ellipsis;
        font-size: .18rem;
        color: #000;
        line-height: .2rem;
      }

      .star{
        
        .score {
          color: $starColor;
          font-size: .16rem;
          line-height: .2rem;
        }
      }

      .area {
        color: #bbb;
        font-size: .16rem;
        line-height: .3rem;
        white-space: nowrap;
        overflow: hidden;
      }

      .others {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .price {
          font-size: .2rem;
          line-height: .3rem;
          color: $defaultGreen;
        }

        .city{
          color: #333;
          font-size: .16rem;
          line-height: .3rem;
        }
      }
    }
  }
</style>