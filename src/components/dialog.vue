<!--
  弹窗组件
  @params title {String} 弹窗标题，可通过名字为title的slot替换
  @params content {String} 弹窗内容，支持html字符串，可通过名字为content的slot替换
  @params cancelText {String} 取消按钮文案
  @params confirmText {String} 确认按钮文案
  @params onCancel {Function} 点击取消按钮的执行函数
  @params onConfirm {Function} 点击确认按钮的执行函数
  @params visible {Boolean} 控制弹窗是否显示
-->
<template>
  <transition name="modal-fade" v-if="visible">
    <div class="dialog" @click.self="handelCancel">
      <div class="dialog-container">
        <!-- 标题 slot -->
        <slot name="title">
          <div class="dialog-container__title">{{title}}</div>
        </slot>

        <!-- 内容 slot -->
        <slot name="content">
          <div class="dialog-container__content" v-html="content"/>
        </slot>

        <!-- 按钮 slot -->
        <slot name="footer">
          <div class="dialog-container__btns">
            <div
              v-if="cancelText"
              class="dialog-container__btn cancel"
              @click="handelCancel">{{cancelText}}</div>
            <div
              v-if="confirmText"
              class="dialog-container__btn confirm"
              @click="handleConfirm">{{confirmText}}</div>
          </div>
        </slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    visible: { type: Boolean, default: false },
    title: { type: String, default: '弹窗标题' },
    content: { type: String, default: '内容' },
    cancelText: { type: String, default: '取消' },
    confirmText: { type: String, default: '确认' },
    onCancel: { type: Function, default: null },
    onConfirm: { type: Function, default: null },
  },
  methods: {
    handelCancel() {
      if (this.onCancel) {
        this.onCancel()
      }
    },
    handleConfirm() {
      if (this.onConfirm) {
        this.onConfirm()
      }
    }
  }
}
</script>

<style>
.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity ease-out .2s;
}

.modal-fade-enter, .modal-fade-leave-to {
  opacity: 0;
}
.dialog {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.dialog-container {
  min-width: 300px;
  max-width: 400px;
  max-height: 80%;
  overflow-y: auto;
  border-radius: 6px;
  background: #ffffff;
  padding: 16px;
  box-sizing: border-box;
}
.dialog-container__title {
  font-size: 20px;
  font-weight: bold;
}
.dialog-container__content {
  font-size: 16px;
  margin-top: 8px;
}
.dialog-container__btns {
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dialog-container__btn {
  margin: 0 16px;
  width: 100px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  cursor: pointer;
  border-radius: 6px;
  box-sizing: border-box;
}
.dialog-container__btn.confirm {
  background: #589ef8;
  color: #ffffff;
}
.dialog-container__btn.cancel {
  color: #FF6188;
  border: 1px solid #FF6188;
}
</style>