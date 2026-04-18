<script setup lang="ts">

import AppHeader from "@/componnents/AppHeader.vue";
import AppSidebar from "@/componnents/AppSidebar.vue";
</script>

<template>
  <div class="admin-layout">
    <AppSidebar />
    <div class="admin-main">
      <AppHeader />
      <div class="admin-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
