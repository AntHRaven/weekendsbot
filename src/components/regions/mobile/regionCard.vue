<template>
  <div style="padding-bottom: 10px">
    <q-card class="my-card">
      <q-img
        :src="
          imgSrc === '' ? 'https://cdn.quasar.dev/img/parallax2.jpg' : imgSrc
        "
      >
        <div class="absolute-bottom text-subtitle2 text-center">
          {{ title }}
        </div>
      </q-img>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "regionCard",
  props: ["title", "imgSrc"],
};
</script>

<style scoped>
.my-card {
  width: 100%;
}
</style>
