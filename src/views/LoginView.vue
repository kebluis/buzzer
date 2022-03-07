<template>
  <div class="login-container">
    <div class="login-container-wrapper">
      <h1>
        BU
        <img src="../assets/thunder.png" alt="buzzer" width="30" class="logo" />
        ER
      </h1>
      <form @submit.prevent="loginUser">
        <label for="uname">Username:</label>
        <input
          type="text"
          :value="formInput.username"
          @input="formInput.username = $event.target.value"
          name="uname"
        />
        <br />
        <label for="pword">Password:</label>
        <input
          type="password"
          :value="formInput.password"
          @input="formInput.password = $event.target.value"
          name="pword"
        />
        <br />
        <input type="submit" value="Login" />
        <hr />
        <em @click="routeToSignUp">Sign up</em> temporarily.
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { reactive } from "@vue/reactivity";
import { useStore } from "vuex";
import router from "@/router";
import { MutationType } from "@/store/mutations";

export default defineComponent({
  name: "LoginView",
  setup() {
    const store = useStore();
    const formInput = reactive({
      username: "",
      password: "",
    });
    const loginUser = () => {
      const validUser = computed(() =>
        store.getters.validAccount(formInput.username, formInput.password)
      );
      console.log(validUser);
      if (validUser?.value) {
        store.commit(MutationType.RecordUser, {
          accountId: validUser.value.accountId,
          username: validUser.value.username,
          password: validUser.value.password,
        });
        router.push({ name: "dashboard" });
      } else {
        alert("no such user!");
      }
    };
    const routeToSignUp = () => {
      router.push("/signup");
    };

    return {
      formInput,
      loginUser,
      routeToSignUp,
    };
  },
});
</script>

<style scoped lang="less">
.login-container {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  h1 {
    font-family: "Hubballi", cursive;
  }
  form {
    line-height: 2rem;
  }
  .logo {
    margin: 0 -19px -6px;
  }
  &-wrapper {
    margin: 0 30rem;
    border: 4px solid;
    border-radius: 15px;
    padding: 3rem;
  }
  em {
    cursor: pointer;
    color: blue;
  }
}
</style>
