const data = {
    "AI Explained": [
      { title: "Artificial Neural Network (ANN)", desc: "How does a machine find patterns in chaos?", img: "img1.png", url: "posts/ann.html" },
      { title: "Convolutional Neural Networks (CNN)", desc: "They technically destroy the image to see it properly.", img: "img2.png", url: "posts/cnn.html" },
      { title: "Long Short‑Term Memory (LSTM)", desc: "How we teach computers to be nostalgic.", img: "img3.png", url: "posts/lstm.html" }
    ],
    Personal: [
      { title: "A Short Story on Generative Adversarial Networks (GANs)", desc: "See how two models try to fool each other.", img: "img4.png", url: "posts/gan.html" }
    ],
    "Marvel & Movies": [
      { title: "Fantastic 4 - What I expect", desc: "Are the Fantastic 4 really coming to Earth-616?", img: "fantastic4.png", url: "posts/fantastic4.html" }
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
