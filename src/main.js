const NavState = Object.freeze({
    Education: "education",
    Work: "work",
    Project: "project"
})

let navState = NavState.Education

const contentArea = document.getElementById("content-area")

const educationArea = document.getElementById("education-area")
const workArea = document.getElementById("work-area")
const projectArea = document.getElementById("project-area")

const educationIcon = document.getElementById("education-icon")
const workIcon = document.getElementById("work-icon")
const projectIcon = document.getElementById("project-icon")

const educationText = document.getElementById("education-text")
const workText = document.getElementById("work-text")
const projectText = document.getElementById("project-text")


console.log(educationIcon)
console.log(educationText)


const setNavState = (newNavState) => {
    if (navState == newNavState) {
        return
    }
    navState = newNavState
    switch (navState) {
        case NavState.Education:
            educationText.classList.add("active-text")
            educationIcon.classList.add("active-icon")
            workText.classList.remove("active-text")
            workIcon.classList.remove("active-icon")
            projectText.classList.remove("active-text")
            projectIcon.classList.remove("active-icon")
            break
        case NavState.Work:
            educationText.classList.remove("active-text")
            educationIcon.classList.remove("active-icon")
            workText.classList.add("active-text")
            workIcon.classList.add("active-icon")
            projectText.classList.remove("active-text")
            projectIcon.classList.remove("active-icon")
            break
        case NavState.Project:
            educationText.classList.remove("active-text")
            educationIcon.classList.remove("active-icon")
            workText.classList.remove("active-text")
            workIcon.classList.remove("active-icon")
            projectText.classList.add("active-text")
            projectIcon.classList.add("active-icon")
            break
    }
}

const distance = 150

const checkScroll = () => {
    if (projectArea.getBoundingClientRect().top < distance) {
        setNavState(NavState.Project)
    }
    else if (workArea.getBoundingClientRect().top < distance) {
        setNavState(NavState.Work)
    }
    else if (educationArea.getBoundingClientRect().top < distance) {
        setNavState(NavState.Education)
    }
}

// const scrollToEducation = () => {
//     console.log("Education Click")
//     contentArea.scrollTo(150)
// }
// const scrollToWork = () => {
//     console.log("Work Click")
//     contentArea.scrollTo(250)
// }
// const scrollToProject = () => {
//     console.log("Project Click")
//     contentArea.scrollTo(350)
// }

contentArea.addEventListener("scroll", checkScroll)
// educationText.addEventListener("click", scrollToEducation)
// workText.addEventListener("click", scrollToWork)
// projectText.addEventListener("click", scrollToProject)