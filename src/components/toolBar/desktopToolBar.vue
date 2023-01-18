<template>
  <q-toolbar class="desktop-only">
    <q-toolbar-title style="max-width: 145px"> Weekendsbot </q-toolbar-title>
    <q-tabs v-model="tab" shrink stretch>
      <q-tab name="tab1" label="Tab 1" />
      <q-tab name="tab2" label="Tab 2" />
      <q-tab name="tab3" label="Tab 3" />
      <q-btn-dropdown auto-close stretch flat label="More">
        <q-list>
          <q-item clickable @click="tab = 'movies'">
            <q-item-section>Movies</q-item-section>
          </q-item>

          <q-item clickable @click="tab = 'photos'">
            <q-item-section>Photos</q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </q-tabs>
  </q-toolbar>
</template>

<script>
export default {
  name: "desktopToolBar",
};
</script>

<style scoped></style>
