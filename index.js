import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(express.json());

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) =>{
    res.render("index.ejs", {list2: personalTaskList})
});

app.get('/work', (req, res) =>{
    res.render('work.ejs', {list1: workTaskList})
});

let workTaskList = [];
let personalTaskList = [];

app.post("/submit", (req, res) =>{
    let newPersonalTask = req.body["newPersonalTask"]
    personalTaskList.push(newPersonalTask)
    res.render("index.ejs", {clientTask2: newPersonalTask, list2: personalTaskList});
});

app.post("/submit/work", (req, res) =>{
    let newWorkTask = req.body["newWorkTask"];
    workTaskList.push(newWorkTask)
    res.render("work.ejs", {clientTask1: newWorkTask, list1: workTaskList});
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

