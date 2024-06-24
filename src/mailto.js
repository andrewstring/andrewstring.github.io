const firstName = document.getElementById("first-name")
const lastName = document.getElementById("last-name")
const submit = document.getElementById("submit")

const handleSubmit = () => {
    location.href = `mailto:abreezemail@gmail.com?subject=New Connection! ${firstName.value} ${lastName.value}&body=
    Hi Andrew! I would love to connect and discuss tech related things.`
}

const handleEnter = (event) => {
    if (event.key === "Enter") {
        console.log("Enter Press")
        if (firstName === document.activeElement) {
            console.log("First is active")
            lastName.focus()
        }
        else if (lastName === document.activeElement) {
            console.log("Last is active")
            handleSubmit()
        }
    }
}

submit.addEventListener("click", handleSubmit)
document.addEventListener("keypress", handleEnter)