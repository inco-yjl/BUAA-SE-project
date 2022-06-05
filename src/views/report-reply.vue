<template>
  <div class = "body">
    <div class = "body-box">
      <div class = "title">
        <h2>举报审理</h2>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  name: "report-reply",
  data() {
    var message = [
      {
        reporterimg: "../assert/user/int.jpg",
        reporterid: "owo",
        reporttitle: "os上机永不取消",
        reportmes: "啊很奇怪，很奇怪啊，咱就是说，os选周四真是诀绝子，一整个大无语住了家人们，放假这么多次，居然一次上机都没被放假弄没，气得我跺脚脚，要玉玉了",
        reportermes:"os下周四考5.2",
        flag: 0,
      }
        
    ]
  }
}
</script>

<style scoped>
.body {
  width: 1000px;
  position: absolute;
}
.body-box {
  width: 800px;
  position: relative;
  float: left;
  left: 100px;
  margin-top: 50px;
}
.vertical {
  padding-top: 20px;
  padding-left: 40px;
  padding-right: 35px;
  margin-top: 20px;
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  box-shadow: 0px 2px 3px #888888a6;
}
.title{
  position: relative;
  float: left;
  width: 800px;
  text-align: left;
}
</style>