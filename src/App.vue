<template>
	<v-app
		><TheNavBar />
		<v-main>
			<transition name="fade">
				<router-view />
			</transition> </v-main
		><TheFooter />
	</v-app>
</template>

<script>
import TheNavBar from './components/TheNavBar';
import TheFooter from './components/TheFooter';

export default {
	name: 'App',

	components: {
		TheNavBar,
		TheFooter,
	},

	data: () => ({
		//
	}),
};
</script>
