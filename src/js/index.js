const project_button = document.getElementById("btn-project")
project_button.addEventListener("click", () => {
    try {
        window.location.href = "./projects.html"
    }   
    catch (error) {
        console.error("File not Found!")
    }
    
})

const blog_button = document.getElementById("btn-blog")
blog_button.addEventListener("click", () => {
    try {
        window.location.href = "./blogs.html"
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
        window.location.href = "./contact.html"
    }
    catch (error) {
        console.error("File not Found!")
    }
})