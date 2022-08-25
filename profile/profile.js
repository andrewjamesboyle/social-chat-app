import { updateProfile } from '../fetch-utils.js';
import { renderProfile } from './render-utils.js';
const profile = document.getElementById('profile-form');


profile.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(profile);
    const userProfile = {
        username: data.get ('username'),
        avatar: data.get ('avatar'),
    };


    await updateProfile(userProfile);


    profile.reset;
});
