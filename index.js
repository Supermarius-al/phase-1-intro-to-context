// Your code here



function createEmployeeRecord (arr) {
    let employeeRecord = {
    firstName: arr[0], 
    familyName: arr[1], 
    title: arr[2], 
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: [],
    }
    console.log(employeeRecord);
    return employeeRecord
}

function createEmployeeRecords (arr2){
    let employeeRecords = []
    for(let item of arr2){
      let newRecord = createEmployeeRecord(item)
      employeeRecords.push(newRecord)
    }
    return employeeRecords
}

function createTimeInEvent(employeeRecord, dateStamp){
    
    let newTimeInEvent = {
        type: "TimeIn",
        hour: parseInt(dateStamp.slice(-4)),
        date: dateStamp.slice(0, 10),
    }
    employeeRecord.timeInEvents.push(newTimeInEvent)
    return employeeRecord
}

function createTimeOutEvent(employeeRecord, dateStamp){
    let newTimeOutEvent = {
        type: "TimeOut",
        hour: parseInt(dateStamp.slice(-4)),
        date: dateStamp.slice(0, 10),
    }
    employeeRecord.timeOutEvents.push(newTimeOutEvent)
    return employeeRecord
}

function hoursWorkedOnDate(employeeRecord, date){
let hourIn;
let hourOut;
let timeIn = employeeRecord.timeInEvents;
let timeOut = employeeRecord.timeOutEvents;
    for(let keyIn in timeIn){
    hourIn = timeIn[keyIn].hour
    hourIn = hourIn/100}
    for(let keyOut in timeOut){
    hourOut = timeOut[keyOut].hour
    hourOut = hourOut/100}
    return hourOut - hourIn
}

    




 function wagesEarnedOnDate(employeeRecord, date){
let hourIn;
let hourOut;
let totalHours;
let timeIn = employeeRecord.timeInEvents;
let timeOut = employeeRecord.timeOutEvents;
    for(let keyIn in timeIn){
     if (date == timeIn[keyIn].date){
        hourIn = timeIn[keyIn].hour
         hourIn = hourIn/100}}
    for(let keyOut in timeOut){
        hourOut = timeOut[keyOut].hour
        hourOut = hourOut/100}
    totalHours = hourOut - hourIn
    console.log(employeeRecord)
return totalHours * employeeRecord.payPerHour
 }

 function allWagesFor(employeeRecord){
    let wagesArray = []

    employeeRecord.timeInEvents.forEach((event, n) => {
        let timeOut = employeeRecord.timeOutEvents[n].hour
        let timeIn = event.hour
        let hoursWorked = (timeOut-timeIn)/100
        wagesArray.push(hoursWorked * employeeRecord.payPerHour )
    })

    return wagesArray.reduce((a, b) => a + b)
}
 
        
        




function calculatePayroll(employeeRecords){

    let payroll = []

    // employeeRecords.forEach(employee => payroll.push(allWagesFor(employee)))
    employeeRecords.forEach(employeeRecord => {
        let wageOfEmployee = allWagesFor(employeeRecord)
        payroll.push(wageOfEmployee)
    }) 

    let allWages = payroll.reduce((a, b) => a + b)

    return allWages

    // return payroll.reduce((a, b) => a + b)
    
}
