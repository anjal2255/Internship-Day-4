//importing the expressnode
const express = require('express')
const EmployeeModel = require("./model")

// initilization

const app= new express()
//midware || parsing the parameter
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//Api creation
app.get('/anjal',(req,res)=>{
    res.send("This Message from Anjal Server")
})

app.get('/data',(req,res)=>{
    res.json(
        {
        "name":"Anjal",
        "age":20
        }
    )
})

//api for adding data

app.post("/create",async(req,res)=>{
    var result = await new EmployeeModel(req.body)
    result.save()
    res.send("Data Added")
})

//api for viewing data
app.get('/view',async(req,res)=>{
    var data = await EmployeeModel.find()
    res.json(data)
    console.log(data)
})

// //api for deleting

app.delete('/remove/:id',async(req,res)=>{
    console.log(req.parmas)
    let id = req.params.id
    await EmployeeModel.findByIdAndDelete(id)
    res.send("Deleted")
})
//api for updating the data

app.put('/edit/:id',async(req,res)=>{
    let id = req.params.id
    await EmployeeModel.findByIdAndUpdate(id,req.body)
    res.send("Data Updated")
})

//port
app.listen(3005,()=>{
    console.log("Port 3005 is up and running")
})

