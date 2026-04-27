// // // // question 1
// // // let arr = [[], [], []];
// // // console.log(arr);


// // // // question 2
// // // let matrix = [ [0,1,2,3] , [1,0,1,2] , [2,1,0,1] ]
// // // console.log(matrix);

// // // // question 3
// // // for (let i=1; i <=10; i++){
// // //     console.log(i);

// // // }

// // // //question 4
// // // // USER SE INPUT LENA
// // // let num = parseInt(prompt("Enter the number:"))
// // // let length = parseInt(prompt("Enter table length:"))

// // // // FOR LOOP SE TABLE  PRINT KARNA
// // // for (let i=1; i <=length; i++)  {
// // //     document.writeln(num + "x" + i + "=" + (num * i) + <br> )
// // // }

// // // //question 5
// // // let fruits =["apple" , "mango" , "banana" , "strawberry" , ]

// // // sirf item print kana
// // // for (let i=0; i <fruits.length; i++){
// // //     console.log(fruits[i]);
// // // }

// // // // index ke sath print karna
// // // for(let i=0; i < fruits.length; i++){
// // //     console.log("element at index" + i + "is" + fruits [i] );

// // // }

// // // //question 6
// // // a. Counting
// // // document.write("<b>Counting:</b><br>");
// // // for (let i = 1; i <= 15; i++) {
// // //   document.write(i + ", ");
// // // }

// // // document.write("<br><br>");

// // // // b. Reverse counting
// // // document.write("<b>Reverse counting:</b><br>");
// // // for (let i = 10; i >= 1; i--) {
// // //   document.write(i + ", ");
// // // }

// // // document.write("<br><br>");

// // // // c. Even
// // // document.write("<b>Even:</b><br>");
// // // for (let i = 0; i <= 20; i += 2) {
// // //   document.write(i + ", ");
// // // }

// // // document.write("<br><br>");

// // // // d. Odd
// // // document.write("<b>Odd:</b><br>");
// // // for (let i = 1; i < 20; i += 2) {
// // //   document.write(i + ", ");
// // // }

// // // document.write("<br><br>");

// // // // e. Series (k)
// // // document.write("<b>Series:</b><br>");
// // // for (let i = 2; i <= 20; i += 2) {
// // //   document.write(i + "k, ");
// // // }

// // // //question 7
// // // USER SE INPUT LENA

// // // let bakers = ["cake", "apple pie", "cookie", "chips", "patties"]
// // // let userinput = parseInt(prompt("welcome to A.BAKERS.What do you want to search?"))

// // // //case-insensitive search ke liye lower case use kiya
// // // // let found = false

// // // // for (let i = 0; i < bakers.length; i++) {
// // // //     if (bakers[i].toLowerCase() === userinput.toLowerCase()) {

// // // //         found = true;
// // // //         break;
// // // //     }

// // // // }

// // // // if (found) {
// // // //   alert(userInput + " is available in the list.");
// // // // } else {
// // // //   alert(userInput + " is NOT available in the list.");
// // // // }

// A = ["cake", "apple pie", "cookie", "chips", "patties"]

// let input = prompt("welcome! What do you want")
// let index = A.indexOf(input.toLowerCase());

// if (index !== -1){
//     alert(input +" is Available")
// }else{
//     alert(input +" is NOT available")
// }

// // // Ans 8

// // // var A = [24, 53, 78, 91, 12]

// // // var largest = A[0];
// // // for (let i = 1; i < A.length; i++) {
// // //     if (A[i] > largest) {
// // //         largest = A[i];
// // //     }
// // // }

// // // document.write("Array items: " + A + "<br>");
// // // document.write("The largest number is " + largest);

// // //Ans 9 

// // // var A = [24, 53, 78, 91, 12];

// // // var smallest = A[0];

// // // for (let i = 1; i < A.length; i++) {
// // //     if (A[i] < smallest) {
// // //         smallest = A[i];
// // //     }
// // // }

// // // document.write("Array items: " + A + "<br>");
// // // document.write("The smallest number is " + smallest);

// // //Ans 10

// // // for (let i = 5; i <= 100; i += 5) {
// // //     document.write(i + ", ");
// // // }