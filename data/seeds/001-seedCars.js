exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('cars')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('cars').insert([
				{
					VIN: 'abcdefghijklmnop',
					make: 'Honda',
					model: 'Civic',
					mileage: 100050,
					transmission: null,
					title: null
				},
				{
					VIN: 'hfdjkslhfdjkslh4r3qry8eq',
					make: 'Honda',
					model: 'Accord',
					mileage: 20050,
					transmission: null,
					title: null
				},
				{
					VIN: 'fdhbsjk7r8cdqafreqfd',
					make: 'Scion',
					model: 'TC',
					mileage: 359000,
					transmission: null,
					title: null
				},
				{
					VIN: 'ncxmdjeie98rhd8ewi',
					make: 'BMW',
					model: '750',
					mileage: 500,
					transmission: null,
					title: null
				}
			]);
		});
};
