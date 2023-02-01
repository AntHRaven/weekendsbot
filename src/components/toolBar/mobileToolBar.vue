<template>
  <q-footer class="bg-white shadow-2">
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
        <q-route-tab to="/" name="home" icon="home" />
        <q-route-tab to="/regions" name="map" icon="map" />
        <q-route-tab to="/telegram" name="send" icon="send" />
        <q-route-tab to="/search" name="search" icon="search" />
        <q-route-tab to="/profile" name="profile" icon="person" />
      </q-tabs>
    </q-toolbar>
  </q-footer>
</template>

<script>
export default {
  name: "mobileToolBar",
  data() {
    return {
      tab: "ЦФО",
    };
  },
};
</script>

<style scoped></style>
