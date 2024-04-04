const mongoose =require("mongoose")
mongoose.connect("mongodb+srv://anjalpsalim2004:anjal@cluster0.kfe7gl9.mongodb.net/gptc_mern?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("DB Connected")
})
.catch(err=>console.log(err))

let mongooSchema = mongoose.Schema
const EmployeeSchema = new mongooSchema({
    ename:String,
    eage:Number,
    eposition:String,
    esalary:Number
})
var EmployeeModel = mongoose.model("employee",EmployeeSchema)
module.exports = EmployeeModel
