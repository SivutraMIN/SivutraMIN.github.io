const project_button = document.getElementById("btn-project")
project_button.addEventListener("click", () => {
    try {
        window.location.href = "../html/projects.html"
    }   
    catch (error) {
        console.error("File not Found!")
    }
    
})

const blog_button = document.getElementById("btn-blog")
blog_button.addEventListener("click", () => {
    try {
        window.location.href = "../html/blogs.html"
    }
    catch (error) {
        console.error("File not Found!")
    }
})

const github_button = document.getElementById("btn-github")
github_button.addEventListener("click", () => {
    window.location.href = "https://github.com/SivutraMIN"
})

const contact_button = document.getElementById("../html/contact.html")
contact_button.addEventListener("click", () => {
    try {
        window.location.href = "./html/contact.html"
    }
    catch (error) {
        console.error("File not Found!")
    }
})