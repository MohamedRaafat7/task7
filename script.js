






    let fastatus = false;
        let speed = 0;
        let tempruture = 16;

        function updateUI() {
            document.getElementById('status').innerText = fastatus ? 'Status: Open' : 'Status: Closed';
            document.getElementById('speed').innerText = 'Speed: ' + speed;
            document.getElementById('temperature').innerText = 'Temperature: ' + tempruture;
        }

        function openN() {
            if (!fastatus) {
                fastatus = true;
                speed = 0;
                tempruture = 16;
            } else {
                fastatus = false;
                speed = 0;
                tempruture = 0;
            }
            updateUI();
        }

        function speeed() {
            if (fastatus && speed < 16) {
                speed++;
            }
            updateUI();
        }

        function temprutuure() {
            if (fastatus && tempruture < 32) {
                tempruture += 2;
            }
            updateUI();
        }

        function d_speeed() {
            if (fastatus && speed > 0) {
                speed--;
            }
            updateUI();
        }

        function d_temprutuure() {
            if (fastatus && tempruture > 16) {
                tempruture -= 2;
            }
            updateUI();
        }












        function calc() {
            let num1 = +prompt("Enter the first number");
            let num2 = +prompt("Enter the second number");
            let operator = prompt("Choose an operator (+, -, *, /)");
            let result;
            
            
            if (operator == "+") {
                result = num1 + num2;
            } else if (operator == "-") {
                result = num1 - num2;
            } else if (operator == "*") {
                result = num1 * num2;
            } else if (operator == "/") {
                result = num1 / num2;
            } else {
                document.write("Please enter a valid operator (+, -, *, /)");
                return; 
            }
        
            document.write("The result is: " + result + "<br>");
        
          
            let continueCalc = confirm("هل تريد استكمال العمليه ؟");
            
            while (continueCalc) {
                num2 = +prompt("Enter the next number");
                operator = prompt("Choose an operator (+, -, *, /)");
                
                if (operator == "+") {
                    result += num2;
                } else if (operator == "-") {
                    result -= num2;
                } else if (operator == "*") {
                    result *= num2;
                } else if (operator == "/") {
                    result /= num2;
                } else {
                    document.write("Please enter a valid operator (+, -, *, /)");
                    return; 
                }
        
                document.write("The result is: " + result + "<br>");
                
                
                continueCalc = confirm("هل تريد استكمال العمليه ؟");
            }
        
            document.write("Final result: " + result);
        }
        


        