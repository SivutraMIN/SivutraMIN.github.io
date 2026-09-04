const project_button = document.getElementById("btn-project")
project_button.addEventListener("click", () => {
    try {
        window.location.href = "/src/html/projects.html"
    }   
    catch (error) {
        console.error("File not Found!")
    }
    
})

const blog_button = document.getElementById("btn-blog")
blog_button.addEventListener("click", () => {
    try {
        window.location.href = "/src/html/blogs.html"
    }
    catch (error) {
        console.error("File not Found!")
    }
})

const github_button = document.getElementById("btn-github")
github_button.addEventListener("click", () => {
    window.location.href = "https://github.com/SivutraMIN"
})

const contact_button = document.getElementById("btn-contact")
contact_button.addEventListener("click", () => {
    try {
        window.location.href = "/src/html/contact.html"
    }
    catch (error) {
        console.error("File not Found!")
    }
})


async function getGithubRepo() {
    try {
        const response = await fetch("https://api.github.com/users/SivutraMIN/repos", {
            headers : {
                'Accept': 'application/vnd.github+json'
            }
        });


        if (!response.ok) {
            throw new Error(`Error with Github API: ${response.status}`);
        }
        return await response.json()
    } catch (error) {
        console.error("Failed to fetch Github API" , error);
        document.querySelector("sec-projects").innerHTML = "<p>Failed to Load</p<"
    }
}



async function displayRepos() {
    const repos = await getGithubRepo()

    repos.forEach(repo => {
        if (repo.fork) return;
        
        const repo_container = document.getElementById("sec-projects")
        const single_repo = document.createElement("div")
        single_repo.innerHTML = `<p>${repo.name}</p> <p>${repo.description}</p> <p>${repo.languages}</p>`

        repo_container.appendChild(single_repo)
    });

}

displayRepos();