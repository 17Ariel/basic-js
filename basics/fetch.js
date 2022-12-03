// let displayData = document.querySelector("#root");
// let result = "";
// const getUsers = async () => {
//   // const url = await fetch(" http://localhost:3000/users");
//   // const datas = await url.json();
//   // datas.forEach((data) => {
//   //   result += `
//   //       <li>${data.first_name} ${data.last_name} with an email of ${data.email}</li>
//   //     `;
//   // });
//   // displayData.innerHTML = result;
//   console.log("hey");
// };

// document.querySelector("#button").addEventListener("button", getUsers);

// // const createUser = async () => {
// //   let fname = document.querySelector("#fname").value;
// //   let lname = document.querySelector("#lname").value;
// //   let email = document.querySelector("#email").value;

// //   let data = { fname, lname, email };
// //   const url = await fetch(" http://localhost:3000/users", {
// //     method: "POST",
// //     headers: { "Content-type": "application/json" },
// //     body: JSON.stringify(data),
// //   });
// //   const res = await url.json();
// //   console.log(res);
// // };

// // const form = document.querySelector("form");
// // form.addEventListener("submit", (e) => {
// //   e.preventDefault();
// //   let fname = document.querySelector("#fname").value;
// //   let lname = document.querySelector("#lname").value;
// //   let email = document.querySelector("#email").value;
// //   let data = { fname, lname, email };

// //   async () => {
// //     try {
// //       const url = await fetch(" http://localhost:3000/users", {
// //         method: "POST",
// //         headers: { "Content-type": "application/json" },
// //         body: JSON.stringify(data),
// //       });
// //       const res = await url.json();
// //       console.log(res);
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };
// // });

//get

let displayData = document.querySelector("#root");
let result = "";

const fetchUser = async () => {
  const url = await fetch(" http://localhost:3000/users");
  const datas = await url.json();
  datas.forEach((data) => {
    result += `
            <li>
              <span>
                ${data.first_name} ${data.last_name} with an email of ${data.email}
              </span>
              <a href='javascript:void(0)' id='deletebtn' onclick="deleteOne(${data.id})">Delete</a>
            </li>
          `;
  });
  displayData.innerHTML = result;
};

window.addEventListener("load", fetchUser);

//delete request in fetch api
// function deleteUser(id) {
//   fetch(`http://localhost:3000/users/${id}`, {

//   })
//     .then((res) => res.json())
//     .catch((err) => {
//       throw err;
//     });
// }

const deleteOne = async (id) => {
  const url = await fetch(`http://localhost:3000/users/${id}`, {
    method: "DELETE",
  });
  const data = await url.json();
  console.log(data);
};

//post
const addForm = document.querySelector("#addForm");
const clearField = () => {
  document.querySelector("#fname").value = "";
  document.querySelector("#lname").value = "";
  document.querySelector("#email").value = "";
};
const createUser = async (e) => {
  e.preventDefault();
  let first_name = document.querySelector("#fname").value;
  let last_name = document.querySelector("#lname").value;
  let email = document.querySelector("#email").value;
  let data = { first_name, last_name, email };
  clearField();
  try {
    const url = await fetch(" http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
    const res = await url.json();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
addForm.addEventListener("submit", createUser);

let displaySearch = document.querySelector("#searchResult");
let searchData = "";
const searchForUser = async () => {
  let searchInput = document.querySelector("#searchinput").value;
  const url = await fetch(`http://localhost:3000/users?search=${searchInput}`);
  const data = await url.json();
  data.forEach((search) => {
    searchData += `
      <li>${search.first_name} ${search.last_name}</li>
    `;
  });
  displaySearch.innerHTML = searchData;
};

document
  .querySelector("#searchinput")
  .addEventListener("keypress", searchForUser);
