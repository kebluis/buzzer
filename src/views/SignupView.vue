<template>
  <div class="signup-container">
    <div class="signup-container-wrapper">
      <h1>
        BU
        <img src="../assets/thunder.png" alt="buzzer" width="30" class="logo" />
        ER
      </h1>
      <form @submit.prevent="registerUserHandler">
        <label for="uname">Register Username:</label>
        <input
          type="text"
          :value="registerUser.username"
          @input="registerUser.username = $event.target.value"
          name="uname"
        />
        <br />
        <label for="pword">Password:</label>
        <input
          type="password"
          :value="registerUser.password"
          @input="registerUser.password = $event.target.value"
          name="pword"
        />
        <label for="pword">Retype Password:</label>
        <input
          type="password"
          :value="registerUser.retypePassword"
          @input="registerUser.retypePassword = $event.target.value"
          name="retypePword"
        />
        <br />
        <button @click="routeToLogin">Cancel</button>
        <input type="submit" value="Sign Up!" />
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import { useStore } from "vuex";
import { MutationType } from "@/store/mutations";
import router from "@/router";

export default defineComponent({
  setup() {
    const store = useStore();
    const registerUser = reactive({
      username: "",
      password: "",
      retypePassword: "",
    });

    const registerUserHandler = () => {
      const accounts = computed(() => store.state.accounts);
      const existingUsernames = computed(() =>
        accounts.value.map((acc: any) => acc.username)
      );
      if (registerUser.password !== registerUser.retypePassword) {
        alert("Password didn't match");
      } else if (existingUsernames.value.includes(registerUser.username)) {
        alert("Username already taken!");
      } else {
        const payload = {
          accountId: `user${accounts.value.length + 1}`,
          username: registerUser.username,
          password: registerUser.password,
        };
        store.commit(MutationType.AddAccount, payload);
        alert("Account created!");
        routeToLogin();
      }
    };
    const routeToLogin = () => {
      router.push("/");
    };
    return { registerUser, registerUserHandler, routeToLogin };
  },
});
</script>

<style scoped lang="less">
.signup-container {
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
