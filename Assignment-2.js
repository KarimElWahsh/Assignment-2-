const fs = require("fs");
const newLine = () => console.log("--".repeat(20));
/* 
1. Write a function that logs the current file path and directory. (0.5 Grade)
• Output Example:{File:“/home/user/project/index.js”, Dir:“/home/user/project”}
*/
const currentFile = function () {
  return {
    File: __filename,
    Dir: __dirname,
  };
};
console.log(currentFile());
newLine();
/*2. Write a function that takes a file path and returns its file name. (0.5 Grade)
• Input Example: /user/files/report.pdf
• Output Example:"report.pdf"
*/
const getFileName = function (filePath) {
  return filePath.split("/").pop();
};
console.log(getFileName("/user/files/report.pdf"));
newLine();
/*3. Write a function that builds a path from an object (0.5 Grade)
• Input Example: { dir: "/folder", name: "app", ext: ".js"}
• Output Example: “/folder/app.js”
*/
const buildPath = function (obj) {
  return `${obj.dir}/${obj.name}${obj.ext}`;
};
console.log(buildPath({ dir: "/folder", name: "app", ext: ".js" }));
newLine();
/*4. Write a function that returns the file extension from a given file path. (0.5 Grade)
• Input Example: /docs/readme.md"
• Output Example: “.md”
*/
const getFileExtension = function (filePath) {
  return filePath.split(".").pop();
};
console.log(getFileExtension("/docs/readme.md"));
newLine();
/*5. Write a function that parses a given path and returns its name and ext. (0.5 Grade)
• Input Example: /home/app/main.js
• Output Example: { Name: “main”, Ext: “.js” }
*/
const parsePath = function (filePath) {
  const parts = filePath.split("/");
  const fileName = parts.pop();
  const [name, ext] = fileName.split(".");
  return { Name: name, Ext: `.${ext}` };
};
console.log(parsePath("/home/app/main.js"));
newLine();
/*6.
Write a function that checks whether a given path is absolute. (0.5 Grade)
•
Input Example: /home/user/file.txt
•
Output Example: true
*/
const isAbsolutePath = function (filePath) {
  return filePath.startsWith("/");
};
console.log(isAbsolutePath("/home/user/file.txt"));
newLine();
/*
7.
Write a function that joins multiple segments (0.5 Grade)
•
Input: "src", "components", "App.js"
•
Output Example: src/components/App.js
*/
const joinSegments = function (...segments) {
  return segments.join("/");
};
console.log(joinSegments("src", "components", "App.js"));
newLine();
/*
8.
Write a function that resolves a relative path to an absolute one. (0.5 Grade)
•
Input Example: ./index.js
•
Output Example: /home/user/project/src/index.js
*/
const resolvPath = (relPath) => {
  let absolPath = "/home/user/project/src";
  let relparts = relPath.split("/"); // [".","index"]
  let absolParts = absolPath.split("/").filter(Boolean);
  for (let p of relparts) {
    if (p === "." || p === "") {
      continue;
    } else if (p === "..") {
      absolParts.pop();
    } else {
      absolParts.push(p);
    }
  }
  return "/" + absolParts.join("/");
};

console.log(resolvPath("./index.js"));
newLine();

/*
9.
Write a function that joins two paths. (0.5 Grade)
•
Input Example: /folder1, folder2/file.txt
•
Output Example: /folder1/folder2/file.txt
*/

const joinPaths = (firstPath, SecondPath) => {
  let firstParts = firstPath.split("/").filter(Boolean); //["folder1"]
  let secParts = SecondPath.split("/"); //["folder2","file.txt"]
  for (let p of secParts) {
    firstParts.push(p);
  }
  return "/" + firstParts.join("/");
};
console.log(joinPaths("/folder1", "folder2/file.txt"));
newLine();
/*10.
Write a function that deletes a file asynchronously. (0.5 Grade)
•
Input Example: /path/to/file.txt
•
Output Example: The file.txt is deleted.
*/
const deleteFileAsync = function (filePath) {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(`Error deleting file: ${err.message}`);
    } else {
      console.log(`The file ${filePath} is deleted.`);
    }
  });
};
deleteFileAsync("/path/to/file.txt");
newLine();

/*
11.
Write a function that creates a folder synchronously. (1 Grade)
•
Output Example: “Success”
*/
const createFolderSync = function (folderPath) {
  try {
    fs.mkdirSync(folderPath);
    return "Success";
  } catch (err) {
    console.error(`Error creating folder: ${err.message}`);
    return "Error";
  }
};
console.log(createFolderSync("./newFolder"));
newLine();

/*
12.
Create an event emitter that listens for a "start" event and logs a welcome message. (0.5 Grade)
•
Output Example: Welcome event triggered!
*/
const EventEmitter = require("events");
const emitter = new EventEmitter();
emitter.on("start", () => {
  console.log("Welcome event triggered!");
});
emitter.emit("start");
newLine();
/*
13.
Emit a custom "login" event with a username parameter. (0.5 Grade)
•
Input Example: "Ahmed"
•
Output Example: “User logged in: Ahmed”
*/
emitter.on("login", (username) => {
  console.log(`User logged in: ${username}`);
});
emitter.emit("login", "Ahmed");
newLine();
/*
14.
Read a file synchronously and log its contents. (1 Grade)
•
Input Example: "./notes.txt"
•
Output Example: the file content => “This is a note.”
*/
const readFileSync = function (filePath) {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    console.log(`File content => “${data}”`);
  } catch (err) {
    console.error(`Error reading file: ${err.message}`);
  }
};
readFileSync("./notes.txt");
newLine();
/*
15.
Write asynchronously to a file. (1 Grade)
•
Input: path: "./async.txt", content: "Async save"
*/
const writeFileAsync = function (filePath, content) {
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error(`Error writing file: ${err.message}`);
    } else {
      console.log(`File written successfully to ${filePath}`);
    }
  });
};
writeFileAsync("./async.txt", "Async save");
newLine();
/*
16.
Check if a directory exists. (0.5 Grade)
•
Input Example: "./notes.txt"
•
Output Example: true
*/
const checkDirectoryExists = function (dirPath) {
  return fs.existsSync(dirPath);
};
console.log(checkDirectoryExists("./notes.txt"));
newLine();
/*
17.
Write a function that returns the OS platform and CPU architecture. (0.5 Grade)
•
Output Example: {Platform: “win32”, Arch: “x64”}
*/
const os = require("os");
const getSystemInfo = function () {
  return {
    Platform: os.platform(),
    Arch: os.arch(),
  };
};
console.log(getSystemInfo());
newLine();
// done by search engine
