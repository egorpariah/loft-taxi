export const login = async user => {
  return fetch(`https://loft-taxi.glitch.me/auth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  }).then(response => response.json());
};
