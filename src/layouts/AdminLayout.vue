<script setup lang="ts">

import AppHeader from "@/components/AppHeader.vue";
import AppSidebar from "@/components/AppSidebar.vue";
</script>

<template>
  <div class="admin-layout">
    <div class="admin-sidebar">
      <AppSidebar />
    </div>
    <div class="admin-main">
      <div class="admin-header">
        <AppHeader />
      </div>
      <div class="admin-content">
        <div class="content-card">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.admin-layout {
  height: 100vh;
  display: flex;
  flex-direction: row;
}

.admin-sidebar {
  width: 220px;
}

.admin-main {
  width: 100%;
}

.admin-header {
  height: 60px;
  background-color: #FFFFFF;
}

.admin-content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background-color: #f5f7fa;
}

.content-card {
  min-height: 400px;
  background-color: #ffffff;
  padding: 20px;
}
</style>
