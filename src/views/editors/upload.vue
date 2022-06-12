<template>
  <div id="editor"></div>
</template>
<script>
import Editor from "wangeditor";
export default {
  data() {
    return {
      editor: "",
    };
  },
  mounted() {
    this.initEditor();
  },
  methods: {
    updateTopic(){
      if(!this.hasTopic)
        return;
      this.allTopics = [];
      var params = {
        search_id: '21',
        search_content: this.content
      }
      this.$axios
        .post("/search/topic_search", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            this.topicText = "";
            console.log('topic')
            console.log(res.data);
            this.topicNum = res.data.data.length;
            this.allTopics = res.data.data;
            var i=0;
            for(i=0;i<this.topicNum ;i++) {
              var text = this.ToText(this.allTopics[i].intro);
              if(text.length>170)
                text=text.substring(0,170)+'…';
              this.allTopics[i].intro = text;
            }
            this.changeSearchTopic(1);
          } else {
            this.topicText=res.data.msg;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
#style{
    
}
</style>