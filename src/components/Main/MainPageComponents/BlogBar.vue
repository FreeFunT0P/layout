<template>
<div class="blogWrapper">
  <div class="hidding">
    <h1>Блог</h1>
  </div>
  <div class="listedBlogElemWrapper" v-if="$route.name !== 'blog'">
    <img src="@/assets/image/arrow-back.png" alt="" class="arrow" v-on:click="carouselMoveBack">
    <div class="container">
      <div 
        class="blog-entries"
        v-for="item in blogEntries"
        :key="item.id"
        :style="{ transform: valueOfTransformPropertyOfBlogEntries }"
        @click="goto(item.id, item.title)"
      >
        <img :src="require(`@/assets/image/${item.img}`)" alt="" class="blog-image">
        <h4 class="blog-h4">{{ item.title }}</h4>
        <h5 class="blog-h5">Читати більше</h5>
      </div>
    </div>
    <img src="@/assets/image/arrow-forward.png" alt="" class="arrow" v-on:click="carouselMoveForward">
  </div>
  <div v-else class="blog-entries-wrapper-without-carousel">
    <div
        class="blog-entries-without-carousel"
        v-for="item in blogEntries"
        :key="item.id"
        @click="goto(item.id, item.title)"
    >
      <img :src="require(`@/assets/image/${item.img}`)" alt="" class="blog-image-without-carousel">
      <h4 class="blog-h4-without-carousel">{{ item.title }}</h4>
      <h5 class="blog-h5-without-carousel">Читати більше</h5>
    </div>
  </div>
</div>
</template>

<script>
import router from "@/routes/router";

export default {
  name: 'BlogBar',
  data() {
    return {
      valueOfCarouselXCord: '0',
      contOfMoveCarousel: 0,
      blogEntries: [
        {
          id: 'entry1',
          img: 'rectangle-21-e1655277619305.jpg',
          text: '',
          title: 'Уряд затвердив єдину та уніфіковану форму, що фіксуватиме збитки, завдані житлу українців російськими військами.',
        },
        {
          id: 'entry2',
          img: 'rectangle-21-e1655277619305.jpg',
          text: '',
          title: 'Уряд затвердив єдину та уніфіковану форму, що фіксуватиме збитки, завдані житлу українців російськими військами.',
        },
        {
          id: 'entry3',
          img: 'rectangle-21-e1655277619305.jpg',
          text: '',
          title: 'Уряд затвердив єдину та уніфіковану форму, що фіксуватиме збитки, завдані житлу українців російськими військами.',
        },
        {
          id: 'entry4',
          img: 'rectangle-21-e1655277619305.jpg',
          text: '',
          title: 'Уряд затвердив єдину та уніфіковану форму, що фіксуватиме збитки, завдані житлу українців російськими військами.',
        },
        {
          id: 'entry5',
          img: 'rectangle-21-e1655277619305.jpg',
          text: '',
          title: 'Уряд затвердив єдину та уніфіковану форму, що фіксуватиме збитки, завдані житлу українців російськими військами.',
        },
        {
          id: 'entry6',
          img: 'rectangle-21-e1655277619305.jpg',
          text: '',
          title: 'Уряд затвердив єдину та уніфіковану форму, що фіксуватиме збитки, завдані житлу українців російськими військами.',
        },
      ]
    }
  },
  methods: {
    carouselMoveBack(){
      this.valueOfCarouselXCord = +this.valueOfCarouselXCord - 450
      if(this.contOfMoveCarousel !== 0) this.contOfMoveCarousel--
    },
    carouselMoveForward(){
      if(this.contOfMoveCarousel < this.blogEntries.length-1){
        this.valueOfCarouselXCord = +this.valueOfCarouselXCord + 450
        this.contOfMoveCarousel++
      } else {
        this.contOfMoveCarousel = 0
        this.valueOfCarouselXCord = '0'
      }
    },
    goto(name, val) {
      //state: { val: val } передает нагрузку в history.state. Это плохой подход, при передаче ссылки на другой комп теряется нагрузка.
      // params: { val: val } передает в this.$router.currentRoute.params но при условии что парамс засунуты в путь.
      // Таким образом нужно в пути передавать идентификатор а в компоненте по идентификатору дергать нагрузку из хранилища
      router.push({name: 'OneBlogEntries', params:{name: name}, state: { val: val }})
    }
  },
  computed: {
    valueOfTransformPropertyOfBlogEntries() {
      return 'translateX(-' + this.valueOfCarouselXCord + 'px)'
    }
  }
}
</script>

<style lang='scss'>
.blogWrapper{
  background-color: white;
  width: 90%;
  margin: auto;
  max-width: 1050px;
  min-width: 700px;
  padding: 1%;

  .hidding{

    h1{
      position: relative;
      padding-left: 25px;
      font-weight: 300;
    }
    h1:before{
      content: '';
      width: 5px;
      height: 38px;
      background-color: #052651;
      border-radius: 10px;
      position: absolute;
      left: 0;
      top: calc(50% - 19px);
      z-index: 1;
    }
  }

  .listedBlogElemWrapper{
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;

    .arrow{
      height: 60px;
      width: 50px;
      transition: 0.5s;
    }
    .arrow:hover{
      cursor: pointer;
      transform: scale(1.2);
    }

    .container{
      width: 90%;
      height: 100%;
      white-space:nowrap;
      overflow: hidden;

      .blog-entries{
        display:inline-block;
        width: 400px;
        height: 380px;
        margin: 20px 0 20px 49px;
        white-space: normal;
        cursor: pointer;
        overflow: hidden;
        transition: 1s;

        .blog-image{
          max-width:100%;
          height:auto;
          transition: 0.5s;
        }
        .blog-h5{
          transition: 0.5s;
        }
        .blog-h4{
          transition: 0.5s;
        }
      }
      .blog-entries:hover .blog-image {
        transform: scale(1.2);
      }
      .blog-entries:hover .blog-h4{
        text-decoration: underline;
      }
      .blog-entries:hover .blog-h5{
        margin-left: 5px;
      }
    }
  }
  .blog-entries-wrapper-without-carousel{
    width: 100%;

    .blog-entries-without-carousel{
      display:inline-block;
      width: 400px;
      height: 380px;
      margin: 20px 0 20px 49px;
      white-space: normal;
      cursor: pointer;
      overflow: hidden;
      transition: 1s;

      .blog-image-without-carousel{
        max-width:100%;
        height:auto;
        transition: 0.5s;
      }
      .blog-h5-without-carousel{
        transition: 0.5s;
      }
      .blog-h4-without-carousel{
        transition: 0.5s;
      }
    }
    .blog-entries-without-carousel:hover .blog-image-without-carousel {
      transform: scale(1.2);
    }
    .blog-entries-without-carousel:hover .blog-h4-without-carousel{
      text-decoration: underline;
    }
    .blog-entries-without-carousel:hover .blog-h5-without-carousel{
      margin-left: 5px;
    }
  }
}

</style>
