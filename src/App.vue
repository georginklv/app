<template>
	<div id="app">
		<TheNavBar />
		<router-view />
		<TheFooter />
	</div>
</template>

<script>
import TheNavBar from './components/TheNavBar.vue';
import TheFooter from './components/TheFooter.vue';

export default {
	name: 'App',
	components: {
		TheNavBar,
		TheFooter,
	},
	data() {
		return {};
	},
	methods: {},
};
</script>

<style>
.wrapper {
	display: flex;
	align-content: center;
	align-items: center;
	justify-content: center;
	padding: 60px;
	height: 100vh;
	overflow: hidden;
	width: 100%;
}
</style>
