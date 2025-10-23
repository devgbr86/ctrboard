const postsDiv = document.getElementById('posts');

const postsFiles = ['posts/post1.json', 'posts/post2.json'];

postsFiles.forEach(file => {
  fetch(file)
    .then(res => res.json())
    .then(data => {
      const postEl = document.createElement('div');
      postEl.classList.add('post');
      postEl.innerHTML = `
        <h2>${data.title}</h2>
        <small>${data.date}</small>
        ${data.content}
      `;
      postsDiv.appendChild(postEl);
    })
    .catch(err => console.error('Erro ao carregar post:', err));
});
