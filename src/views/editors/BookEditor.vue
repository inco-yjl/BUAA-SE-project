<template>
  <!--2.这里id对应new Vditor('vditor',{...})的第一个参数vidtor-->
  <div id="editor">
      <vditor></vditor>
  </div>
</template>
<style scoped>

</style>
<script>
import vditor from "@/components/Editor.vue";
export default {
  name: "editor",
  components: {
    vditor
  },}
</script>