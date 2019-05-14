import { login } from '@/api/user'

const state = {
	userName: 'Lison'
}

const getters = {
	firstLetter: state => {
		return state.userName.substr(0, 1)
	}
}

const mutations = {
	SET_USER_NAME (state, params) {
		state.userName = params
	}
}

const actions = {
	updateUserName ({ commit, state, rootState, dispatch}) {

	},
	login ( { commit }, { userName, password }) {
		login({ userName, password }).then(res => {
			console.log(res)
		}).catch(error => {
			console.log(err)
		})
	}
}

export default {
	// 模块使用命名空间，会让模块更加密闭，不会收到污染
	// namespaced: true,
	state,
	getters,
	mutations,
	actions
}