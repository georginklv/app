<template>
	<v-app class="container">
		<h1>Home Page</h1>
		<a
			v-for="user in users"
			:key="user.id"
			@click="goToUser(user)"
			href="#"
			class="list-group-item list-group-item-action"
			>{{ user.username }}</a
		>
	</v-app>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
	computed: { ...mapState('users', ['users', 'currentUser']) },
	methods: {
		...mapActions('users', ['getUsers']),
		goToUser(user) {
			console.log(this.$router);
			localStorage.setItem('selectedUser', JSON.stringify(user));
			this.$router.push(`/users-profile/${user.username}`);
		},
	},
	async created() {
		await this.getUsers();
	},
	mounted() {
		console.log({ router: this.$router });
	},
};
</script>

<style scoped></style>
