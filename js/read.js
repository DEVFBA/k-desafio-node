import { createHTMLElement } from "./html.js"; 

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
    
            /**
             * Create Elements
             */ 
            
            const principalCardDiv = createHTMLElement('div', ['principal-card'], [['id', cards[i].id]]);
            const headDiv = createHTMLElement('div', ['head']);
            const headImage = createHTMLElement('img',null,[['src', cards[i].image], ['alt', 'imagen de la web']]);
            const contentCardDiv = createHTMLElement('div',['content-card']);
            const logoImageDiv = createHTMLElement('div',['logo_image']);
            const taipyLogoDiv = createHTMLElement('div', ['taipy-logo']);
            const taipyLogoImage = createHTMLElement('img', null, [['alt', 'taipy logo'], ['src', cards[i].profileImg1]]);
            const profileDiv = createHTMLElement('div', ['profile']);
            const profileImg = createHTMLElement('img', null, [['src', cards[i].profileImg2], ['alt', 'profile']]);
            const nameDateDiv = createHTMLElement('div', ['name-date']);
            const authorTag = createHTMLElement('h4', null, null, cards[i].author);
            const createDateTag = createHTMLElement('p', null, null, cards[i].date);
            const contentCard2Div = createHTMLElement('div', ['content-card2']);
            const titleAnchor = document.createElement('a', null, ['href', '//dev.to/taipy/top-42-python-libraries-you-need-to-know-1omo']);
            const titleTag = createHTMLElement('h3', null, null, cards[i].title);
            const hashtagsDiv = createHTMLElement('div', ['hashtags']);
            const tagsMonochromeAnchor1 = createHTMLElement('a', ['tags-monochrome'], [['style', 'color: #1e38bb'], ['href', '/t/python']], '#python');
            const tagsMonochromeAnchor2 = createHTMLElement('a', ['tags-monochrome'], [['style', 'color: #000000'], ['href', '/t/github']], '#github');
            const tagsMonochromeAnchor3 = createHTMLElement('a', ['tags-monochrome'], [['style', 'color: #af27f2'], ['href', '/t/coding']], '#coding');
            const tagsMonochromeAnchor4 = createHTMLElement('a', ['tags-monochrome'], [['style', 'color: #890606'], ['href', '/t/programming']], '#programming');
            const reactionsDiv = createHTMLElement('div', ['reactions']);
            const emojisReactionDiv = createHTMLElement('div', ['emojis-reactions']);
            const genericAnchor1 = createHTMLElement('a', null, [['href', '#']]);
            const genericAnchor2 = createHTMLElement('a', null, [['href', '#']]);
            const emojis2Div1 = createHTMLElement('div', ['emojis2']);
            const emojis2Div2 = createHTMLElement('div', ['emojis2']);
            const multipleReactionsIconsContainerSpan = createHTMLElement('span', ['multiple_reactions_icons_container'], ['dir', 'rtl']);
            const crayonsIconContainerSpan1 = createHTMLElement('span', ['crayons_icon_container']);
            const crayonsIconContainerSpan2 = createHTMLElement('span', ['crayons_icon_container']);
            const crayonsIconContainerSpan3 = createHTMLElement('span', ['crayons_icon_container']);
            const crayonsIconContainerSpan4 = createHTMLElement('span', ['crayons_icon_container']);
            const crayonsIconContainerSpan5 = createHTMLElement('span', ['crayons_icon_container']);
            const spanCrayonsContainerImg1 = createHTMLElement('img', null, [['src', 'https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg'], ['width', '18'], ['height', '18']]);
            const spanCrayonsContainerImg2 = createHTMLElement('img', null, [['src', 'https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg'], ['width', '18'], ['height', '18']]);
            const spanCrayonsContainerImg3 = createHTMLElement('img', null, [['src', 'https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg'], ['width', '18'], ['height', '18']]);
            const spanCrayonsContainerImg4 = createHTMLElement('img', null, [['src', 'https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg'], ['width', '18'], ['height', '18']]);
            const spanCrayonsContainerImg5 = createHTMLElement('img', null, [['src', 'https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg'], ['width', '18'], ['height', '18']]);
            const reactionSpan = createHTMLElement('span', null, null, '132 reactions');
            const commentsSVG = createHTMLElement('svg', ['crayons-icon'], [['xmlns', 'http://www.w3.org/2000/svg'], ['width', '24'], ['height', '24'], ['role', 'img'], ['aria-labelledby', 'anvbv53iuk1dxb8rk4u2n14p1edhxh1v']]);
            const commentsTitle = createHTMLElement('title', null, [['id', 'anvbv53iuk1dxb8rk4u2n14p1edhxh1v']], 'Comments');
            const commentsPath = createHTMLElement('path', null, [['d', 'M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z']]);
            const commentsSpan = createHTMLElement('span', null, null, '17 comments');
            const saveDiv = createHTMLElement('div', ['save']);
            const minutesReadTag = createHTMLElement('p', null, null, '7 min read');
            const saveButton = createHTMLElement('button', ['button-save'], [['type', 'button']]);
            const saveSVG = createHTMLElement('svg', null, [['xmlns', 'http://www.w3.org/2000/svg'], ['width', '24'], ['heigth', '24'], ['aria-hidden', 'true']]);
            const savePath = createHTMLElement('path', null, [['d', 'M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z']]);
        
            /**
             * Append Elements
             */
        
            centerSection.prepend(principalCardDiv);
        
                principalCardDiv.append(headDiv);
                    headDiv.append(headImage);
        
                principalCardDiv.append(contentCardDiv);
                    contentCardDiv.append(logoImageDiv);
                        logoImageDiv.append(taipyLogoDiv);
                            taipyLogoDiv.append(taipyLogoImage);
                        logoImageDiv.append(profileDiv);
                            profileDiv.append(profileImg);
                    contentCardDiv.append(nameDateDiv);
                        nameDateDiv.append(authorTag);
                        nameDateDiv.append(createDateTag);
                principalCardDiv.append(contentCard2Div);
                    contentCard2Div.append(titleAnchor);
                        titleAnchor.append(titleTag);
                    contentCard2Div.append(hashtagsDiv);
                        hashtagsDiv.append(tagsMonochromeAnchor1);
                        hashtagsDiv.append(tagsMonochromeAnchor2);
                        hashtagsDiv.append(tagsMonochromeAnchor3);
                        hashtagsDiv.append(tagsMonochromeAnchor4);
                principalCardDiv.append(reactionsDiv);
                    reactionsDiv.append(genericAnchor1);
                        genericAnchor1.append(emojis2Div1);
                            emojis2Div1.append(multipleReactionsIconsContainerSpan);
                                multipleReactionsIconsContainerSpan.append(crayonsIconContainerSpan1);
                                    crayonsIconContainerSpan1.append(spanCrayonsContainerImg1);
                                multipleReactionsIconsContainerSpan.append(crayonsIconContainerSpan2);
                                    crayonsIconContainerSpan2.append(spanCrayonsContainerImg2);
                                multipleReactionsIconsContainerSpan.append(crayonsIconContainerSpan3);
                                    crayonsIconContainerSpan3.append(spanCrayonsContainerImg3);
                                multipleReactionsIconsContainerSpan.append(crayonsIconContainerSpan4);
                                    crayonsIconContainerSpan4.append(spanCrayonsContainerImg4);
                                multipleReactionsIconsContainerSpan.append(crayonsIconContainerSpan5);
                                    crayonsIconContainerSpan5.append(spanCrayonsContainerImg5);
                            emojis2Div1.append(reactionSpan);
                    reactionsDiv.append(genericAnchor2);
                        genericAnchor2.append(emojis2Div2);
                            emojis2Div2.append(commentsSVG);
                                commentsSVG.append(commentsTitle);
                                commentsSVG.append(commentsPath);
                            emojis2Div2.append(commentsSpan);
                    reactionsDiv.append(saveDiv);
                        saveDiv.append(minutesReadTag);
                        saveDiv.append(saveButton);
                            saveButton.append(saveSVG);
                                saveSVG.append(savePath);
        }

    }

}

export { readCards };