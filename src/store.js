import { createStore } from 'vuex'
import helpers from './utils/helpers'
import constants from './configuration/constants'

export const store = createStore({
    state: {
        auth: {},
        isLogin: false
    },
    mutations: {
        initiaStore(state) {
            if (helpers.checkItem('auth')) {
                state.auth = helpers.getItem('auth')
                state.isLogin = helpers.getItem('isLogin')
            }
        },
        loginAction(state, data) {
            let user = constants.users.filter(items => items.email === data.email && items.password === data.password)
            if (user.length > 0) {
                state.auth = { name: 'Zain Ahmed', email: data.email, token: '234knininf3453423c234v23234' }
                state.isLogin = true
                helpers.setItem('auth', JSON.stringify({
                    name: 'Zain Ahmed',
                    email: data.email, token: '234knininf3453423c234v23234'
                }))
                helpers.setItem('isLogin', true)
            }
        },
        logoutAction(state) {
            helpers.removeItem('auth')
            helpers.removeItem('isLogin')
            state.auth = {}
            state.isLogin = false
        }
    },

})