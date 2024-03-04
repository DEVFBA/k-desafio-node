/**
 * Imports
 */

import { fetchAPI } from './fetch-api.js';
import { updateCardLS } from './update.js';
import { create } from './create.js';
import { readCards } from './read.js';
//import { deleteCard } from './delete.js';
import { formatDate } from './utils.js';
//import { showPostsModal } from './actions.js';



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

//const id = 987654;

/**
 * Create
 */
//create()


/**
 * Read
 */

readCards(0);
//readCards(1, '2024-01-10');
//readCards(2, null, 'Programming');



/**
 * Update
 */

//updateCardLS(post);

/**
 * Delete
 */



/**
 * Fetch API
 */

fetchAPI();

/**
 * HTML Elements
 */

const newPostBtn = document.getElementById('new-post');

const btnCreate = document.getElementById('create');

const inputDateFilter = document.getElementById('filter-date');

const btnReset = document.getElementById('reset');

/**
 * Listeners
 * 
 */

btnReset.addEventListener('click', () => {
	readCards(0);
})


inputDateFilter.addEventListener('change', (event) => {

	const dateToFilter = inputDateFilter.value;

	readCards(1, dateToFilter);

})

inputSearch.addEventListener('change', () => {
	const btnSearch = document.getElementById('search')
	const inputSearch = document.getElementById('inputSearch')
	inputSearch.value
	console.log(inputSearch.value)
	readCards(2, null, `${inputSearch.value}` )
})

// const showPostsModal = (ev) => {

//     console.log('Showing');
//     ev.preventDefault();

//     const postsModal = document.getElementById('posts-modal');

//     postsModal.classList.add('show-modal');
//     postsModal.classList.remove('no-show-modal');
// }

btnCreate.addEventListener('click', ()=> {

	const inputTitle = document.getElementById('input-title')
	const inputAuthor = document.getElementById('input-author')
	const inputHashtags = document.getElementById('input-#')
	const inputText = document.getElementById('input-text')
	const id = Date.now()
	const image = 'https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fi2pusd0be8bwn7nz4a03.jpg'
	const profileImage1 = 'https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1269538%2F59f83787-8a6b-495b-85a4-c8b25fd2a1b4.jpeg'
	const profileImage2 = 'https://res.cloudinary.com/practicaldev/image/fetch/s--ZMDQfkJE--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1177677/4947a9f8-ba30-4008-9f77-4b08c5b1c901.jpg'
	const fecha = formatDate(new Date());

	create(id, image, profileImage1, profileImage2, inputAuthor.value, fecha, inputTitle.value, inputHashtags.value)

	/**
	 * Save Local Storage
	 * 
	 * 1. Recuperar el local storage
	 * 2. Del local storage tengo que traerme el array
	 * 3. Meter en el array el objeto de la nueva tarjeta
	 * 4. Guardar el nuevo localstorage
	 */

	const localStorageData = JSON.parse(localStorage.data);

	const newPost = {
		id:   id,
		image:  image,
		profileImg1: profileImage1,
		profileImg2: profileImage2,
		date: fecha,
		author: inputAuthor.value,
		title: inputTitle.value,
		hashtags: inputHashtags.value,
		reactions: 132,
		comments: 17,
		minRead: 7
	}

	localStorageData.posts.push(newPost);

	localStorage.data = JSON.stringify(localStorageData);

})


//newPostBtn.addEventListener('click', showPostsModal());


