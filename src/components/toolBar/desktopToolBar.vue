<template>
  <q-toolbar class="desktop-only">
    <q-toolbar-title style="max-width: 145px"> Weekendsbot </q-toolbar-title>
    <q-tabs v-model="tab" shrink stretch>
      <q-tab name="tab1" label="Tab 1" />
      <q-tab name="tab2" label="Tab 2" />
      <q-tab name="tab3" label="Tab 3" />
      <q-btn-dropdown
        :key="i"
        v-for="(item, i) in menu"
        auto-close
        stretch
        flat
        :label="item.title"
      >
        <q-list>
          <q-item
            :key="j"
            v-for="(suItem, j) in item.items"
            clickable
            @click="tab = 'movies'"
          >
            <q-item-section>{{ suItem.title }}</q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </q-tabs>
  </q-toolbar>
</template>

<script>
export default {
  name: "desktopToolBar",
  data() {
    return {
      menu: [
        {
          title: "ЦФО",
          link: "",
          items: [
            {
              title: "Достопримечательности",
              link: "",
            },
            {
              title: "Святые места",
              link: "",
            },
            {
              title: "Музеи, выставки, галереи",
              link: "",
            },
            {
              title: "Театры, клубы, концертные залы",
              link: "",
            },
            {
              title: "Отдых на природе",
              link: "",
            },
            {
              title: "Активный отдых",
              link: "",
            },
            {
              title: "Спокойный отдых",
              link: "",
            },
            {
              title: "Кафе, бары, рестораны",
              link: "",
            },
            {
              title: "Гостиницы, отели, хостелы",
              link: "",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped></style>
