const express = require('express');

const db = require('../data/db-config');

const router = express.Router();

//##############################
//CREATE
//##############################

router.post('/', (req, res) => {
	const vehicleData = req.body;
	db('cars')
		.insert(vehicleData)
		.then(data => {
			res.status(201).json({ message: 'Successfully created a new vehicle', data });
		})
		.catch(err => {
			res.status(404).json({ message: ' Failed to create a new vehicle', err });
		});
});

//##############################
//READ
//##############################

router.get('/', (req, res) => {
	db('cars')
		.then(carsData => {
			res.status(200).json({ message: 'successfully retrieved your data', carsData });
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to retrieve your data', err });
		});
});

//##############################
//UPDATE
//##############################

router.put('/', async (req, res) => {
	const carsData = req.body;
	const { id } = req.params;
	try {
		const car = await db('cars')
			.where({ id })
			.update(carsData);
		res.status(200).json({ message: 'successfully updated your vehicle', car });
	} catch (error) {
		res.status(500).json({ message: 'There was an error with the database, try again', error });
	}
});

//##############################
//DELETE
//##############################

router.delete('/:id', (req, res) => {
	db('cars')
		.where('id', req.params.id)
		.del()
		.then(deleted => {
			if (deleted) {
				res.status(200).json({ message: ' Successfully deleted the vehicle' });
			} else {
				res.status(404).json({ message: 'The vehicle was not deleted' });
			}
		})
		.catch(error => {
			res.status(500).json({ message: 'Internal Error', error });
		});
});

module.exports = router;
