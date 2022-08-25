const SUPABASE_URL = 'https://qccwdgqhkuvusyzbcido.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjY3dkZ3Foa3V2dXN5emJjaWRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjA2MDcwNjcsImV4cCI6MTk3NjE4MzA2N30.DFfLtHUtrylbCXtdC__wIA1RZKo0p5Rk9ie6QztGjBM';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export function checkAuth() {
    const user = getUser();
    // do we have a user?
    if (!user) {
        // path is different if we are at home page versus any other page
        const authUrl = location.pathname === '/' ? './auth/' : '../auth/';
        // include the current url as a "redirectUrl" search param so user can come
        // back to this page after they sign in...
        location.replace(`${authUrl}?redirectUrl=${encodeURIComponent(location)}`);
    }

    // return the user so can be used in the page if needed
    return user;
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({
        email,
        password,
    });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({
        email,
        password,
    });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

/* Data functions */
export async function updateProfile(profile) {
    return await client.from('chatApp').upsert(profile).single();
}

export async function getProfileById(id) {
    const response = await client.from('chatApp').select('').match({ id });
    return response.data;
}

export async function uploadImage(bucketName, imageName, imageFile) {

    const bucket = client.storage.from(bucketName);
    const response = await bucket.upload(imageName, imageFile, {
        cacheControl: '3600',
        upsert: true,
    });
    if (response.error) {
        return null;
    }





    const url = `${SUPABASE_URL}/storage/v1/avatar.bucket/public/${response.data.Key}`;
    return url;
}
