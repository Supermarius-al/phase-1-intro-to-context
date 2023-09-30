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

function hoursWorkedOnDate(employeeRecord){
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
            if (date = timeIn[keyIn].date){
            hourIn = timeIn[keyIn].hour
            hourIn = hourIn/100}}
        for(let keyOut in timeOut){
            hourOut = timeOut[keyOut].hour
            hourOut = hourOut/100}
        totalHours = hourOut - hourIn
return totalHours * employeeRecord.payPerHour
            }

function allWagesFor(employeeRecord){
 let hourIn1;
    let hourOut1;
    let dayOneHours;
    let timeIn1 = employeeRecord.timeInEvents[0];
    let timeOut1 = employeeRecord.timeOutEvents[0];
        for(let keyIn1 in timeIn1){
        hourIn1 = timeIn1[keyIn1].hour
        hourIn1 = hourIn1/100}
        for(let keyOut1 in timeOut1){
        hourOut1 = timeOut1[keyOut1].hour
        hourOut1 = hourOut1/100}
    dayOneHours = hourOut1 - hourIn1;
    
    let hourIn2;
    let hourOut2;
    let dayTwoHours;
    let timeIn2 = employeeRecord.timeInEvents[1];
    let timeOut2 = employeeRecord.timeOutEvents[1];
        for(let keyIn2 in timeIn2){
        hourIn2 = timeIn2[keyIn2].hour
        hourIn2 = hourIn2/100}
        for(let keyOut2 in timeOut2){
        hourOut2 = timeOut2[keyOut2].hour
        hourOut2 = hourOut2/100}
    dayTwoHours = hourOut2 - hourIn2
    let totalHours = dayOneHours + dayTwoHours;
    return totalHours * employeeRecord.payPerHour
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
 wageEarned = []
      
 employeeRecord.timeInEvents.forEach(event => wageEarned.push(wagesEarnedOnDate(event.hour)))
    
    
 employeeRecord.timeOutEvents.forEach(event => wageEarned.push(wagesEarnedOnDate(event.hour)))
      
 console.log(wageEarned)
return wageEarned
}



function calculatePayroll(){




}

