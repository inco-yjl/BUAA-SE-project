<template>
  <div>
    <div v-for="item in list">
      <div class="cm-p-02 cm-bottom">
        <div class="cm-fs-030">
          <span class="cm-c-red" v-if="item.require">*</span>
          <span :class="[focusText==item.field?'edit-focus-text':'',!item.require?'cm-ml-02':'']">{{item.title}}</span>
        </div>
        <el-input
            v-if="item.renderType==='number'"
            @focus="changeStyle(item)"
            type="text"
            @input.native="changeNumber"
            :placeholder="item.placeholder"
            class="edit-input cm-w-full cm-fs-028 cm-c-333"
            v-model="result[item.field]"></el-input>
        <el-input
            :type="item.renderType"
            v-else
            @focus="changeStyle(item)"
            :autosize="{ minRows: 2, maxRows: 4}"
            :maxlength="item.maxLength"
            class="edit-input cm-w-full cm-fs-028 cm-c-333"
            :placeholder="item.placeholder"
            rows="2"
            v-model="result[item.field]">
        </el-input>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ElContent",
  data(){
    return{
      focusText:""
    }
  },
  props:{
    list:{
      type: Array,
      default: function () {
        return [];
      }
    },
    result:{
      type:Object,
      default:{}
    },
  },
  mounted(){
    setTimeout(() => {
      autoTextarea();
    }, 100);
  },
  methods:{
    changeNumber({target}){
      target.value=(target.value.match(/^\d*(\.?\d{0,1})/g)[0]) || null
    },
    changeStyle(item){
      this.focusText = item.field;
    }
  }
}

export function autoTextarea(){
  var textarea = document.getElementsByTagName("textarea");
  for(var i=0;i<textarea.length;i++){
    textarea[i].style.height = 'auto';
    textarea[i].scrollTop = 0; //防抖动
    textarea[i].style.height = textarea[i].scrollHeight + 'px';
    textarea[i].addEventListener('input',function (e) {
      console.log(e.target.scrollHeight);
      e.target.style.height = 'auto';
      e.target.scrollTop = 0;
      if(e.target.scrollHeight>=100){
        //控制最高4行
        e.target.style.height = 100 + 'px';
      }else {
        e.target.style.height = e.target.scrollHeight + 'px';
      }
      //}
    })
  }
}
</script>

<style scoped>
.edit-focus-text{
  color: #3296FA;
  font-size: 0.22rem;
}
</style>