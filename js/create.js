import { createPrincipalCard } from "./html.js";


const create = (id, principalImage, profileImage1, profileImage2, author, date, title, hashtags) => {

    const centerSection = document.getElementById('centerSection');
    

    createPrincipalCard(centerSection, id, principalImage, profileImage1, profileImage2, author, date, title, hashtags);


    // const postData = JSON.parse(localStorage.data)
    // const posts = postData.posts
    // console.log(posts)
        // const MainDiv = document.createElement('div')
        // MainDiv.setAttribute('class', 'principal-card')
        // const divHead = document.createElement('div')
        // divHead.setAttribute('class', 'head')
        // MainDiv.append(divHead)
        // const img = document.createElement('img')
        // img.src = "https://res.cloudinary.com/practicaldev/image/fetch/s--vwy4Bevt--/c_imagga_scale,f_auto,fl_progressive,h_420,q_66,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vcmazu3qgcqavisfr6f8.gif"
        // img.alt = "imagen de la web"
        // divHead.append(img)

        // // Header Image
        // const divContentCard = document.createElement('div')
        // divContentCard.setAttribute('class', 'content-card')
        // MainDiv.append(divContentCard)
        // const divLogo = document.createElement('div')
        // divLogo.setAttribute('class', 'logo_image')
        // divContentCard.append(divLogo)
        // const taipyLogo = document.createElement('div')
        // taipyLogo.setAttribute('class', 'taipy-logo')
        // divLogo.append(taipyLogo)
        // const imgTaipyLogo = document.createElement('img')
        // imgTaipyLogo.src = "https://res.cloudinary.com/practicaldev/image/fetch/s--ZMDQfkJE--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1177677/4947a9f8-ba30-4008-9f77-4b08c5b1c901.jpg"
        // imgTaipyLogo.alt = "profile"
        // taipyLogo.append(imgTaipyLogo)
        // const divProfile = document.createElement('div')
        // divProfile.setAttribute('class', 'profile')
        // divLogo.append(divProfile)
        // const ImgProfile = document.createElement('img')
        // ImgProfile.src = "https://res.cloudinary.com/practicaldev/image/fetch/s--ZMDQfkJE--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1177677/4947a9f8-ba30-4008-9f77-4b08c5b1c901.jpg"
        // ImgProfile.alt = "profile"
        // divProfile.append(ImgProfile)
        // const divNameDate = document.createElement('div')
        // divNameDate.setAttribute('class', 'name-date')
        // divContentCard.append(divNameDate)
        // const h4 = document.createElement('h4')
        // h4.textContent = 'Marine for Taipy'
        // const p = document.createElement('p')
        // p.textContent = 'Dec 18'
        // divNameDate.append(h4)
        // divNameDate.append(p)
        // const divContentCard2 = document.createElement('div')
        // divContentCard2.setAttribute('class', 'content-card2')
        // MainDiv.append(divContentCard2)
        // const a1 = document.createElement('a')
        // a1.href = "//dev.to/taipy/top-42-python-libraries-you-need-to-know-1omo"
        // divContentCard2.append(a1)
        // const h3 = document.createElement('h3')
        // h3.textContent = titles
        // a1.append(h3)
        // const divHashtags = document.createElement('div')
        // divHashtags.setAttribute('class', 'hashtags')
        // const a2 = document.createElement('a')
        // a2.setAttribute('class', 'tags--monochrome')
        // a2.style.color = '#1e38bb'
        // a2.href = '/t/python'
        // const span1 = document.createElement('span')
        // span1.setAttribute('class', 'tags__color')
        // span1.textContent = '#'
        // a2.append(span1)
        // span1.textContent = 'python'
        // const a3 = document.createElement('a')
        // a3.setAttribute('class', 'tags--monochrome')
        // a3.style.color = '#000000'
        // a3.href = '/t/github'
        // const span2 = document.createElement('span')
        // span2.setAttribute('class', 'tags__color')
        // span2.textContent = '#'
        // a3.append(span2)
        // a3.textContent = 'github'
        // const a4 = document.createElement('a')
        // a4.setAttribute('class', 'tags-- monochrome')
        // a4.style.color = '#af27f2' 
        // a4.href = '/t/coding'
        // const span3 = document.createElement('span')
        // span3.setAttribute('class', 'tags__color')
        // span3.textContent = '#'
        // a3.textContent = 'coding'
        // a4.append(span3)
        // const a5 = document.createElement('a')
        // a5.setAttribute('class', 'tags--monochrome')
        // a5.style.color = '#890606'
        // a5.href = '/t/programming'
        // const span4 = document.createElement('span')
        // span4.setAttribute('class', 'tags__color')
        // span4.textContent = '#'
        // a5.append(span4)
        // a5.textContent = 'programming'
        
        // divHashtags.append(a2)
        // divHashtags.append(a3)
        // divHashtags.append(a4)
        // divHashtags.append(a5)
        // const divReactions = document.createElement('div')
        // divReactions.setAttribute('class', 'reactions')
        // const divEmojisReactions = document.createElement('div')
        // divEmojisReactions.setAttribute('class', 'emojis-reaction')
        // divReactions.append(divEmojisReactions)
        // const a6 = document.createElement('a')
        // a6.href = '#'
        // divEmojisReactions.append(a6)
        // const divEmojis2 = document.createElement('div')
        // divEmojis2.setAttribute('class', 'emojis2')
        // a6.append(divEmojis2)
        // const spanMultipleReactions = document.createElement('span')
        // spanMultipleReactions.setAttribute('class', 'multiple_reactions_icons_container')
        // spanMultipleReactions.setAttribute('dir', 'rtl')
        // divEmojis2.append(spanMultipleReactions)

        // const spanCrayonsIcon1 = document.createElement('span')
        // spanCrayonsIcon1.setAttribute('class', 'crayons_icon_container')
        // spanMultipleReactions.append(spanCrayonsIcon1)
        // const imgCrayons1 = document.createElement('img')
        // imgCrayons1.src = 'https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg'
        // imgCrayons1.width = '18'
        // imgCrayons1.height = '18'

        // const spanCrayonsIcon2 = document.createElement('span')
        // spanCrayonsIcon2.setAttribute('class', 'crayons_icon_container')
        // spanMultipleReactions.append(spanCrayonsIcon2)
        // const imgCrayons2 = document.createElement('img')
        // imgCrayons2.src = 'https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg'
        // imgCrayons2.width = '18'
        // imgCrayons2.height = '18'

        // const spanCrayonsIcon3 = document.createElement('span')
        // spanCrayonsIcon3.setAttribute('class', 'crayons_icon_container')
        // spanMultipleReactions.append(spanCrayonsIcon3)
        // const imgCrayons3 = document.createElement('img')
        // imgCrayons3.src = 'https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg'
        // imgCrayons3.width = '18'
        // imgCrayons3.height = '18'

        // const spanCrayonsIcon4 = document.createElement('span')
        // spanCrayonsIcon4.setAttribute('class', 'crayons_icon_container')
        // spanMultipleReactions.append(spanCrayonsIcon4)
        // const imgCrayons4 = document.createElement('img')
        // imgCrayons4.src = 'https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg'
        // imgCrayons4.width = '18'
        // imgCrayons4.height = '18'
        
        // const spanCrayonsIcon5 = document.createElement('span')
        // spanCrayonsIcon5.setAttribute('class', 'crayons_icon_container')
        // spanMultipleReactions.append(spanCrayonsIcon5)
        // const imgCrayons5 = document.createElement('img')
        // imgCrayons5.src = 'https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg'
        // imgCrayons5.width = '18'
        // imgCrayons5.height = '18'

        // const spanReactionText = document.createElement('span')
        // spanReactionText.textContent = '132 reactions'
        // divEmojis2.append(spanReactionText)

        // const a7 = document.createElement('a')
        // a7.href = '#'
        // const divEmojis2_2 = document.createElement('div')
        // divEmojis2_2.setAttribute('class', 'emojis2')
        // const svg1 = document.createElement('svg')
        // a7.append(divEmojis2_2)
        // svg1.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
        // svg1.setAttribute('width', '24')
        // svg1.setAttribute('height', '24')
        // svg1.setAttribute('role', 'img')
        // svg1.setAttribute('aria-labelledby', 'anvbv53iuk1dxb8rk4u2n14p1edhxh1v')
        // svg1.setAttribute('class', 'crayons-icon')
        // const title = document.createElement('title')
        // title.setAttribute('id', 'anvbv53iuk1dxb8rk4u2n14p1edhxh1v')
        // title.textContent = 'Comments'
        // svg1.append(title)
        // const path = document.createElement('path')
        // path.setAttribute('d', 'M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z')
        // svg1.append(path)

        // const divSave = document.createElement('div')
        // divSave.setAttribute('class', 'save')
        // const p2 = document.createElement('p')
        // p2.textContent = '7 min read'
        // const button = document.createElement('button')
        // button.setAttribute('class', 'button-save')
        // button.setAttribute('type', 'button')

        // const svg2 = document.createElement('svg')
        // svg1.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
        // svg1.setAttribute('width', '24')
        // svg1.setAttribute('height', '24')
        // svg1.setAttribute('aria-hidden', 'true')
        // svg1.setAttribute('class', 'crayons-icon')
        // title.setAttribute('id', 'anvbv53iuk1dxb8rk4u2n14p1edhxh1v')
        // title.textContent = 'Comments'
        // svg1.append(title)
        // const path2 = document.createElement('path')
        // path2.setAttribute('d', 'M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z')
        // svg1.append(path2)


        // divSave.append(p2)
        // divSave.append(button)
        // const centerSection = document.getElementById('centerSection')
        // centerSection.append(MainDiv)
}


export { create };