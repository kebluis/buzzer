<template>
  <div class="buzz-wrapper">
    <div class="buzz-content buzz-profile">
      <img src="@/assets/man.png" alt="avatar" width="50" height="50" />
      <h3 class="name-separator">{{ username }}</h3>
      <h3>{{ new Date(date).toLocaleString() }}</h3>
    </div>
    <div class="buzz-content">
      <p>
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    buzzId: {
      required: true,
      type: String,
    },
    username: {
      required: true,
      type: String,
    },
    date: {
      required: true,
      type: String,
    },
    content: {
      required: true,
      type: String,
    },
  },
  // setup(props) {
  //   return {};
  // },
});
</script>

<style lang="less" scoped>
.buzz {
  &-wrapper {
    border: solid 4px;
    border-radius: 15px;
    padding: 1rem;
    margin: 1rem;
  }
  &-profile {
    background: #8b8b8b;
    border-radius: 15px;
    padding: 0.5rem 1rem;
  }
  &-content {
    display: flex;
    .name-separator {
      margin: 0 auto 0 1rem;
      place-self: center;
    }
  }
}
</style>
