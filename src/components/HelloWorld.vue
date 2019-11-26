<template>
  <div class="hello">
    <button class="btn" @click="openNormalModal">普通弹窗</button>
    <button class="btn" @click="openHiglightModal">高亮弹窗内容</button>
    <button class="btn" @click="openNoTitleModal">自定义标题样式</button>
    <button class="btn" @click="openStopCancelModal">拦截取消操作</button>
    <button class="btn" @click="openNoCancelModal">隐藏取消按钮</button>


    <v-dialog
      :visible.sync="isShowModal"
      :title="title"
      :content="content"
      :cancelText="cancelText"
      :confirmText="confirmText"
      :on-cancel="handelCancel"
      :on-confirm="handleConfirm">
      <em
        class="custom-title"
        slot="title"
        v-if="isCustomTitle">自定义标题内容槽</em>
    </v-dialog>
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
      title: '',
      content: '',
      cancelText: '',
      confirmText: '',
      isCustomTitle: false,
      isStopCancel: false,
    }
  },
  methods: {
    handelCancel() {
      if (this.isStopCancel) {
        this.cancelText = '再次点击取消'
        this.isStopCancel = false
        return
      }
      this.isShowModal = false
      this.isCustomTitle = false
    },
    handleConfirm() {
      this.isShowModal = false
      this.isCustomTitle = false
    },
    openNormalModal() {
      this.title = '这是一个标题'
      this.content = '这是一块内容'
      this.cancelText = '取消'
      this.confirmText = '确认'
      this.isShowModal = true
    },
    openHiglightModal() {
      this.title = '这是一个标题'
      this.content = '这是一块<span style="color:red;margin: 0 4px;">高亮</span>的内容'
      this.cancelText = '取消'
      this.confirmText = '确认'
      this.isShowModal = true
    },
    openNoTitleModal() {
      this.content = '这是一块<span style="color:red;margin: 0 4px;">高亮</span>的内容'
      this.cancelText = '取消'
      this.confirmText = '确认'
      this.isCustomTitle = true
      this.isShowModal = true
    },
    openStopCancelModal() {
      this.content = '这是一块<span style="color:red;margin: 0 4px;">高亮</span>的内容'
      this.cancelText = '取消'
      this.confirmText = '确认'
      this.isStopCancel = true
      this.isShowModal = true
    },
    openNoCancelModal() {
      this.cancelText = ''
      this.confirmText = '知道了'
      this.title = ''
      this.content = '这是一条通知消息'
      this.isShowModal = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.custom-title {
  font-weight: bold;
  font-size: 22px;
}
.btn {
  display: block;
  margin: 10px auto;
  min-width: 100px;
  cursor: pointer;
  height: 30px;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
}
.btn:hover {
  color: #409eff;
}
</style>
