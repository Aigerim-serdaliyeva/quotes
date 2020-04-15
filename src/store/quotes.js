const ADD_QUOTE = "ADD_QUOTE";
const DELETE_QUOTE = "DELETE_QUOTE";

export const quotes = {
    namespaced: true,

    state: {
        quotes: []
    },

    getters: {
        quotes: ({ quotes }) => quotes,
        quotesCount: ({ quotes }) => quotes.length
    },

    mutations: {
        [ADD_QUOTE](state, quote) {
            state.quotes.push(quote)
        }, 
        [DELETE_QUOTE](state, index) {
            state.quotes.splice(index, 1)
        }
    },

    actions: {
        addQuote({ commit }, quote) {
            commit(ADD_QUOTE, quote)
        },
        deleteQuote({ commit }, index) {
            commit(DELETE_QUOTE, index)
        }
    }
}