const SHOW_ALERT = "SHOW_ALERT"
const HIDE_ALERT = "HIDE_ALERT"


export const alert = {
    namespaced: true,

    state: {
        isAlertOpen: false
    },

    getters: {
        isAlertOpen: ({ isAlertOpen }) => isAlertOpen
    },

    mutations: {
        [SHOW_ALERT](state) {
            state.isAlertOpen = true
        }, 
        [HIDE_ALERT](state) {
            state.isAlertOpen = false
        }
    },

    actions: {
        showAlert({ commit }) {
            commit(SHOW_ALERT)
        },
        hideAlert({ commit }) {
            commit(HIDE_ALERT)
        }
    }
}