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
	justify-content: center;
	padding: 60px;
	height: calc(100vh - 88px);
	overflow: hidden;
	width: 100%;
}
</style>
