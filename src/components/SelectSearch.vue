<template>
<div id="selection_search">
  <div class="break"></div>
    <div class="selection">
     <span >
  <button class="selection_un" @click="updatebook()" onclick="this.className=this.className=='selection_un'?'selection_ed':'selection_un'">书籍</button>/
  <button class="selection_un" @click="updatemovie()" onclick="this.className=this.className=='selection_un'?'selection_ed':'selection_un'">电影</button>/
  <button class="selection_un" @click="updatetele()" onclick="this.className=this.className=='selection_un'?'selection_ed':'selection_un'">电视剧</button>/
  <button class="selection_un" @click="updategroup()" onclick="this.className=this.className=='selection_un'?'selection_ed':'selection_un'">小组</button>/
  <button class="selection_un" @click="updatetopic()" onclick="this.className=this.className=='selection_un'?'selection_ed':'selection_un'">话题</button>
      </span>                 
  </div>
 <div style="padding:5px;"  class="search_box">
                        <el-row :gutter="10">
                            <el-col :span="14">
                                <el-input v-model="input"  placeholder="请输入搜索的关键字"><template slot="append"><el-button type="primary" plain @click="search()"><img id="search_button" src="@/assets/guide/search.png"></el-button></template></el-input>
                            </el-col>
                            
                        </el-row>
                    </div>
</div>
</template>
<script>

export default({
  data(){
    return{
      input: null,
      book: false,
      movie: false,
      tele: false,
      group: false,
      topic: false
    }
  },
  methods:{
    search(){
      this.$router.push({
        name: "search",
        query: { 
          content: this.input,
          hasBook: this.book,
          hasMovie: this.movie,
          hasTele: this.tele,
          hasTopic: this.topic,
          hasGroup: this.group
         },
      });
    },
    updatebook() {
      this.book = !this.book;
    },
    updatemovie(){
      this.movie = !this.movie;
    },
    updategroup(){
      this.group = !this.group;
    },
    updatetele(){
      this.tele = !this.tele;
    },
    updatetopic(){
      this.topic = !this.topic;
    }
  }
})
</script>

<style scoped>
#selection_search{
  padding-top:30px;
  height:200px;
  margin-bottom: 10px;
}
#search_button{
  height:15px;
}
div.selection {
  text-align: left;
  padding-left: 20px;
}
.search_box{
  margin-left:0px;
  width:1000px;
}
button.selection_un {
  background: none;
  outline:none;
  color: rgb(96, 94, 94);
  font-size: 20px;
  border: none;
  transition: opacity 0.2s;
}


button.selection_ed{
  background: none;
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