<template>
  <div class="all-attributes-note">
  <h3>All Attributes Note</h3>
    <input type="number" name="font-size" id="font-size" min="5" max="40">
    <div class="editor" contenteditable>
      <p class="para" style="{'font-size': newNode.size + 'px'}">{{ newNode.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newNode : {
        text: "",
        font: "",
        size: 30,
        isBullet: false,
        isCheckbox: false,
        isChecked: false,
        highlights: {
          anchors: [],
          focus: []
        },
        bolds: {
          anchors: [],
          focus: []
        },
        italics: {
          anchors: [],
          focus: []
        }
      }
    }
  }
}
</script>

<style>
.editor {
  background-color: white;
  width: 700px;
  height: 800px;
}
.para {
  font-size: 20;
}
</style>