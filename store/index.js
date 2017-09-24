import axios from 'axios'

import { API_ROOT } from '~/bethel.config'

export const actions = {
  async nuxtServerInit ({ commit }, { req }) {
    let host = process.env.host || req.headers.host
    let { data } = await axios.get(`${API_ROOT}/site/${host}`)

    if (!data.data) return
    commit('site/init', data.data)
    commit('ministry/init', data.data.ministry)
  }
}
