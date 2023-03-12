<template>
  <div class="reviewWrapper">
      <h1>Відгуки клієнтів</h1>
    <div class="reviewsWrapper">
      <div class="review">
        <h3>Жданов Андрій</h3>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod.
        </h4>
        <h4>
          11.03.2023
        </h4>
      </div>
      <div class="review">
        <h3>Савісько Володимир</h3>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod.
        </h4>
        <h4>
          21.10.2022
        </h4>
      </div>
      <div class="review">
        <h3>Зайцева Марія</h3>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod.
        </h4>
        <h4>
          15.01.2022
        </h4>
      </div>
    </div>
    <div class="reviewsButtonWrapper">
      <el-button class="button2">Більше відгуків</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewsBar'
}
</script>

<style lang='scss'>
.reviewWrapper{
  background-color: #f5f5f5;
  width: 90%;
  margin: auto;
  max-width: 1050px;
  min-width: 700px;
  padding: 1%;

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

  .reviewsWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    .review {
      max-width: 300px;
      min-width: 150px;
      height: 400px;
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.40);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      color: black;
      margin: 10px;

      h4{
        margin: 20px;
      }
    }
  }

  .reviewsButtonWrapper {
    display: block;
    text-align: center;
  }

}

</style>