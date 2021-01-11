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
						<v-text-field label="New Twoot " counter maxlength="120"></v-text-field>
						<v-row class="center">
							<v-col class="zero" cols="6"><v-select label="Type" :items="items"></v-select></v-col>
							<v-col class="zero" cols="4"><v-btn>twoot</v-btn></v-col>
						</v-row>
					</v-form>
				</v-card>
				<v-btn v-show="user.isAdmin" @click="asd">Admin Panel</v-btn>
				<v-btn v-show="!user.isAdmin">Home</v-btn>
			</v-col>
			<v-col cols="8">
				<v-card v-for="twoot in twoots" :key="twoot.id">
					<p>{{ user.username }}</p>
					<p>{{ user.twoots }}</p>
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
			twoots: users.data.find((user) => user.username === this.username),
			items: ['Draft', 'Instant Tweet'],
		};
	},
	computed: {
		user() {
			return users.data.find((user) => user.username === this.username);
		},
	},
	methods: {
		asd() {
			console.log(this.twoots);
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
