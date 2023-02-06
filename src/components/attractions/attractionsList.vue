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
    };
  },
};
</script>

<style scoped></style>
