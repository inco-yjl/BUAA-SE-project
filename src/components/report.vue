<template>
   <div>
 <el-button type="text" @click="dialogFormVisible = true">发起举报</el-button>

 <el-dialog title="举报" :visible.sync="dialogFormVisible">
 <el-form :model="form">
   <el-form-item label="举报类型" :label-width="formLabelWidth">
     <el-select v-model="form.region" placeholder="请选择举报类型">
       <el-option label="内容勘误" value="shanghai"></el-option>
       <el-option label="内容违规" value="beijing"></el-option>
     </el-select>
   </el-form-item>
   <el-form-item label="举报内容" :label-width="formLabelWidth">
     <el-input v-model="form.date1" autocomplete="off" type="textarea" :rows = "3" style="font-family: 思源雅黑,sans-serif; font-size: 16px"></el-input>
   </el-form-item>
 </el-form>
 <div slot="footer" class="dialog-footer">
   <el-button @click="dialogFormVisible = false">取 消</el-button>
   <el-button type="primary" @click="open">确 定</el-button>
 </div>
 </el-dialog>
   </div>
 </template>
 <script>
 export default {
   data() {
     return {
       dialogTableVisible: false,
       dialogFormVisible: false,
       form: {
         name: '',
         region: '',
         date1: '',
         date2: '',
         delivery: false,
         type: [],
         resource: '',
         desc: ''
       },
       formLabelWidth: '120px'
     };
   },
   methods: {
     open() {
       if(this.form.date1.length < 15) {
         this.$message({
           type: 'info',
           message: '举报内容至少15字'
         });
         return;
       }
       this.$prompt('举报标题', '发起举报', {
         confirmButtonText: '确定',
         cancelButtonText: '取消',
         inputPattern: /^[\u4e00-\u9fa5\S]{0,15}$/,
         inputErrorMessage: '标题过长'
       }).then(({ value }) => {
         this.$message({
           type: 'success',
           message: '举报成功，感谢您对维护美好环境做出的贡献'
         });
         this.dialogFormVisible = false;
         this.form.date1 = '';
         this.form.region = '';
       }).catch(() => {
         this.$message({
           type: 'info',
           message: '取消输入'
         });
       });
     },
   }
 };
 </script> 