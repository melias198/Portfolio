const aboutLoad = () =>{
    fetch("https://portfolio-backend-giwp.onrender.com/api/about/")
    .then((res) => res.json())
    .then((data) => { 
        displayAbout(data) })
    .catch((err) => console.log(err));
};

const displayAbout = (data) =>{
    data.forEach((data) =>{
        const about = document.getElementById("about-content");

        const p = document.createElement("p");
        p.classList.add("section-subtitle");
        p.textContent = `${data.bio}`;
        about.appendChild(p);

        const h2 = document.createElement("h2");
        h2.classList.add("h2","section-title");
        h2.textContent = `${data.headline}`;
        about.appendChild(h2);

        const new_p = document.createElement("p");
        new_p.classList.add("section-text");
        new_p.textContent = `${data.description}`;
        about.appendChild(new_p);

        const btn = document.createElement("a");
        btn.href = "#projects";
        btn.classList.add("btn", "btn-primary", "blue");
        btn.textContent = "View Projects";
        about.appendChild(btn);
    });
};

aboutLoad();