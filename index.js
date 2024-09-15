var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contactNumber = document.getElementById('contactNumber').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n    <h2> Resume</h2>\n    <h3> Personal Information</h3>\n    <p> Name:".concat(name, "</p>\n    <p> Name:").concat(email, "</p>\n    <p> Name:").concat(contactNumber, "</p>\n    \n    <h3> Education </h3>\n    <p> Name:").concat(education, "</p>\n\n    <h3> Experience</h3>\n    <p> Name:").concat(experience, "</p>\n\n    <h3> Skills</h3>\n    <p> Name:").concat(skills, "</p>");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('error');
    }
});
