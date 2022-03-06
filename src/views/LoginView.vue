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
        <input type="submit" />
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { reactive } from "@vue/reactivity";

export default defineComponent({
  name: "LoginView",
  setup() {
    const formInput = reactive({
      username: "",
      password: "",
    });
    const loginUser = () => {
      console.log("we're here");
      console.log(formInput.username);
      console.log(formInput.password);
    };

    return {
      formInput,
      loginUser,
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
}
</style>
