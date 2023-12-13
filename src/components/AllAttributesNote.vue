<template>
  <div class="all-attributes-note">
  <h3>All Attributes Note</h3>
    <label for="font-size">Font Size</label>
    <input type="number" name="font-size" id="font-size" min="5" max="40" v-model="newNode.size">
    <label for="highlight">Highlight</label>
    <button name="highlight">Highlight</button>
    <div id="highlightedText" v-on:mouseup="applyHighlightStyle" class="editor" v-bind:style="{'font-size': newNode.size + 'px'}" contenteditable>
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
  },
  methods: {
    applyHighlightStyle() {
      const highlightedText = window.getSelection().toString();
      const textElement = document.getElementById("highlightedText");

      if (highlightedText !== "") {
        const textContent = textElement.innerHTML;
        const highlightedContent = `<span class="highlighted">${highlightedText}</span>`;
        const newTextContent = textContent.replace(highlightedText, highlightedContent);
        textElement.innerHTML = newTextContent;
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
.highlighted {
  background-color: yellow;
}
</style>