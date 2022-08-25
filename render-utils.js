export function renderPost(post) {
    const containerEl = document.createElement('div');
    containerEl.classList.add('post-container');

    const imageEL = document.createElement('img');
    imageEL.src = post.avatar;

    const userEl = document.createElement('p');
    userEl.textContent = post.username;

    const commentEl = document.createElement('p');
    commentEl.textContent = post.comment;

    containerEl.append(imageEL, userEl, commentEl);
    return containerEl;
}