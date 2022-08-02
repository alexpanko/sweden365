const api_url = 'data.json';

const today = new Date().toJSON().slice(5, 10);

async function getapi(url) {
  const response = await fetch(url);
  let data = await response.json();
  data = data.find((content) => content.day === today);

  document.body.style = `
      background-image: linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.9)), url(${data.image});
    `;
  document.getElementById('headline').innerText = data.headline;
  document.getElementById('description').innerText = data.description;
  document.getElementById('credits').innerText = data.credits;
  document.getElementById('url').href = data.url;
}

getapi(api_url);
