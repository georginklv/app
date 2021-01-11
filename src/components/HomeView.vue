<template>
	<v-app class="wrapper">
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

<style scoped></style>
