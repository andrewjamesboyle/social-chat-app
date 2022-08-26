export function renderComment(comment) {
    const containerEl = document.createElement('div');
    containerEl.classList.add('post-container');

    const imageEL = document.createElement('img');
    imageEL.src = comment.chatApp.avatar;

    const userEl = document.createElement('p');
    userEl.textContent = comment.chatApp.username;

    const commentEl = document.createElement('p');
    commentEl.textContent = comment.comment;

    containerEl.append(imageEL, userEl, commentEl);
    return containerEl;
}