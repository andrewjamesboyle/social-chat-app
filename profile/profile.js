import { updateProfile, getProfileById, checkAuth, uploadImage } from '../fetch-utils.js';

const profile = document.getElementById('profile-form');
const userNameInputEl = document.getElementById('user-name-input');
const imgPreview = document.getElementById('img-preview');
const img = document.getElementById('avatar-input');


const user = checkAuth();

profile.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(profile);

    const file = img.files[0];
    imgPreview.src = URL.createObjectURL(file);

    const userProfile = {
        username: data.get ('user-name'),
    };


    
    const imageFile = data.get('avatar-input');
    if (imageFile.size) {
        const imageName = `${user.id}/${imageFile.name}`;
        
        const url = await uploadImage(
            'avatar.bucket',
            imageName,
            imageFile
            
        );
        userProfile.avatar = url;
    }
    
    await updateProfile(userProfile);

    profile.reset();
});





async function displayProfile() {
    const response = await getProfileById(user.id);
    if (response) {
        userNameInputEl.value = response.username;
        imgPreview.src = response.avatar;
    }
}


displayProfile();


