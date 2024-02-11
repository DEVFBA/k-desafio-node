const readCards = () => {

    const cards = JSON.parse(localStorage.data).posts;

    for(let i = 0; i < cards.length; i++){

        /**
         * Create Elements
         */
    
        const centerSection = document.getElementById('center-section');
    
        const principalCardDiv = document.createElement('div');
        principalCardDiv.classList.add('principal-card');
        principalCardDiv.setAttribute('id', cards[i].id);    
    
        const headDiv = document.createElement('div');
        headDiv.classList.add('head');
    
        const headImage = document.createElement('img');
        headImage.setAttribute('src', cards[i].image);
        headImage.setAttribute('alt', 'imagen de la web');
    
        const contentCardDiv = document.createElement('div');
        contentCardDiv.classList.add('content-card');
    
        const logoImageDiv = document.createElement('div');
        logoImageDiv.classList.add('logo_image');
    
        const taipyLogoDiv = document.createElement('div');
        taipyLogoDiv.classList.add('taipy-logo');
    
        const taipyLogoImage = document.createElement('img');
        taipyLogoImage.setAttribute('alt', 'taipy logo');
        taipyLogoImage.setAttribute('src', cards[i].profileImg1);
    
        const profileDiv = document.createElement('div');
        profileDiv.classList.add('profile');
    
        const profileImg = document.createElement('img');
        profileImg.setAttribute('src', cards[i].profileImg2);
        profileImg.setAttribute('alt', 'profile');
    
        const nameDateDiv = document.createElement('div');
        nameDateDiv.classList.add('name-date');
    
        const authorTag = document.createElement('h4');
        authorTag.innerHTML = cards[i].author;
    
        const createDateTag = document.createElement('p');
        createDateTag.innerHTML = cards[i].date;
    
        const contentCard2Div =  document.createElement('div');
        contentCard2Div.classList.add('content-card2');
    
        const titleAnchor = document.createElement('a');
        titleAnchor.setAttribute('href', '//dev.to/taipy/top-42-python-libraries-you-need-to-know-1omo');
    
        const titleTag = document.createElement('h3');
        titleTag.innerHTML = cards[i].title;
    
        const hashtagsDiv = document.createElement('div');
        hashtagsDiv.classList.add('hashtags');
    
        const tagsMonochromeAnchor1 = document.createElement('a');
        tagsMonochromeAnchor1.classList.add('tags-monochrome');
        tagsMonochromeAnchor1.setAttribute('style', 'color: #1e38bb');
        tagsMonochromeAnchor1.setAttribute('href', '/t/python');
        tagsMonochromeAnchor1.innerHTML = 'python';
    
        const tagsColorSpan1 = document.createElement('span');
        tagsColorSpan1.classList.add('tags__color');
        tagsColorSpan1.innerHTML = '#';
    
        const tagsMonochromeAnchor2 = document.createElement('a');
        tagsMonochromeAnchor2.classList.add('tags-monochrome');
        tagsMonochromeAnchor2.setAttribute('style', 'color: #000000');
        tagsMonochromeAnchor2.setAttribute('href', '/t/github');
        tagsMonochromeAnchor2.innerHTML = 'github';
    
        const tagsColorSpan2 = document.createElement('span');
        tagsColorSpan2.classList.add('tags__color');
        tagsColorSpan2.innerHTML = '#';
        
        const tagsMonochromeAnchor3 = document.createElement('a');
        tagsMonochromeAnchor3.classList.add('tags-monochrome');
        tagsMonochromeAnchor3.setAttribute('style', 'color: #af27f2');
        tagsMonochromeAnchor3.setAttribute('href', '/t/coding');
        tagsMonochromeAnchor3.innerHTML = 'coding';
    
        const tagsColorSpan3 = document.createElement('span');
        tagsColorSpan3.classList.add('tags__color');
        tagsColorSpan3.innerHTML = '#';
        
        const tagsMonochromeAnchor4 = document.createElement('a');
        tagsMonochromeAnchor4.classList.add('tags-monochrome');
        tagsMonochromeAnchor4.setAttribute('style', 'color: #890606');
        tagsMonochromeAnchor4.setAttribute('href', '/t/programming');
        tagsMonochromeAnchor4.innerHTML = 'programming';
    
        const tagsColorSpan4 = document.createElement('span');
        tagsColorSpan4.classList.add('tags__color');
        tagsColorSpan4.innerHTML = '#';
    
        const reactionsDiv = document.createElement('div');
        reactionsDiv.classList.add('reactions');
    
        const emojisReactionDiv = document.createElement('div');
        emojisReactionDiv.classList.add('emojis-reactions');
        
        const genericAnchor1 = document.createElement('a');
        genericAnchor1.setAttribute('href', '#');
    
        const genericAnchor2 = document.createElement('a');
        genericAnchor2.setAttribute('href', '#');
    
        const emojis2Div1 = document.createElement('div');
        emojis2Div1.classList.add('emojis2');
    
        const emojis2Div2 = document.createElement('div');
        emojis2Div2.classList.add('emojis2');
    
        const multipleReactionsIconsContainerSpan = document.createElement('span');
        multipleReactionsIconsContainerSpan.classList.add('multiple_reactions_icons_container');
        multipleReactionsIconsContainerSpan.setAttribute('dir', 'rtl');
    
        const crayonsIconContainerSpan1 = document.createElement('span');
        crayonsIconContainerSpan1.classList.add('crayons_icon_container');
    
        const crayonsIconContainerSpan2 = document.createElement('span');
        crayonsIconContainerSpan2.classList.add('crayons_icon_container');
    
        const crayonsIconContainerSpan3 = document.createElement('span');
        crayonsIconContainerSpan3.classList.add('crayons_icon_container');
    
        const crayonsIconContainerSpan4 = document.createElement('span');
        crayonsIconContainerSpan4.classList.add('crayons_icon_container');
    
        const crayonsIconContainerSpan5 = document.createElement('span');
        crayonsIconContainerSpan5.classList.add('crayons_icon_container');
    
        const spanCrayonsContainerImg1 = document.createElement('img');
        spanCrayonsContainerImg1.setAttribute('src', 'https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg');
        spanCrayonsContainerImg1.setAttribute('width', '18');
        spanCrayonsContainerImg1.setAttribute('height', '18');
    
        const spanCrayonsContainerImg2 = document.createElement('img');
        spanCrayonsContainerImg2.setAttribute('src', 'https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg');
        spanCrayonsContainerImg2.setAttribute('width', '18');
        spanCrayonsContainerImg2.setAttribute('height', '18');
    
        const spanCrayonsContainerImg3 = document.createElement('img');
        spanCrayonsContainerImg3.setAttribute('src', 'https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg');
        spanCrayonsContainerImg3.setAttribute('width', '18');
        spanCrayonsContainerImg3.setAttribute('height', '18');
    
        const spanCrayonsContainerImg4 = document.createElement('img');
        spanCrayonsContainerImg4.setAttribute('src', 'https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg');
        spanCrayonsContainerImg4.setAttribute('width', '18');
        spanCrayonsContainerImg4.setAttribute('height', '18');
    
        const spanCrayonsContainerImg5 = document.createElement('img');
        spanCrayonsContainerImg5.setAttribute('src', 'https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg');
        spanCrayonsContainerImg5.setAttribute('width', '18');
        spanCrayonsContainerImg5.setAttribute('height', '18');
    
        const reactionSpan = document.createElement('span');
        reactionSpan.innerHTML = '132 reactions';
    
        const commentsSVG = document.createElement('span');
        commentsSVG.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        commentsSVG.setAttribute('width', '24');
        commentsSVG.setAttribute('height', '24');
        commentsSVG.setAttribute('role', 'img');
        commentsSVG.setAttribute('aria-labelledby', 'anvbv53iuk1dxb8rk4u2n14p1edhxh1v');
        commentsSVG.classList.add('crayons-icon');
    
        const commentsTitle = document.createElement('title');
        commentsTitle.setAttribute('id', 'anvbv53iuk1dxb8rk4u2n14p1edhxh1v');
        commentsTitle.innerHTML = 'Comments';
    
        const commentsPath = document.createElement('path');
        commentsPath.setAttribute('d', 'M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z');
    
        const commentsSpan = document.createElement('span');
        commentsSpan.innerHTML = '17 comments';
    
        const saveDiv = document.createElement('div');
        saveDiv.classList.add('save');
    
        const minutesReadTag = document.createElement('p');
        minutesReadTag.innerHTML = '7 min read';
    
        const saveButton = document.createElement('button');
        saveButton.classList.add('button-save');
        saveButton.setAttribute('type', 'button');
    
        const saveSVG = document.createElement('svg');
        saveSVG.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        saveSVG.setAttribute('width', '24');
        saveSVG.setAttribute('height', '24');
        saveSVG.setAttribute('aria-hidden', 'true');
    
        const savePath = document.createElement('path');
        savePath.setAttribute('d', 'M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z');
    
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
                reactionsDiv.append(saveDiv);
                    saveDiv.append(minutesReadTag);
                    saveDiv.append(saveButton);
                        saveButton.append(saveSVG);
                            saveSVG.append(savePath);
    }

                        

}

export { readCards };