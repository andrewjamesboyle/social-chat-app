// export function renderChatRoom() {
//     const chatRoom = document.createElement('div');
//     chatRoom.classList.add('chatRoom');
//     chatRoom.textContent = '';
//     const post = document.createElement('p');
//     post.classList.add('post');
//     post.textContent = '';
//     const user = document.createElement('p');
//     user.classList.add('user');
//     user.textContent = '';
//     return chatRoom;

// }

export function renderProfile(profiles) {
    const profile = document.createElement('div');
    profile.classList.add('profile');
    const username = document.createElement('p');
    username.classList.add('username');
    username.textContent = profiles.username;
    const avatar = document.createElement('img');
    avatar.classList.add('avatar');
    avatar.src = profiles.avatar;
    profile.append(username, avatar);
    return profile;

}