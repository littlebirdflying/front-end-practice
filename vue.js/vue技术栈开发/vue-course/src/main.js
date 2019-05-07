import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './lib/bus'
import CountTo from '_c/count-to'
if (process.env.NODE_ENV !== 'production') require('./mock')

Vue.config.productionTip = false
Vue.prototype.$bus = Bus

const handleClick = event => {
	console.log(event)
	// 实现 .stop 修饰符的功能
	event.stopPropagation();
}

let list = [{name: 'lison'}, {name: 'lili'}]
const getLiEleArr = h => {
	return list.map((item, index) => h('li', {
		on: {
			'click': handleClick
		},
		key: `list_item_${index}`
	}, item.name))
}

new Vue({
  router,
  store,
  // render: h => h(App)
  // render: h => h(CountTo, {
	// 	// 'class': 'count-up wrapper',
	// 	// 'class': ['count-to', true ? 'aa': 'bb'],
	// 	'class': {'count-to': 1 === 1},
	// 	attrs: {},
	// 	style: {},
	// 	props: {
	// 		endVal: 100
	// 	},
	// 	// domProps: {
	// 	// 	innerHTML: '123'
	// 	// },
	// 	on: {
	// 		'on-animation-end': val => {
	// 			console.log('animation end!')
	// 		}
	// 	},
	// 	nativeOn: {
	// 		'click': () => {
	// 			console.log('click')
	// 		}
	// 	},
	// 	directives: [],
	// 	scopedSlots: {},
	// 	slot: '',
	// 	key: '',
	// 	ref: ''
	// }, 'lison')
	// render: h => h('div', [
	// 	h('ul', {
	// 		// 原生标签，直接用 on
	// 		on: {
	// 			'click': handleClick
	// 		}
	// 	}, getLiEleArr(h))
	// ])
	render: h => h(App)
}).$mount('#app')
