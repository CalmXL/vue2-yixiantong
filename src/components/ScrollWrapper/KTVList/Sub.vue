<template>
  <div class="ktv-item">
    <router-link 
      :to="{
        path: '/detail',
        query:{
          field: 'ktv',
          id: data.id 
        },
      }"
    >
      <div class="img">
        <img class="ktv-img" :src="data.img" :alt="data.name" />
      </div>
      <div class="info">
        <h1 class="title">{{ data.name }}</h1>
        <p class="star">
          <stars :starNum="Number(data.star)"></stars>
          <span class="score">{{ data.score }} 分</span>
        </p>
        <p class="others">
          <span>
            $<span class="price"> {{ data.default_price }} </span>元起
          </span>
          <span class="city">{{ data.city_name }}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>

import Stars from '../Sub/Stars.vue';

export default {
  name: 'KtvListSub',
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

  .ktv-item {
    position: relative;
    width: 100%;
    border-bottom: solid 1px #ddd;
    background-color: #fff;

    .img {
      width: 1.2rem;
      height: 1.2rem;
      padding: .1rem;
      box-sizing: border-box;

      .ktv-img{
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
        line-height: .3rem;
      }

      .star {
        font-size: .16rem;
        line-height: .5rem;

        .score {
          color: $starColor;
        }
      }

      .others{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: .2rem;
        line-height: .2rem;
        
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