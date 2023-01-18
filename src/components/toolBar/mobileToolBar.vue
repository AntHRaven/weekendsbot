<template>
  <q-footer elevated class="bg-white no-shadow">
    <q-toolbar class="desktop-only">
      <q-toolbar-title>Footer</q-toolbar-title>
    </q-toolbar>
    <q-toolbar style="padding-left: 0" class="mobile-only">
      <q-tabs
        style="min-width: 100vw"
        align="center"
        shrink
        stretch
        v-model="tab"
        class="bg-white text-grey"
      >
        <q-tab name="search" icon="search" label="Поиск" />
        <q-tab name="map" icon="map" label="Регионы" />
        <q-tab name="profile" icon="person" label="Профиль" />
      </q-tabs>
    </q-toolbar>
  </q-footer>
</template>

<script>
export default {
  name: "mobileToolBar",
};
</script>

<style scoped></style>
