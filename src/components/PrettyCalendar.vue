<template>
  <div class="pretty-calendar">
    <h1>Pretty Calendar</h1>
    <div class="body">
      <div class="row" id="1">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
      </div>
      <div class="row" id="2">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
      </div>
      <div class="row" id="3">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
      </div>
      <div class="row" id="4">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
      </div>
      <div class="row" id="5">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
      </div>
      <div class="row" id="6">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.body {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 500px;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 100%;
}

span {
  background-color: rgb(240, 252, 248);
  width: 100%;
  height: 100%;
  text-align: center;
  border-style: solid;
  border-width: 1px
}

</style>