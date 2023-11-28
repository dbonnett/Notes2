<template>
  <div class="main-calendar">
    <div class="heading">
      <div class="day">S</div>
      <div class="day">M</div>
      <div class="day">Tu</div>
      <div class="day">W</div>
      <div class="day">Th</div>
      <div class="day">F</div>
      <div class="day">S</div>
    </div>
    <div class="spaces">
      <div class="space"></div>
      <div class="space"></div>
      <div class="space"></div>
      <div class="space"></div>
      <div class="space"></div>
      <div class="space"></div>
      <div class="space"></div>
    </div>
    <button>Make a note</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .main-calendar {
    display: flex;
    flex-direction: column;
  }

  .heading {
    display: flex;
    flex-direction: row;
    width: 100%
  }

  .day {
    background-color: rgb(144, 224, 197);
    margin: 15px;
    margin-bottom: 0px;
    width: 100%;
  }
  
  .spaces {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 200px;
  }

  .space {
    background-color: rgb(240, 248, 245);
    margin: 15px;
    margin-top: 0px;
    width: 100%;
  }

  button {
    width: 150px;
  }
</style>