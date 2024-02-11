/**
 * Imports
 */

import { fetchAPI } from './fetch-api.js';
import { updateCardLS } from './update.js';


/**
 * Dummy Object
 */

const post = {
	id:   123456,
	image:  'https://res.cloudinary.com/practicaldev/image/fetch/s--vwy4Bevt--/c_imagga_scale,f_auto,fl_progressive,h_420,q_66,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vcmazu3qgcqavisfr6f8.gif',
	profileImg1: 'https://res.cloudinary.com/practicaldev/image/fetch/s--q8gYXd8Q--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/7841/eb7a94b7-7bd9-4097-b7e9-132785adc6db.png',
	profileImg2: 'https://res.cloudinary.com/practicaldev/image/fetch/s--ZMDQfkJE--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1177677/4947a9f8-ba30-4008-9f77-4b08c5b1c901.jpg',
	date: '2024-02-09',
	author: 'Autor del Post',
	title: 'Python Programming Language',
	hashtags: '#python #github #coding #programming',
	reactions: 132,
	comments: 17,
	minRead: 7
}



/**
 * Create
 */



/**
 * Read
 */





/**
 * Update
 */

updateCardLS();

/**
 * Delete
 */



/**
 * Fetch API
 */

fetchAPI();


