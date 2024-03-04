import { createPrincipalCard } from "./html.js"; 

/**
 * @param mode  
 *          0 === All Cards
 *          1 === Filtered by Date
 *          2 === Filtered By Title
 * 
 * @param date
 *          Post date to filter
 * 
 * @param title
 *          Title to filter
 * 
 * Example:
 *      readCards(0)                    === Get All Cards
 *      readCards(1, '2024-02-11)       === Get All Cards from Feb 11, 2024
 *      readCards(2, null, 'Python')    === Get All Cards which contains Python in Title
 */
const readCards = (mode, date, title) => {

    const centerSection = document.getElementById('center-section');

    let cards = null;

    if(localStorage.data){

        cards = JSON.parse(localStorage.data).posts;

        while (centerSection.firstChild) {
            centerSection.removeChild(centerSection.firstChild);
        }

        if(mode === 1){
    
            cards = cards.filter((post) => {

                return post.date === date;

            });

        } else if(mode === 2){

            cards = cards.filter((post) => {

                console.log(post.title.includes(title));

                return post.title.includes(title);

            });
    
        }

    }

    if(cards){

        cards.sort((a , b) => {
            return a.id - b.id;
        });
    
        for(let i = 0; i < cards.length; i++){

            createPrincipalCard(centerSection, cards[i].id, cards[i].image, cards[i].profileImg1, cards[i].profileImg2, cards[i].author, cards[i].date, cards[i].title, cards[i].hashtags);
            
        }

    }

}

export { readCards };