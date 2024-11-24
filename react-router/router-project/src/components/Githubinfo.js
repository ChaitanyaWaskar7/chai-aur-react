export const githubInfoLoader = async() =>
{
    const response =  await fetch('https://api.github.com/users/crwaskar')
    return response.json();
}