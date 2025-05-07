const data = {
    Technical: [
      { title: "Artificial Neural Network (ANN)", desc: "How does a machine find patterns in chaos?", img: "img1.png", url: "posts/ann.html" },
      { title: "Convolutional Neural Networks (CNN)", desc: "They technically destroy the image to see it properly.", img: "img2.png", url: "posts/cnn.html" },
      { title: "Long Short‑Term Memory (LSTM)", desc: "How we teach computers to be nostalgic.", img: "img3.png", url: "posts/lstm.html" }
    ],
    Personal: [
      { title: "Why I Ditched Sugar", desc: "A brutally honest take on my love–hate story with sweets.", img: "img4.png", url: "posts/ditched-sugar.html" },
      { title: "Sketching After 2 Years", desc: "Picking up the charcoal again and what it taught me.", img: "img5.png", url: "posts/sketching.html" }
    ],
    Miscellaneous: [
      { title: "My Hot Take on LOTR", desc: "Why Frodo would never make it to my contact list.", img: "img6.png", url: "posts/lotr-hot-take.html" }
    ]
  };

  const main = document.querySelector('main');

  Object.entries(data).forEach(([sectionName, posts]) => {
    const section = document.createElement('section');
    const heading = document.createElement('h2');
    heading.textContent = sectionName;
    const grid = document.createElement('div');
    grid.className = 'grid';

    posts.forEach(post => {
      const link = document.createElement('a');
      link.href = post.url;
      link.className = 'card';
      link.innerHTML = `
        <img src="${post.img}" alt="${post.title} thumbnail" />
        <div class="card-content">
          <h3>${post.title}</h3>
          <p>${post.desc}</p>
        </div>
      `;
      grid.appendChild(link);
    });

    section.appendChild(heading);
    section.appendChild(grid);
    main.appendChild(section);
  });