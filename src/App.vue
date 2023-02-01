<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <mobile-tool-bar></mobile-tool-bar>
      <desktop-tool-bar></desktop-tool-bar>
    </q-header>
    <q-page-container>
      <q-page class="q-pa-md">
        <router-view></router-view>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import MobileToolBar from "@/components/toolBar/mobileToolBar";
import DesktopToolBar from "@/components/toolBar/desktopToolBar";

export default {
  name: "LayoutDefault",

  components: {
    DesktopToolBar,
    MobileToolBar,
  },

  setup() {
    return {
      leftDrawerOpen: ref(false),
    };
  },
};
</script>
