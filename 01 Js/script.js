    let taskN = prompt("Enter task number");
    switch(taskN)
    {
        case "1":
            {
                let value = prompt("Value to square");
                alert("Value in square: " + (value ** 2));
                break;
            }
        case "2":
            {
                let firstValue = prompt("First value");
                let secondValue = prompt("Second value");
                let average = ((parseInt(firstValue,10) + parseInt(secondValue,10)) / 2);
                alert("Average: " + average);
                break;
            }
        case "3":
            {
                let side = prompt("Square side:");
                alert("Square of square: " + (side ** 2));
                break;
            }
        case "4":
            {
                const CONVERT_TO_MILE = 0.621371;
                let km = prompt("Enter kilometers:");
                alert(km + " in miles: " + parseFloat(km * CONVERT_TO_MILE));
                break;
            }
        case "5":
            {
                let firstValue = prompt("First value");
                let secondValue = prompt("Second value");
                alert(`+ = ${parseInt(parseInt(firstValue,10) + parseInt(secondValue,10))}\n- = ${firstValue - secondValue}\n* = ${firstValue * secondValue}\n/ = ${firstValue / secondValue}\n`);
                break;
            }
        case "6":
            {
                let a = prompt("a value");
                let b = prompt("b value");
                let x = -b / a;
                alert("X = " + x)
                break;
            }
        case "7":
            {
                let hours = prompt("Enter hour");
                let mins = prompt("Enter min");
                
                let remaindHours = Math.floor(24 - hours);
                let remaindMinutes = Math.floor(60 - mins);

                alert(`To next day: ${parseInt(remaindHours)} : ${parseInt(remaindMinutes)}`);
                break;
            }
        case "8":
            {
                let number = prompt("Enter 3-character number");
                               
                number = Math.floor((number / 10) % 10);
                
                alert("Second number: " + number);
                break;
            }
        case "9":
            {
                let number = prompt("Enter 5-character number");
                
                number = number[number.length - 1] + number.substring(0,number.length - 1);

                alert("Result: " + number);
                break;
            }
        case "10":
            {
                let sells = prompt("Enter sells");
                alert("Salary: " + (250 + sells * 0.1));
                break;
            }    
    }

