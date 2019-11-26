<template>
  <div class="hello">
    <div class="form-item">
      <span>弹窗标题</span>
      <input v-model="title"/>
    </div>
    <div class="form-item">
      <span>弹窗内容</span>
      <input v-model="content"/>
    </div>
    <div class="form-item">
      <span>取消文案</span>
      <input v-model="cancelText"/>
    </div>
    <div class="form-item">
      <span>确认文案</span>
      <input v-model="confirmText"/>
    </div>

    <button @click="isShowModal=true">点击打开Dialog</button>

    <v-dialog
      v-if="isShowModal"
      :title="title"
      :content="content"
      :cancelText="cancelText"
      :confirmText="confirmText"
      :on-cancel="handelCancel"></v-dialog>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      isShowModal: false,
      title: '弹窗标题',
      content: '弹窗内容',
      cancelText: '取消',
      confirmText: '确认',
    }
  },
  methods: {
    handelCancel() {
      this.isShowModal = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
