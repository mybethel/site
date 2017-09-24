export const state = () => ({
  uuid: '',
  navigation: []
})

export const getters = {

}

export const actions = {

}

export const mutations = {
  init (state, { _id, navigation }) {
    state.uuid = _id
    state.navigation = navigation
  }
}
