<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="c-content-mask">
        <h1>Confirm delete record {{ user?.name }}</h1>
        <div class="c-btn-ced">
          <button @click="$emit('close')">Cancel</button>
          <button @click="$emit('delete')">Delete</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
defineProps({
  show: Boolean,
  // eslint-disable-next-line vue/require-default-prop
  user: Object,
});
defineEmits(["close", "delete"]);
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.c-content-mask {
  margin: auto;
  width: 500px;
  background-color: #fff;
  position: relative;
  padding: 10px 30px;

  h1 {
    margin: 0;
  }

  .c-btn-ced {
    display: flex;
    justify-content: flex-end;
    gap: 30px;
    margin-top: 30px;
  }
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>