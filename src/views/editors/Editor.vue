<template lang="html">
  <div class="editor">
    <div ref="toolbar" class="toolbar"> </div>
    <div ref="editor" class="text"></div>
    <p v-if="isShow" class="isShow" style="color:red;text-align: right;">编辑内容不能超过10个字</p>
    <span class="limitNum"><span id="spanId">{{ spanInfo }}</span>/10</span>
  </div>
</template>
<script>
import E from  '@wangeditor/editor-for-vue'
import { saveFile } from '@/api/DietaryDetails'// 后台上传文件接口
export default {
  name: 'Editoritem',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    // 是否禁用富文本输入状态
    isDisabled: {
      type: Boolean,
      default: true
    },
    index: {
      type: Number
      // required: true
    },
    value: {
      type: String,
      default: ''
    },
    isClear: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      editor: null,
      info_: null,
      spanInfo: 0,
      isShow: false,
      emojiList: ''
    }
  },
  watch: {
    isClear (val) {
      // 触发清除文本域内容
      if (val) {
        this.editor.txt.clear()
        this.info_ = null
      }
    },
    // value为编辑框输入的内容，这里我监听了一下值，当父组件调用得时候，如果给value赋值了，子组件将会显示父组件赋给的值
    value: function (value, e) {
      if (value !== this.editor.txt.html()) {
        // 获取纯文字 在获取img 相加就可以了
        var temp = this.value.replace(/<\/?.+?>/g, '')
        var result = temp.replace(/ /g, '')// result为获取冲文字得到后的内容
        // 获取img标签
        var re = /<img[^>]+>/g
        var ImgA = this.value.match(re)
        let imgLen
        if (ImgA) {
          imgLen = ImgA.length
        }
        if (!ImgA) {
          imgLen = 0
        }
        this.spanInfo = imgLen + result.length
        if (this.spanInfo > 10) {
          this.isShow = true
        } else {
          this.isShow = false
        }
        this.editor.txt.html(this.value)
      }
    }

  },
  mounted () {
    this.seteditor()
    // 获取纯文字 在获取img 相加就可以了
    var temp = this.value.replace(/<\/?.+?>/g, '')
    var result = temp.replace(/ /g, '')// result为获取冲文字得到后的内容
    // 获取img标签
    var re = /<img[^>]+>/g
    var ImgA = this.value.match(re)
    let imgLen
    if (ImgA) {
      imgLen = ImgA.length
    }
    if (!ImgA) {
      imgLen = 0
    }
    this.spanInfo = imgLen + result.length
    if (this.spanInfo > 10) {
      this.isShow = true
    } else {
      this.isShow = false
    }
    this.editor.txt.html(this.value)
  },
  methods: {
    // 上传文件到 minio
    async uploadFn (files, insert) {
      const file = new FormData()
      file.append('file', files[0])
      let res = await saveFile(file)
      if (res.code !== 200) return this.$message.error(res.msg)
      const { url } = res.data
      insert(url)
      // files 是 input 中选中的文件列表
      // insert 是获取图片 url 后，插入到编辑器的方法
      // 上传代码返回结果之后，将图片插入到编辑器中
      // insert(imgUrl)
    },
    // 系统设置编辑器
    seteditor () {
      this.editor = new E(this.$refs.toolbar, this.$refs.editor)
      this.editor.customConfig.emotions = [{ title: '默认', type: 'image', content: this.emojiList }]
      this.editor.customConfig.zIndex = 100
      this.editor.customConfig.uploadImgMaxLength = 1
      // 上传图片
      this.editor.customConfig.customUploadImg = (files, insert) => { this.uploadFn(files, insert) }
      // 上传视频
      this.editor.customConfig.customUploadVideo = (files, insert) => { this.uploadFn(files, insert) }
      this.editor.customConfig.uploadImgShowBase64 = false // base 64 存储图片
      this.editor.customConfig.uploadImgMaxSize = 2 * 1024 * 1024 // 将图片大小限制为 2M
      this.editor.customConfig.uploadImgMaxLength = 6 // 限制一次最多上传 3 张图片
      this.editor.customConfig.uploadImgTimeout = 3 * 60 * 1000 // 设置超时时间
      // this.editor.customConfig.uploadImgServer = 'http://otp.cdinfotech.top/file/upload_images'// 配置服务器端地址
      // this.editor.customConfig.uploadImgHeaders = { }// 自定义 header
      // this.editor.customConfig.uploadFileName = 'file' // 后端接受上传文件的参数名
      // 配置菜单
      this.editor.customConfig.menus = [
        'head', // 标题
        'bold', // 粗体
        // 'fontSize',  // 字号
        'fontName', // 字体
        'italic', // 斜体
        'underline', // 下划线
        'strikeThrough', // 删除线
        'foreColor', // 文字颜色
        // 'backColor',  // 背景颜色
        'link', // 插入链接
        'list', // 列表
        'justify', // 对齐方式
        'quote', // 引用
        // 'emoticon',  // 表情
        'image', // 插入图片
        'video', // 插入视频
        'table', // 表格
        'code', // 插入代码
        'undo', // 撤销
        'redo' // 重复
      ]
      this.editor.customConfig.onchange = (html) => {
        this.info_ = html // 绑定当前逐渐地值
        //  获取纯文字 在获取img 相加就可以了
        var temp = this.info_.replace(/<\/?.+?>/g, '')
        var result = temp.replace(/ /g, '') // result为获取冲文字得到后的内容
        // 获取img标签
        var re = /<img[^>]+>/g
        var ImgA = this.info_.match(re)
        let imgLen
        if (ImgA) {
          imgLen = ImgA.length
        }
        if (!ImgA) {
          imgLen = 0
        }
        this.spanInfo = imgLen + result.length
        // 去掉除img以外的所有标签；
        var regL = /<\/?(?!img)[a-z]+?[^>]*>/gi
        var z = this.info_.replace(regL, '')
        this.info_ = z

        if (this.spanInfo > 10) {
          this.isShow = true
        } else {
          this.isShow = false
        }
        // this.$emit('input', this.info_)// 将内容同步到父组件中-不会显示视频图片-因为图片标签都被去掉,可以精确计算字数
        this.$emit('input', html, this.spanInfo)// 将内容同步到父组件中 -会显示视频图片-无法精确计算字数给父组件,所以开始默认值为8个字符
      }
      // 创建富文本编辑器
      this.editor.create()
      this.editor.customConfig.debug = true
      this.editor.$textElem.attr('contenteditable', this.isDisabled) // 是否禁用
      // this.editor.$textElem.attr('contenteditable', false) // 禁用编辑功能
      // this.editor.$textElem.attr('contenteditable', true) // 开启编辑功能
      // this.editor.txt.html(this.value)
    },
    getEditorContent () {
      return this.editor.txt.html()
    },
    setEditorContent (val) {
      this.editor.txt.html(val)
    }
  }
}
</script>
<style lang="scss">
  .editor {
    width: 100%;
    margin: 0 auto;
    position: relative;
    border: 1px solid #ccc;
    .limitNum {
      position: absolute;
      right: 6px;
      bottom: -30px;
      color: #909399;
    }
    .isShow {
      position: absolute;
      right: 150px;
      bottom: -30px;
    }
    .toolbar {
      background-color: #f1f1f1;
      font-size: 16px;
      border-bottom: 1px solid #ccc;
    }
    .w-e-toolbar .w-e-menu {
      padding: 0 10px;
    }
    .text {
      z-index: auto !important;
      .w-e-panel-container {
        z-index: 99999999;
        left: -1px;
        width: 100% !important;
        margin-left: 0 !important;
      }
      .w-e-text {
        min-height: 450px;
        overflow-y: auto;
      }
    }
  }
</style>
