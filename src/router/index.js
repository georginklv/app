import Vue from 'vue';
import VueRouter from 'vue-router';

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
			path: '/users-profile/:username',
			name: 'users-profile',
			component: require('../components/UsersProfile.vue').default,
		},
	],
});
export default router;
