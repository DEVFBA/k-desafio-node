const updateCardLS = (post) => {

    const localStorageData = JSON.parse(localStorage.data);
    const posts = localStorageData.posts;

    const indexToUpdate = posts.findIndex((object) => {
        return object.id === post.id
    });

    localStorageData.posts.splice(indexToUpdate, 1);
    localStorageData.posts.push(post);

    localStorage.data = JSON.stringify(localStorageData);

    //window.location.reload();

}

export { updateCardLS };