<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">JWT</router-link>
      <div>
        <ul class="navbar-nav me-auto mb-2 mb-md-0" v-if="!auth">
          <li class="nav-item">
            <router-link to="/login" class="nav-link active">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link active"
              >Register</router-link
            >
          </li>
        </ul>
        <ul class="navbar-nav me-auto mb-2 mb-md-0" v-if="auth">
          <li class="nav-item">
            <router-link to="/login" class="nav-link active" @click="Logout">Logout</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "navBar",
  setup() {
    const store = useStore();

    const auth = computed(() => store.state.authenticated);

    const Logout = async () => {
      await fetch ('http://localhost:8000/api/logout', {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include'
      })
    }

    return {
      auth,
      Logout
    };
  },
};
</script>