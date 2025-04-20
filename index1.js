// Filter courses by category
function filterCourses() {
    const category = document.getElementById("category").value;
    const courses = document.querySelectorAll(".course-card");

    courses.forEach(course => {
        if (category === "All" || course.dataset.category === category) {
            course.style.display = "block";
        } else {
            course.style.display = "none";
        }
    });
}

// Show course details in modal
function showCourseDetails(courseId) {
    const modal = document.getElementById("courseDetailsModal");
    const content = document.getElementById("courseDetailsContent");
    let courseTitle = "";
    switch (courseId) {
        case "html-css":
            courseTitle = "HTML & CSS Basics";
            break;
        case "javascript":
            courseTitle = "JavaScript Fundamentals";
            break;
        case "ui-ux":
            courseTitle = "UI/UX Design Essentials";
            break;
        case "react":
            courseTitle = "React for Beginners";
            break;
        default:
            courseTitle = "Course Details";
    }

    content.innerHTML = `
        <h2>${courseTitle}</h2>
        <p>Thank you for your interest! You have successfully enrolled in <strong>${courseTitle}</strong>.</p>
        <button class="enroll-btn" onclick="hideCourseDetails()">Close</button>
    `;
    modal.style.display = "flex";
}

// Hide the modal
function hideCourseDetails() {
    const modal = document.getElementById("courseDetailsModal");
    modal.style.display = "none";
}


   