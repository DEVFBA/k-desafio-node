import { createPrincipalCard } from "./html.js";


const create = (id, principalImage, profileImage1, profileImage2, author, date, title, hashtags) => {

    const centerSection = document.getElementById('center-section');
    

    createPrincipalCard(centerSection, id, principalImage, profileImage1, profileImage2, author, date, title, hashtags);

}


export { create };