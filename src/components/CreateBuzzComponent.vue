<template>
  <div class="create-wrapper">
    <textarea
      rows="2"
      placeholder="What's the buzz?"
      :value="buzzQuote"
      @input="changeQuote"
    />
    <button @click="buzzHandler">SEND!</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useStore } from "@/store";
import { MutationType } from "@/store/mutations";

export default defineComponent({
  setup() {
    const store = useStore();
    const buzzes = computed(() => store.state.buzzes);
    const userInfo = computed(() => store.state.userInfo);
    const buzzQuote = ref("");
    const changeQuote = (e: any) => (buzzQuote.value = e.target.value);
    const buzzHandler = () => {
      console.log(buzzQuote);
      store.commit(MutationType.AddBuzz, {
        buzzId: `buzz${buzzes.value.length + 1}`,
        username: userInfo.value.username,
        date: new Date().toUTCString(),
        content: buzzQuote.value,
      });
      buzzQuote.value = "";
    };
    return { buzzQuote, changeQuote, buzzHandler };
  },
});
</script>

<style lang="less" scoped>
textarea {
  width: 95%;
}
button {
  margin: 0.5rem;
}
</style>
