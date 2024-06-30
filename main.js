import inquirer from 'inquirer';
class student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class person {
    students = [];
    addstudent(obj) {
        this.students.push(obj);
    }
}
const persons = new person();
const programstart = async (persons) => {
    do {
        console.log("welcome!");
        const ans = await inquirer.prompt([
            {
                name: "select",
                type: "list",
                message: "whom would you like to interact with",
                choices: ["staff", "student", "exit"]
            }
        ]);
        if (ans.select == "staff") {
            console.log("you approch a staff room please feel free to ask any question");
        }
        else if (ans.select == "student") {
            const ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "enter the student name to enaged with you"
            });
            const student = persons.students.find(val => val.name == ans.student);
        }
        if (!student) {
            const name = new student(ans.student);
            persons.addstudent(name);
            console.log(`hello i am ${name.name}.nice to see you`);
            console.log("new student added");
            console.log("current student list:");
            console.log(persons.students);
        }
        else if (ans.select == "exit") {
            console.log("exiting the program");
        }
        else {
            console.log(`hello i am ${student.name}nice to meet to you`);
            console.log("existing student list:");
            console.log(persons.students);
        }
    } while (true);
};
programstart(persons);
