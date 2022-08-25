// importing other stuff, utility functions for:
import { renderComment } from './render-utils.js';
// working with supabase:
import { checkAuth, signOutUser, createComment, getComments } from './fetch-utils.js';
// pure rendering (data --> DOM):

/*  "boiler plate" auth code */
// checking if we have a user! (will redirect to auth if not):
const user = checkAuth();
// can optionally return the user:
// const user = checkAuth();

// sign out link:
const signOutLink = document.getElementById('sign-out-link');
signOutLink.addEventListener('click', signOutUser);
/* end "boiler plate auth code" */

// grab needed DOM elements on page:
const containerEl = document.getElementById('chat-container');
const chatFormEl = document.getElementById('chat-form');

// local state:

// display functions:
// async function displayComments() {
// containerEl.innerHTML = '';
// const comments = await 


// events:
chatFormEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(chatFormEl);
    const newComment = {
        comment: data.get('comment')
    };


    await createComment(newComment);
    await displayComments();
});

async function displayComments() {
    containerEl.innerHTML = '';

    const comments = await getComments();
    console.log(comments);
    // for (let comment of comments) {
    //     const newComment = renderComment(comment);
    //     containerEl.append(newComment);
}

// }
// andrew's comment



// initialize app:

// comment test





// comment test 2
// comment test
// tanner test
// tanner test

