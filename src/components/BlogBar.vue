<template>
<div class="blogWrapper">
  <div class="hidding">
    <h1>Блог</h1>
  </div>
  <div class="listedBlogElemWrapper">
    <img src="@/assets/image/arrow-back.png" alt="" class="arrow" v-on:click="carouselMoveBack">
    <div class="container">
      <div 
        class="blog-entries"
        v-for="item in blogEntries"
        :key="item.id"
        :style="{ transform: valueOfTransformPropertyOfBlogEntries }"
      >
        <img :src="require(`@/assets/image/${item.img}`)" alt="">
        <h4>{{ item.text }}</h4>
        <h5>Читати більше</h5>
      </div>
    </div>
    <img src="@/assets/image/arrow-forward.png" alt="" class="arrow" v-on:click="carouselMoveForward">
  </div>
</div>
</template>

<script>
export default {
  name: 'BlogBar',
  data() {
    return {
      valueOfCarouselXCord: '0',
      contOfMoveCarousel: 0,
      blogEntries: [
        {
          id: 1,
          img: 'rectangle-21-e1655277619305.jpg',
          text: 'Уряд затвердив єдину та уніфіковану форму, що фіксуватиме збитки, завдані житлу українців російськими військами.',
        },
        {
          id: 2,
          img: 'rectangle-21-e1655277619305.jpg',
          text: 'Уряд затвердив єдину та уніфіковану форму, що фіксуватиме збитки, завдані житлу українців російськими військами.',
        },
        {
          id: 3,
          img: 'rectangle-21-e1655277619305.jpg',
          text: 'Уряд затвердив єдину та уніфіковану форму, що фіксуватиме збитки, завдані житлу українців російськими військами.',
        },
        {
          id: 4,
          img: 'rectangle-21-e1655277619305.jpg',
          text: 'Уряд затвердив єдину та уніфіковану форму, що фіксуватиме збитки, завдані житлу українців російськими військами.',
        },
        {
          id: 5,
          img: 'rectangle-21-e1655277619305.jpg',
          text: 'Уряд затвердив єдину та уніфіковану форму, що фіксуватиме збитки, завдані житлу українців російськими військами.',
        },
        {
          id: 6,
          img: 'rectangle-21-e1655277619305.jpg',
          text: 'Уряд затвердив єдину та уніфіковану форму, що фіксуватиме збитки, завдані житлу українців російськими військами.',
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

        img{
          max-width:100%;
          height:auto;
          transition: 0.5s;
        }
        h5{
          transition: 0.5s;
        }
        h4{
          transition: 0.5s;
        }
      }
      .blog-entries:hover img {
        transform: scale(1.2);
      }
      .blog-entries:hover h4{
        text-decoration: underline;
      }
      .blog-entries:hover h5{
        margin-left: 5px;
      }
    }
  }
}

</style>
