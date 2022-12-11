export const register = async user => {
  return fetch(`https://loft-taxi.glitch.me/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  }).then(response => response.json());
};
