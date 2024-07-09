const skillLoad = () =>{
    fetch("https://portfolio-backend-giwp.onrender.com/api/skill/")
    .then((res) => res.json())
    .then((data) => { 
        displaySkill(data) })
    .catch((err) => console.log(err));
};

const displaySkill = (skills) =>{
    const skillsList = document.getElementById("skills-list");
    skills.forEach((skill)=>{
        const li = document.createElement("li");
        li.classList.add("skills-item");
        li.innerHTML = `
            <div class="wrapper">
                <img src="${skill.image}" alt="" class="skills-icon">
                <p class="skills-title">${skill.name}</p>
            </div>
        `;
        skillsList.appendChild(li);
    });
};

const cpLoad = () =>{
    fetch("https://portfolio-backend-giwp.onrender.com/api/cp/")
    .then((res) => res.json())
    .then((data) => { 
        displayCp(data) })
    .catch((err) => console.log(err));
};

const displayCp = (skills) =>{
    const cpList = document.getElementById("cp-container");
    skills.forEach((skill)=>{
        const div = document.createElement("div");
        div.classList.add("cp-card");

        div.innerHTML = `
            <img src="${skill.image}" alt="Logo" class="cp-card-logo">
              <div class="cp-card-title">${skill.name}</div>
              <div class="cp-card-content">Rating: ${skill.rating}</div>
              <div class="cp-card-content">Solved Problems: ${skill.solved}+</div>
              <a href="${skill.link}" class="cp-profile-link" target="_blank">View Profile</a>
        `;
        cpList.appendChild(div);
    });
};


skillLoad();
cpLoad();