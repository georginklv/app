const state = {
	users: [],
	selectedUser: localStorage.getItem('selectedUser') || [],
};

const actions = {
	async getUsers({ commit }) {
		//our data if u dont get it
		const data = [
			{
				id: 1,
				username: 'LiuKang',
				firstName: 'Liu',
				lastName: 'Kang',
				email: 'liu.kang@mk.com',
				isAdmin: true,
				image: '',
				twoots: [
					{ id: 1, content: 'Earth Realm is the best!' },
					{ id: 2, content: 'Shao Kahn suck ballz!' },
				],
			},
			{
				id: 2,
				username: 'JCage',
				firstName: 'Johnny',
				lastName: 'Cage',
				email: 'johnny.cage@mk.com',
				isAdmin: false,
				twoots: [],
			},
			{
				id: 3,
				username: 'SBlade',
				firstName: 'Sonya',
				lastName: 'Blade',
				email: 'sonya.blade@mk.com',
				isAdmin: false,
				twoots: [],
			},
			{
				id: 4,
				username: 'SubZero',
				firstName: 'Sub',
				lastName: 'Zero',
				email: 'sub.zero@mk.com',
				isAdmin: false,
				twoots: [],
			},
		];

		commit('GET_USERS', data);
	},
};

const mutations = {
	GET_USERS: (state, users) => (state.users = users),
};

export default {
	namespaced: true,
	state,
	actions,
	mutations,
};
