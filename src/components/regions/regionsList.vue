<template>
  <div>
    <q-header bordered class="bg-white">
      <q-toolbar>
        <q-btn flat round dense icon="arrow_back" class="q-mr-sm text-dark" />
        <q-toolbar-title class="text-dark">Регионыыы</q-toolbar-title>
      </q-toolbar>
    </q-header>
    <region-card
      v-for="(region, i) in regions"
      :key="i"
      :img-src="region.imgSrc"
      :title="region.title"
    ></region-card>
  </div>
</template>

<script>
import RegionCard from "@/components/regions/mobile/regionCard";

export default {
  name: "regionsList",
  components: { RegionCard },
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

<style scoped>
.flex-break {
  flex: 1 0 100% !important;
  height: 0 !important;
}

.example-container .example-cell {
  margin: 1px;
  padding: 4px 8px;
  box-shadow: inset 0 0 0 2px;
}
</style>
