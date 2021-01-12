<template>
	<v-app>
		<div class="wrapper">
			<v-col cols="7">
				<v-card class="padding">
					<h1 class="title-blog">
						{{ user.username }}
					</h1>
					<p v-show="user.isAdmin">Admin</p>
					<p>Followers: {{ user.followers }}</p>
				</v-card>
				<v-card class="padding">
					<v-form>
						<v-text-field v-model="post" label="New Twoot " counter maxlength="120"></v-text-field>
						<v-row class="center">
							<v-col class="zero" cols="6"><v-select label="Type" :items="items" v-model="select"></v-select></v-col>
							<v-col class="zero" cols="4" @click="newPost"><v-btn>twoot</v-btn></v-col>
						</v-row>
					</v-form>
				</v-card>
				<v-btn v-show="user.isAdmin" @click="goToAdmin">Admin Panel</v-btn>
				<v-btn v-show="!user.isAdmin" @click="goToHome">Home</v-btn>
			</v-col>
			<v-col cols="8">
				<v-card v-for="(twoot, i) in user.twoots" :key="i" class="padding">
					<p>@{{ user.username }}</p>
					<p>{{ twoot.content }}</p>
				</v-card>
			</v-col>
		</div>
	</v-app>
</template>

<script>
import users from '@/data/users.js';

export default {
	props: {
		username: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			post: '',
			select: '',
			items: ['Draft', 'Instant Tweet'],
		};
	},
	methods: {
		newPost() {
			if (this.select == !null || this.select === 'Instant Tweet') {
				this.user.twoots.push({ content: this.post });
				this.post = '';
			}
		},
		goToAdmin() {
			this.$router.push('/admin-panel');
		},
		goToHome() {
			this.$router.push('/');
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
	justify-content: flex-start;
}
.padding {
	padding: 20px;
	margin-bottom: 20px;
}
.zero {
	padding: 0px;
	margin: 10px;
}
.center {
	align-items: center;
}
</style>
