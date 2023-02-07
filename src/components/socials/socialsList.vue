<template>
  <div>
    <q-header bordered class="bg-white">
      <q-toolbar>
        <q-btn flat round dense icon="arrow_back" class="q-mr-sm text-dark" />
        <q-toolbar-title class="text-dark">Регионы</q-toolbar-title>
      </q-toolbar>
    </q-header>
    <social-item
      v-for="(region, i) in regions"
      :key="i"
      :img-src="region.imgSrc"
      :title="region.title"
    ></social-item>
  </div>
</template>

<script>
import SocialItem from "@/components/socials/socialItem";
export default {
  name: "socialsList",
  components: { SocialItem },
  data() {
    return {
      regions: [
        {
          title: "ЦФО",
          imgSrc: "",
        },
        {
          title: "СЗФО",
          imgSrc: "",
        },
        {
          title: "ЮФО",
          imgSrc: "",
        },
        {
          title: "СКФО",
          imgSrc: "",
        },
        {
          title: "ПФО",
          imgSrc: "",
        },
        {
          title: "СФО",
          imgSrc: "",
        },
        {
          title: "ДФО",
          imgSrc: "",
        },
        {
          title: "Абхазия",
          imgSrc: "",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
