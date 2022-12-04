export const setCard = async card => {
  return fetch(`https://loft-taxi.glitch.me/card`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(card),
  }).then(response => response.json());
};
