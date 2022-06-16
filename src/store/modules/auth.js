const state = {
    user: null
};

const getters = {
};

const actions = {
    async login( {commit}, details) {
        // 
    },
    async register( {commit}, details) {
        // 
    },
    async logout( {commit}, details) {
        // 
    }
};

const mutations = {
    SET_USER(state, user) {
        state.user = user;
    },
    CLEAR_USER(state) {
        state.user = null;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}