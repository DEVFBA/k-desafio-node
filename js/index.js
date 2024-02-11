/**
 * Imports
 */

import { fetchAPI } from './fetch-api.js';
import { updateCardLS } from './update.js';
import { create } from './create.js';
import { readCards } from './read.js';
import { deleteCard } from './delete.js'; 


/**
 * Dummy Object
 */

const post = {
	id:   123456,
	image:  'https://res.cloudinary.com/practicaldev/image/fetch/s--wzgGMCLs--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_775/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qpdtjnt4fnuwag8noec8.png',
	profileImg1: 'https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Forganization%2Fprofile_image%2F1%2Fd908a186-5651-4a5a-9f76-15200bc6801f.jpg',
	profileImg2: 'https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F38578%2F05ce9c9d-43b7-4823-a423-f875a94edc27.jpg',
	date: '2024-02-09',
	author: 'Autor del Post',
	title: 'Tarjeta Leida',
	hashtags: '#python #github #coding #programming',
	reactions: 132,
	comments: 25,
	minRead: 7
}

/**
 * Create
 */
create()


/**
 * Read
 */

readCards(post)



/**
 * Update
 */

//updateCardLS(post);

/**
 * Delete
 */

//deleteCard();

/**
 * Fetch API
 */

fetchAPI();


