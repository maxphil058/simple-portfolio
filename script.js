
// Name: Phil Maxwell-Mgbudem
// File: script.js
// Student Number:041166550
// Course: CST8285_312
// Date: 2025-July-06
// Description: This is my script file for my portfolio website which manages the project 
// gallery navigation in the projects.html page.

// Project Gallery Navigation (projects.html)
document.addEventListener('DOMContentLoaded', function () {
    const projects = [
        document.getElementById('project1'),
        document.getElementById('project2'),
        document.getElementById('project3'),
        document.getElementById('project4')
    ];
    let currentProject = 0;
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (prevBtn && nextBtn && projects[0]) {
        function showProject(index) {
            projects.forEach((proj, i) => {
                proj.style.display = (i === index) ? 'block' : 'none';
            });
        }
        prevBtn.addEventListener('click', function () {
            currentProject = (currentProject - 1 + projects.length) % projects.length;
            showProject(currentProject);
        });
        nextBtn.addEventListener('click', function () {
            currentProject = (currentProject + 1) % projects.length;
            showProject(currentProject);
        });
        showProject(currentProject);
    }


    
  
}); 