<template>
  <div>
    <q-header bordered class="bg-white">
      <q-toolbar>
        <q-btn flat round dense icon="arrow_back" class="q-mr-sm text-dark" />
        <q-toolbar-title class="text-dark">Название региона</q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-parallax
      :speed="1"
      :height="300"
      src="https://cdn.quasar.dev/img/parallax2.jpg"
    >
      <h1 class="text-white">ЦФО</h1>
    </q-parallax>
    <div style="height: 300px; width: 100%; background-color: #bfff8e">
      <h4>КАРТА</h4>
    </div>

    <q-list bordered separator>
      <q-item
        to="/attractions"
        :key="i"
        v-for="(item, i) in list"
        clickable
        v-ripple
      >
        <q-item-section>{{ item }}</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  name: "showRegion",
  data() {
    return {
      list: [
        "Достопримечательности",
        "Музеи, выставки, галереи",
        "Святые места",
        "Театры, клубы, концертные залы",
        "Отдых на природе",
        "Активный отдых",
        "Спокойный отдых",
        "Детский досуг",
        "Кафе, бары, рестораны",
        "Гостиницы отели, хостелы",
      ],
    };
  },
};
</script>

<style scoped></style>
