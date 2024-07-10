
// async function getData() {

//   try {

//     const response = await fetch("http://localhost:3000/user/:id");

//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const json = await response.json();
//     console.log(json);

//   } catch (error) {
//     console.error(error.message);
//   }
// }

// const fetchData = function() {

//   fetch("http://localhost:3000/user/12", {
//     headers : { 
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//      }
//   })

//   .then(function(res) {
//       if (res.ok) {
//           return res.json();
//       } else {
//         console.log("non")
//       }
//   })
// }


// fetch('http://localhost:3000/')
// .then(function (response) {
//     return response.json();
// })
// .then(function (data) {
//     // Do something with data
// });

// var responseClone; // 1
// fetch('http://localhost:3000/user/:id')
// .then(function (response) {
//     responseClone = response.clone(); // 2
//     return response.json();
// })
// .then(function (data) {
//     // Do something with data
//     console.log(data)
// }, function (rejectionReason) { // 3
//     console.log('Error parsing JSON from response:', rejectionReason, responseClone); // 4
//     responseClone.text() // 5
//     .then(function (bodyText) {
//         console.log('Received the following instead of valid JSON:', bodyText); // 6
//     });
// });
