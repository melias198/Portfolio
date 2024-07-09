const introLoad = () =>{
    fetch("https://portfolio-backend-giwp.onrender.com/api/intro/")
    .then((res) => res.json())
    .then((data) => { 
        displayIntro(data) })
    .catch((err) => console.log(err));
};


const displayIntro = (data) =>{
    data.forEach((data)=>{
        const div = document.getElementById("container");
        
        const hero = document.createElement("div");
        hero.classList.add("hero-banner");
        hero.innerHTML = `
        <img src="${data.image}" width="800" height="864" loading="lazy" alt="Ethan's Photo"
            class="img-cover">
        `;
        div.appendChild(hero);

        const content = document.createElement("div");
        content.classList.add("hero-content");
        content.innerHTML = `
            <h2 class="hero-title">
              <span>Hello I'm</span>
              <strong>${data.name}</strong> ${data.designation}
            </h2>

            <p class="hero-text">
              ${data.description}
            </p>

            <div class="social-links">
              <a href="https://github.com/melias198" target="_blank" class="social-link"><i class="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/mohammad-elias/" target="_blank" class="social-link"><i class="fab fa-linkedin"></i></a>
              <a href="mailto:meliash198@gmail.com" class="social-link"><i class="fas fa-envelope"></i></a>
            </div>

            <div class="btn-group">
              <a href="#contact" class="btn btn-primary blue">Get a Quote</a>
              <a href="./assets/cv/resume.pdf" download="Mohammad_Elias.pdf" class="btn btn-primary blue">Download CV</a>
            </div>
        `;
        div.appendChild(content);
    });
};








introLoad();