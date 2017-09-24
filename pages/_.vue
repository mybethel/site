<template>
  <section class="container">
    <component :is="layout" :key="index" v-for="(layout, index) in modules" />
    <div v-html="body" />
  </section>
</template>

<script>
import axios from 'axios'
import marked from 'marked'

import { API_ROOT } from '~/bethel.config'

export default {
  data () {
    return {
      data: {},
      modules: [
        'logo'
      ]
    }
  },
  computed: {
    body () {
      return marked(this.data.body, { sanitize: true })
    }
  },
  asyncData ({ store, route, error }) {
    let path = route.path.slice(1)
    return axios.get(`${API_ROOT}/site/${store.state.site.uuid}/page?slug=${path}`).then(response => {
      if (!response.data.data) {
        return error({ statusCode: 404, message: 'Not Found' })
      }
      return { data: response.data.data }
    })
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
