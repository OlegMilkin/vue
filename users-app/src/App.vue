<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <router-link class="navbar-brand" to="/"><img alt="Vue logo" src="@/assets/logo.png" width="30" /></router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/users">Users</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/create">Create</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <main role="main" class="container">

      <router-view />

    </main><!-- /.container -->
  </div>
</template>

<style>
  #app {
    margin-top: 60px;
  }

  [v-clock] {
    display: none;
  }
</style>
