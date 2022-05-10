import { reactive } from '@vue/reactivity';

const state = reactive({
    token: localStorage.getItem('token'),
    user: JSON.parse(localStorage.getItem('userName')),
    adminTag: localStorage.getItem('adminTag'),
    reload: localStorage.getItem('reload')
})

const mutations = {
    // set
    SET_TOKEN: (state, token) => {
        state.token = token
        localStorage.setItem('token', JSON.stringify(token))
    },
    SET_USER: (state, user) => {
        state.user = user
        localStorage.setItem('user', JSON.stringify(user))
    },
    SET_ADMINTAG: (state, adminTag) => {
        state.adminTag = adminTag
        localStorage.setItem('adminTag', JSON.stringify(adminTag))
    },
    SET_RELOAD: (state, reload) => {
        state.reload = reload
        localStorage.setItem('reload', JSON.stringify(reload))
    },
    REMOVE_INFO: (state) => {
        state.token = ''
        state.user = {}
        state.adminTag = ''
        localStorage.setItem('token', '')
        localStorage.setItem('user', JSON.stringify(''))
        localStorage.setItem('adminTag', '')
    }
}

const getters = {
    GET_EVENT_QUEUE(state) {
        return state.eventQueue;
    }
}

const actions = {}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
