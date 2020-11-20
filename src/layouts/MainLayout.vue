<!--
 * @Author: Do not edit
 * @Date: 2020-11-19 23:23:09
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-11-20 22:28:29
 * @Description:
 * @FilePath: /quasar_todo/src/layouts/MainLayout.vue
-->
<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu" flat dense round icon="menu">
      </q-btn></q-toolbar>
      <div class="q-px-md q-pt-md q-mb-md">
        <div class="text-h3">Todo</div>
        <div class="text-subtitle1">{{ todaysDate }}</div>
      </div>
      <q-img class="header-image absolute-top" src="../statics/mountains.jpg"></q-img>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" :breakpoint="750" show-if-above>
      <q-scroll-area style="height: calc(100% - 160px); margin-top: 160px; border-right: 1px solid #ddd">
        <q-list padding="">
          <q-item :active="$route.path === '/'" exact clickable v-ripple to="/">
            <q-item-section avatar="">
              <q-icon name="list">
            </q-icon></q-item-section>
            <q-item-section>
              Todo
            </q-item-section>
          </q-item>

          <q-item :active="$route.path === '/help'" exact clickable v-ripple to="/help">
            <q-item-section avatar="">
              <q-icon name="help">
            </q-icon></q-item-section>
            <q-item-section>
              Help
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img class="absolute-top" src="../statics/mountains.jpg" style="height:160px; ">
        <div class="absolute-bottom bg-transparent">
          <q-avatar class="q-mb-sm" size="56px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
          <div class="text-weight-bold">Razvan Stoenescu</div>
          <div>@rstoenescu</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view>
      </router-view></keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import { date } from 'quasar'

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  computed: {
    todaysDate () {
      return date.formatDate(Date.now(), 'dddd D MMMM')
    }
  }
}
</script>

<style lang="stylus">
.header-image
  height 100%
  z-index -1
  opacity .5
  filter grayscale(20%)
</style>
