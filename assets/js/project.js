const projectLoad = () =>{
    fetch("https://portfolio-backend-giwp.onrender.com/api/project/")
    .then((res) => res.json())
    .then((data) => { 
        displayProject(data) })
    .catch((err) => console.log(err));
};


const displayProject = (projects) =>{
    const portfolioList = document.getElementById("portfolio-list");
    projects.forEach((project)=>{

        const li = document.createElement("li");
        li.classList.add("portfolio-card");
        li.style.backgroundImage = `url('${project.image}')`; 
    
        const overlay = document.createElement("div");
        overlay.classList.add("overlay");
    
        const cardContent = document.createElement("div");
        cardContent.classList.add("card-content");
    
       
        const projectType = document.createElement("p");
        projectType.classList.add("card-subtitle");
        projectType.textContent = project.type; 
    
        const techStack = document.createElement("div");
        techStack.classList.add("tech-stack");
    
        project.technologies.forEach((tech) => { 
            const techButton = document.createElement("span");
            techButton.classList.add("tech-button");
            techButton.textContent = tech;
            techStack.appendChild(techButton);
        });
    
        const projectName = document.createElement("h3");
        projectName.classList.add("h3", "card-title");
        projectName.textContent = project.name; 
    
        const links = document.createElement("div");
        links.classList.add("links");
    
        const githubLink = document.createElement("a");
        githubLink.href = project.backend_link; 
        githubLink.target = "_blank";
        githubLink.classList.add("link-button");
        githubLink.innerHTML = `<ion-icon name="logo-github"></ion-icon>`;
        links.appendChild(githubLink);
    
        const liveLink = document.createElement("a");
        liveLink.href = project.live_link; 
        liveLink.target = "_blank";
        liveLink.classList.add("link-button");
        liveLink.innerHTML = `<ion-icon name="desktop-outline"></ion-icon>`;
        links.appendChild(liveLink);

        if (project.frontend_link) 
        { 
            const frontEndLink = document.createElement("a");
            frontEndLink.href = project.frontend_link;
            frontEndLink.target = "_blank";
            frontEndLink.classList.add("link-button");
            frontEndLink.innerHTML = `<ion-icon name="code-slash-outline"></ion-icon>`;
            links.appendChild(frontEndLink);
        }
    
        cardContent.appendChild(projectType);
        cardContent.appendChild(techStack);
        cardContent.appendChild(projectName);
        cardContent.appendChild(links);
    
        li.appendChild(overlay);
        li.appendChild(cardContent);
    
        portfolioList.appendChild(li);
    });
};

projectLoad();