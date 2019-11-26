<template>
  <div class="dialog" @click="handelCancel">
    <div class="dialog-container" @click.stop="">
      <div class="dialog-container__title">{{title}}</div>
      <div class="dialog-container__content">{{content}}</div>
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
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    content: { type: String, default: '' },
    cancelText: { type: String, default: '取消' },
    confirmText: { type: String, default: '确认' },
    onCancel: { type: Function, default: null },
    onConfirm: { type: Function, default: null },
  },
  methods: {
    handelCancel() {
      this.onCancel && this.onCancel()
    },
    handleConfirm() {
      this.onConfirm && this.onConfirm()
    }
  }
}
</script>

<style>
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
  width: 400px;
  border-radius: 10px;
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
}
.dialog-container__btn.confirm {
  background: #589ef8;
  border-radius: 6px;
  color: #ffffff;
}
.dialog-container__btn.cancel {
  color: red;
}
</style>