// Create a class named ProgramCrafter
class ProgramCrafter {
    constructor() {
        this.projects = [];
    }

    // Method: add a project to the ProgramCrafter's portfolio
    addProject(project) {
        this.projects.push(project);
        console.log(`Added project "${project}" to the ProgramCrafter's portfolio.`);
    }

    // Method: remove a project from the ProgramCrafter's portfolio
    removeProject(project) {
        const index = this.projects.indexOf(project);
        if (index !== -1) {
            this.projects.splice(index, 1);
            console.log(`Removed project "${project}" from the ProgramCrafter's portfolio.`);
        } else {
            console.log(`Project "${project}" is not found in the ProgramCrafter's portfolio.`);
        }
    }

    // Method: list all projects in the ProgramCrafter's portfolio
    listProjects() {
        console.log("Projects in the ProgramCrafter's portfolio:");
        this.projects.forEach(project => {
            console.log(project);
        });
    }
}

// Create an instance of ProgramCrafter named myProgramCrafter
const myProgramCrafter = new ProgramCrafter();

// Add projects to the ProgramCrafter's portfolio
myProgramCrafter.addProject("Web Application");
myProgramCrafter.addProject("Mobile App");
myProgramCrafter.addProject("Data Analysis Tool");

// List all projects in the ProgramCrafter's portfolio
myProgramCrafter.listProjects();

// Remove a project from the ProgramCrafter's portfolio
myProgramCrafter.removeProject("Mobile App");

// List all projects in the ProgramCrafter's portfolio after removal
myProgramCrafter.listProjects();
