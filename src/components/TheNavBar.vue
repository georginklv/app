<template>
	<v-app-bar absolute dark>
		<v-toolbar-title> <a href="/">Title</a> </v-toolbar-title>

		<v-spacer></v-spacer>
		<span>{{ this.$route.params.username }}</span>
	</v-app-bar>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
