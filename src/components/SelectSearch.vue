<template>
<div id="selection_search">
  <div class="break"></div>
    <div class="selection">
     <span >
  <button class="selection_un" onclick="this.className=this.className=='selection_un'?'selection_ed':'selection_un'">书籍</button>/
  <button class="selection_un" onclick="this.className=this.className=='selection_un'?'selection_ed':'selection_un'">电影</button>/
  <button class="selection_un" onclick="this.className=this.className=='selection_un'?'selection_ed':'selection_un'">电视剧</button>/
  <button class="selection_un" onclick="this.className=this.className=='selection_un'?'selection_ed':'selection_un'">小组</button>/
  <button class="selection_un" onclick="this.className=this.className=='selection_un'?'selection_ed':'selection_un'">话题</button>
      </span>                 
  </div>
 <div style="padding:5px;"  class="search_box">
                        <el-row :gutter="10">
                            <el-col :span="14">
                                <el-input style="width:80%;" v-model="input"  placeholder="请输入搜索的关键字"><template slot="append"><el-button type="primary" plain @click=""><img id="search_button" src="@/assets/guide/search.png"></el-button></template></el-input>
                            </el-col>
                            
                        </el-row>
                    </div>
</div>
</template>
<style scoped>
#selection_search{
  margin-top:0vh;
}
#search_button{
  height:15px;
}
div.selection {
  text-align: left;
  padding-left: 7vw;
}

button.selection_un {
  background: white;
  outline:none;
  color: rgb(120, 118, 118);
  font-size: 20px;
  border: none;
  transition: opacity 0.2s;
}


button.selection_ed{
  background: white;
  outline: none;
  font-size: 20px;
  border: none;
  color:black;
  font-weight: bold;
}
.break{
  height:10vh;
  margin: 0,0,0,0;
}

</style>