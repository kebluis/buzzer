<template>
  <div class="logout" @click="logoutUser">Logout</div>
  <div class="dashboard-container">
    <create-buzz-component />
    <div v-if="buzzes">
      <div v-for="buzz of buzzes" :key="buzz.id">
        <buzz-component v-bind="buzz" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from "vue";
import BuzzComponent from "@/components/BuzzComponent.vue";
import CreateBuzzComponent from "@/components/CreateBuzzComponent.vue";
import { useStore } from "vuex";
import { MutationType } from "@/store/mutations";
import router from "@/router";

export default defineComponent({
  components: { BuzzComponent, CreateBuzzComponent },
  setup() {
    onMounted(() => {
      const userInfo = computed(() => store.state.userInfo);
      if (userInfo.value.username === "" && userInfo.value.password === "") {
        router.push("/");
      }
    });
    const store = useStore();
    const buzzes = computed(() => store.state.buzzes);
    const logoutUser = () => {
      store.commit(MutationType.RecordUser, {
        accountId: "",
        username: "",
        password: "",
      });
      router.push("/");
    };
    return {
      buzzes,
      logoutUser,
    };
  },
});
</script>

<style lang="less" scoped>
.dashboard-container {
  text-align: center;
  margin: 0 20%;
}
.logout {
  text-align: right;
  margin: 1rem;
  cursor: pointer;
}
</style>
