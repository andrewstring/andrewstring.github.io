const contentAreaNav = document.getElementById("content-area")
const educationAreaNav = document.getElementById("education-area")
const workAreaNav = document.getElementById("work-area")
const projectAreaNav = document.getElementById("project-area")

const educationLinkNav = document.getElementById("education-link")
const workLinkNav = document.getElementById("work-link")
const projectLinkNav = document.getElementById("project-link")

const handleEducationLinkNavClick = () => {
    contentAreaNav.scrollTop = educationAreaNav.offsetTop - 20
}

const handleWorkLinkNavClick = () => {
    contentAreaNav.scrollTop = workAreaNav.offsetTop - 20
}

const handleProjectLinkNavClick = () => {
    contentAreaNav.scrollTop = projectAreaNav.offsetTop - 20
}

educationLinkNav.addEventListener("click", handleEducationLinkNavClick)
workLinkNav.addEventListener("click", handleWorkLinkNavClick)
projectLinkNav.addEventListener("click", handleProjectLinkNavClick)