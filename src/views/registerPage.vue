<template>
  <form @submit.prevent="submit">
    <h1 class="h3 mb-3 fw-normal">Please Register</h1>
    <div class="form-floating">
      <input
        v-model="data.name"
        type="text"
        class="form-control"
        placeholder="Name"
        required
      />
      <label for="floatingInput">Name</label>
    </div>
    <div class="form-floating">
      <input
        v-model="data.email"
        type="email"
        class="form-control"
        placeholder="Email"
        required
      />
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input
        v-model="data.password"
        type="password"
        class="form-control"
        placeholder="Password"
        required
      />
      <label for="floatingPassword">Password</label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
  </form>
</template>

<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "registerPage",
  setup() {
    const data = reactive({
      name: '',
      email: '',
      password: '',
    });
    const router = useRouter();

    const submit = async () => {
      await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      await router.push('/login');
    };

    return {
      data,
      submit,
    };
  },
};
</script>