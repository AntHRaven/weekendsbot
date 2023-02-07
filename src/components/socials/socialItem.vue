<template>
  <div style="padding-bottom: 10px">
    <q-card style="max-height: 100px" flat @click="viewRegion" class="my-card">
      <q-img
        style="max-height: 100px"
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
import router from "@/router";

export default {
  name: "socialItem",
  props: ["title", "imgSrc"],

  methods: {
    viewRegion() {
      router.push("/regions/test");
    },
  },
};
</script>

<style scoped></style>
