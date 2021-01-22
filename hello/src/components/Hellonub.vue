<template>
  <div class="hellonub-wrapper">
    <h2 class="title-header">Support by:</h2>
    <div class="item-hellonub">
    <img class="logo" alt="Node.js" src="../assets/nodejs-seeklogo.com.svg">
    </div>
    <div class="item-hellonub">
    <img class="logo" alt="vscode" src="../assets/visual-studio-code-seeklogo.com.svg">
    </div>
    <div class="item-hellonub">
    <img class="logo" alt="npm" src="../assets/npm-seeklogo.com.svg">
    </div>
    <div class="item-hellonub">
    <img class="logo" alt="git" src="../assets/git-seeklogo.com.svg">
    </div>
  </div>
</template>

<script>
export default {
  name: "Hellonub",
};
</script>

<style scoped>
.title-header {
  margin-bottom: 80px;
  color: aliceblue;
}
.hellonub-wrapper {
  width: 70%;
  overflow: hidden;
  margin: auto;
  /* background: rgba(26, 25, 25, 0.781); */
}

.item-hellonub {
  float: left;
  margin-right: 20px;
  margin-bottom: 20px;
  width: 150px;
  height: 150px;
}

.item-hellonub .logo {
  
  width: 150px;
  height: 150px;
}
</style>