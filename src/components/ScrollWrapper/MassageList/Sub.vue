<template>
  <div class="massage-item">
    <router-link 
      :to="{
        path: '/detail',
        query:{
          field: 'massage',
          id: data.id  
        },
      }"
    >
      <div class="img">
        <img class="massage-img" :src="data.img" alt="data.name" />
      </div>
      <div class="info">
        <h1 class="title">{{ data.name }}</h1>
        <p class="star">
          <stars :starNum="data.star"></stars>
          <span class="score">{{ data.score }}分</span>
        </p>
        <p class="others">
          <span class="price">${{ data.default_price}}元</span>
          <span class="city">{{ data.city_name }}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>

import Stars from '../Sub/Stars';

export default {
  name: 'MassageListSub',
  props: {
    data: Object
  },
  components: {
    Stars
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles/variable.scss';
  @import 'styles/mixins.scss';

  .massage-item {
    position: relative;
    width: 100%;
    border-bottom: solid 1px #ddd;
    background-color: #fff;

    .img {
      width: 1.2rem;
      height: 1.2rem;
      padding: .1rem;
      box-sizing: border-box;

      .massage-img {
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
        font-size: .2rem;
        line-height: .25rem;
        color: #333;
      }

      .star {
        font-size: .16rem;
        line-height: .5rem;

        .score {
          color: $starColor;
        }
      }

      .others {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        line-height: .3rem;

        .price {
          font-size: .2rem;
          color: $defaultGreen;
        }

        .city {
          font-size: .16rem;
        }

      

      }
    
    }
  }
</style>