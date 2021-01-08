<template>
	<div class="wrapper">
		<h1 class="title-blog">
			{{ user.username }}
		</h1>
		<p>{{ user.firstName }}</p>
	</div>
</template>
<script>
import users from '@/data/users.js';

export default {
	data() {
		return {};
	},
	props: {
		username: {
			type: String,
			required: true,
		},
	},
	computed: {
		user() {
			return users.data.find((user) => user.username === this.username);
		},
	},
};
</script>

<style scoped>
.wrapper {
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;
	padding: 60px;
	height: 100vh;
}
</style>
