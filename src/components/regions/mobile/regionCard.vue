<template>
  <div style="padding-bottom: 10px">
    <q-card flat @click="viewRegion" class="my-card">
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
import router from "@/router";

export default {
  name: "regionCard",
  props: ["title", "imgSrc"],

  methods: {
    viewRegion() {
      router.push("/regions/test");
    },
  },
};
</script>

<style scoped>
.my-card {
  width: 100%;
}
</style>
