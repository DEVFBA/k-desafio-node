const showPostsModal = (event) => {

    event.preventDefault();
    console.log('Showing');

    const postsModal = document.getElementById('posts-modal');

    postsModal.classList.add('show-modal');
    postsModal.classList.remove('no-show-modal');
}

export { showPostsModal };