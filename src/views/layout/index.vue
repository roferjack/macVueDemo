<template>
  <div class="appContainer">
    <aside class="left">
      <LeftNavigation />
    </aside>
    <section class="main">
      <HeaderMessage />
      <AppMain />
    </section>
  </div>
</template>

<script>
import LeftNavigation from "./components/leftNavigation";
import HeaderMessage from "./components/headerMessage";
import AppMain from "./components/appMain";

export default {
  components: {
    LeftNavigation,
    HeaderMessage,
    AppMain,
  },
};
</script>

<style lang="scss" >
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}
.appContainer {
  width: 100%;
  height: 100%;
  display: flex;
  .left {
    max-width: 200px;
    height: 100%;
    background: #ccc;
    color: #fff;
  }
  .main {
    flex: 1;
    height: 100%;
  }
}
</style>