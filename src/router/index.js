import Vue from 'vue';
import VueRouter from 'vue-router';
import users from '@/data/users.js';

Vue.use(VueRouter);
const router = new VueRouter({
	mode: 'history',
	routes: [
		// Login Components
		{
			path: '/',
			name: 'home',
			component: require('../components/HomeView.vue').default,
		},
		{
			path: '/users-page/:username',
			name: 'users-page',
			props: true,
			component: require('../components/UserPage.vue').default,
			beforeEnter: (to, from, next) => {
				const exists = users.data.find((user) => user.username === to.params.username);
				if (exists) {
					next();
				} else {
					next({ name: 'notFound' });
				}
			},
		},
	],
});
export default router;
