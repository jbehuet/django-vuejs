<template>
    <nav class="navbar navbar-default">
      <div class="container">
        <ul class="nav navbar-nav">
          <li><a v-link="'home'">Home</a></li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <router-view></router-view>
    </div>
</template>
