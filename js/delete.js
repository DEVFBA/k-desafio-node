const deleteCard = () => {
    
    const id = 987654;

    const cardToRemove = document.getElementById(id);

    console.log(cardToRemove);

    cardToRemove.remove();

    deleteLocalStorage(id);

}

const deleteLocalStorage = (id) => {

    console.log('Entre!!!');

    const localStorageData = JSON.parse(localStorage.data);
    const posts = localStorageData.posts;

    const indexToDelete = posts.findIndex((object) => {
        return object.id === id
    });

    console.log(indexToDelete);

    localStorageData.posts.splice(indexToDelete, 1);
    //localStorageData.posts.push(post);

    localStorage.data = JSON.stringify(localStorageData);

}

export { deleteCard };