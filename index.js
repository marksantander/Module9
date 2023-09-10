// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input

const questions = [
  {
    id: 1,
    question: "What was your motivation?",
    answer: prompt("What was your motivation?"),
  },
  {
    id: 2,
    question: "Why did you build this project?",
    answer: prompt("Why did you build this project?"),
  },
  {
    id: 3,
    question: "What problem does it solve?",
    answer: prompt("What problem does it solve?"),
  },
  {
    id: 4,
    question: "What problem does it solve?",
    answer: prompt("What problem does it solve?"),
  },
  {
    id: 5,
    question: "What did you learn?",
    answer: prompt("What did you learn?"),
  },
  {
    id: 6,
    question: "What makes your project stand out?",
    answer: prompt("What makes your project stand out?"),
  }
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const fs = require("fs");
  fs.writeFile("README.md", "", (err) => {
    if (err) {
      console.error(err);
      return;
    }
    const readme = `# ${name}`;
    readme += "\n\n" + description;
    readme += "\n\n## Author";
    readme += "\n" + author;

    fs.writeFile("README.md", readme, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("README file created successfully!");
    });
  });
}


// TODO: Create a function to initialize app
function init() {
  const readme
}

// Function call to initialize app
init();
