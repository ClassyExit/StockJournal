<template>
  <teleport to="body">
    <div
      ref="modal-backdrop"
      class="fixed z-10 inset-0 overflow-y-auto"
      v-show="modalActive"
    >
      <div class="flex items-center justify-center min-h-screen text-center">
        <div
          class="bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl w-1/2"
          role="dialog"
          ref="modal"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <slot class=""></slot>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  props: {
    modalActive: { type: Boolean },
  },

  setup() {
    const hideModal = () => {
      modalActive = false;
    };

    return { hideModal };
  },
};
</script>

<style></style>
