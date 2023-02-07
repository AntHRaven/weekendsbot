<template>
  <div>
    <q-header bordered class="bg-white">
      <q-toolbar>
        <q-btn flat round dense icon="arrow_back" class="q-mr-sm text-dark" />
        <q-toolbar-title class="text-dark"
          >Достопримечательности ЦФО</q-toolbar-title
        >
      </q-toolbar>
    </q-header>
    <q-list
      style="border-radius: 30px"
      bordered
      class="q-mb-sm rounded-borders"
    >
      <q-expansion-item
        bordered
        class="overflow-hidden"
        style="border-radius: 30px"
        icon="filter_list"
        label="Фильтры"
        expand-icon-class="text-white"
      >
        <q-card>
          <q-card-section>
            <q-select
              dense
              outlined
              v-model="model"
              :options="options"
              label="Область/край/республика"
              class="q-mb-sm"
            />
            <q-select
              dense
              outlined
              v-model="model"
              :options="options"
              label="Город/населенный пункт"
              class="q-mb-sm"
            />
            <q-select
              dense
              outlined
              v-model="model"
              :options="options"
              label="Категория"
              class="q-mb-sm"
            />
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
    <q-table
      bordered
      class="no-shadow"
      title="Достопримечательности"
      :rows="rows"
      :columns="columns"
      row-key="name"
      no-data-label="Данные не найдены"
    />
  </div>
</template>

<script>
import { ref } from "vue";

const columns = [
  {
    name: "attraction",
    required: true,
    label: "Достопримечательность",
    align: "left",
    field: (row) => row.attraction,
    sortable: true,
  },
  {
    name: "mapPoint",
    required: true,
    label: "",
    field: (row) => row.mapPoint,
  },
];

const rows = [
  {
    attraction: "Frozen Yogurt",
    mapPoint: "Карта",
  },
  {
    attraction: "Frozen Yogurt",
    mapPoint: "Карта",
  },
  {
    attraction: "Frozen Yogurt",
    mapPoint: "Карта",
  },
  {
    attraction: "Frozen Yogurt",
    mapPoint: "Карта",
  },
  {
    attraction: "Frozen Yogurt",
    mapPoint: "Карта",
  },
  {
    attraction: "Frozen Yogurt",
    mapPoint: "Карта",
  },
  {
    attraction: "Frozen Yogurt",
    mapPoint: "Карта",
  },
  {
    attraction: "Frozen Yogurt",
    mapPoint: "Карта",
  },
  {
    attraction: "Frozen Yogurt",
    mapPoint: "Карта",
  },
  {
    attraction: "Frozen Yogurt",
    mapPoint: "Карта",
  },
];
export default {
  name: "attractionsList",
  setup() {
    return {
      columns,
      rows,
      model: ref(null),
      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
    };
  },
};
</script>

<style scoped></style>
