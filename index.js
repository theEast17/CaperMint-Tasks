// for(let i=1;i<=5;i++){
//     let output=''
//     for(let j=1;j<=5;j++){
//         output=output+'*'
//     }
//     console.log(output)
// }

// for(let i=1;i<=5;i++){
//     let output=''
//         for(let j=1;j<=5;j++){
//             if(j===1 || j===5 || i===1 || i===5){
//                 output+='*'
//             }else{
//                 output+=' '
//             }
//         }
//     console.log(output)
// }

// for(let i=1;i<=5;i++){
//     let output=''
//     for(let j=1;j<=i;j++){
//         output+='*'
//     }
//     console.log(output)
// }

// for(let i=5;i>=1;i--){
//     let output=''
//     for(let j=1;j<=i;j++){
//         output+='*'
//     }
//     console.log(output)
// }

// for(let i=1;i<=5;i++){
//     let output=''
//     for(let j=1;j<=5-i;j++){
//         output+=' '
//     }
//     for(let k=1;k<=i;k++){
//         output+='*'
//     }
//     console.log(output)
// }


// 1
// 12
// 123
// 1234
// 12345
// for(let i=1;i<=5;i++){
//     let output=''
//     for(let j=1;j<=i;j++){
//         output+=j
//     }
//     console.log(output)
// }


// 12345
// 1234
// 123
// 12
// 1
// for(let i=5;i>=1;i--){
//     let output=''
//     for(let j=1;j<=i;j++){
//         output+=j
//     }
//     console.log(output)
// }


// 1
// 23
// 456
// 78910
// 1112131415
// let count=1;
// for(let i=1;i<=5;i++){
//     let output=''
//     for(let j=1;j<=i;j++){
//         output+=count
//         count++
//     }
//     console.log(output)
// }


// 1
// 01
// 101
// 0101
// 10101
// for(let i=1;i<=5;i++){
//     let output=''
//     for(let j=1;j<=i;j++){
//         if(i%2!==0 && j%2!==0 || i%2===0 && j%2===0){
//             output+='1'
//         }else{
//             output+='0'
//         }
//     }
//     console.log(output)
// }



// *        *
// **      **
// ***    ***
// ****  ****
// **********
// ****  ****
// ***    ***
// **      **
// *        *

// for(let i=1;i<=5;i++){
//     let output=''
//     for(let j=1;j<=i;j++){
//         output+='*'
//     }
//     for(let k=1;k<=(5-i)*2;k++){
//         output+=' '
//     }
//     for(let j=1;j<=i;j++){
//         output+='*'
//     }
//     console.log(output)
// }

// for(let i=4;i>=1;i--){
//     let output=''
//     for(let j=1;j<=i;j++){
//         output+='*'
//     }
//     for(let k=1;k<=(5-i)*2;k++){
//         output+=' '
//     }
//     for(let j=1;j<=i;j++){
//         output+='*'
//     }
//     console.log(output)
// }

//        *****
//       *****
//      *****
//     *****
//    *****
// for(let i=1;i<=5;i++){
//     let output=''
//     for(let j=1;j<=5-i;j++){
//         output+=' '
//     }
//     for(let k=1;k<=5;k++){
//         output+='*'
//     }

//     console.log(output)
// }


//       1
//      2 2
//     3 3 3
//    4 4 4 4
//   5 5 5 5 5
// for(let i=1;i<=5;i++){
//     let output=''
//     for(let j=1;j<=5-i;j++){
//         output+=' '
//     }
//     for(let k=1;k<=i;k++){
//         output+=`${i} `
//     }
//     console.log(output)
// }


//     1
//    212
//    32123
//   4321234
//  543212345

// for(let i=1;i<=5;i++){
//     let output=''
//     for(let j=1;j<=5-i;j++){
//         output+=' '
//     }
//     for(let k=i;k>=1;k--){
//         output+=`${k}`
//     }
//     for(let l=2;l<=i;l++){
//         output+=l
//     }
//     console.log(output)
// }



// ----complete diamond
// for (let i = 1; i <= 5; i++) {
//     let output = ''
//     for (let j = 1; j <= 5 - i; j++) {
//         output += ' '
//     }
//     for (let k = 1; k <= i; k++) {
//         output += `*`
//     }
//     for (let l = 2; l <= i; l++) {
//         output += '*'
//     }
//     console.log(output)
// }

// for (let i = 4; i >= 1; i--) {
//     let output = ''
//     for (let j = 1; j <= 5-i; j++) {
//         output += ' '
//     }
//     for (let k = 1; k <= i; k++) {
//         output += `*`
//     }
//     for (let l = 1; l <= i - 1 ; l++) {
//         output += '*'
//     }
//     console.log(output)
// }




