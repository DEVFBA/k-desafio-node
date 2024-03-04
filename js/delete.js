const deleteCard = (id) => {

    const cardToRemove = document.getElementById(id);

    console.log(cardToRemove);

    cardToRemove.remove();

    deleteLocalStorage(id);

}

const deleteLocalStorage = (id) => {

    const localStorageData = JSON.parse(localStorage.data);
    const posts = localStorageData.posts;

    const indexToDelete = posts.findIndex((object) => {
        return object.id === id
    });

    console.log(indexToDelete);

    localStorageData.posts.splice(indexToDelete, 1);

    localStorage.data = JSON.stringify(localStorageData);

}

//export { deleteCard };