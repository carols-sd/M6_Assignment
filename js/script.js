
window.addEventListener("load", () => {
    let id          = document.getElementById('id')
    let name        = document.getElementById('name')
    let ext         = document.getElementById('ext')
    let email       = document.getElementById('email')
    let department  = document.getElementById('department')
    let empForm     = document.getElementById('empForm')

    empForm.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("ID: " + id.value);
        console.log("Name: " + name.value);
        console.log("Extension: " + ext.value);
        console.log("Email: " + email.value);
        console.log("Department: " + department.value);
    })
})

