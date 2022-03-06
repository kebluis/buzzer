<template>
  <div class="dashboard-container">
    <create-buzz-component></create-buzz-component>
    <div v-if="buzzes">
      <div v-for="buzz of buzzes" :key="buzz.id">
        <buzz-component v-bind="buzz" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import BuzzComponent from "@/components/BuzzComponent.vue";
import CreateBuzzComponent from "@/components/CreateBuzzComponent.vue";
import { useStore } from "vuex";

export default defineComponent({
  components: { BuzzComponent, CreateBuzzComponent },
  setup() {
    const store = useStore();
    const buzzes = computed(() => store.state.buzzes);
    return {
      buzzes,
    };
  },
});
</script>

<style lang="less" scoped>
.dashboard-container {
  text-align: center;
  margin: 0 20%;
}
</style>
