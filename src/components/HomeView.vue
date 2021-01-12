<template>
	<v-app>
		<v-container class="wrapper">
			<h1>Home Page</h1>
			<div v-for="user in data" :key="user.username">
				<router-link
					:to="{
						name: 'users-page',
						params: { username: user.username },
					}"
					>{{ user.username }}
				</router-link>
			</div>
		</v-container>
	</v-app>
</template>

<script>
import users from '@/data/users.js';
export default {
	data() {
		return {
			data: users.data,
		};
	},
	methods: {},
};
</script>

<style scoped>
.wrapper {
	flex-direction: column;
	align-items: flex-start;
}
</style>
