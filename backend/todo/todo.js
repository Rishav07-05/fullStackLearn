const { log } = require('console');
const fs = require('fs');
const filePath = './tasks.json';

const loadTasks = () => {
    try {
        const dataBuffer = fs.readFileSync(filePath)
        const dataJSON = dataBuffer.toString();
        return dataJSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
}

const saveTasks = (tasks) => {
    const dataJSON = JSON.stringify(tasks);
    fs.writeFileSync(filePath, dataJSON);
}

const addTask = (task) => {
    const tasks = loadTasks()
    tasks.push(task);
    saveTasks(tasks);
    console.log("Task added" , task);
    
}

const listTasks = () => {
    const tasks = loadTasks();
    tasks.forEach((task, index) => console.log(`${index + 1} - ${task}`));
}


const command = process.argv[2];
const argument = process.argv[3];


if (command === 'Add') {
    addTask(argument)
} else if (command === 'list') {
    listTasks();
} else if (command === 'remove') {
    removeTask(parseInt(argument));
} else {
    console.log("Command not found !");
    
}