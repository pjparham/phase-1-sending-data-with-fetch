// Add your code here
const formData = {
    dogName: "Byron",
    dogBreed: "Poodle",
}


const configurationObject = {
    method: "Post",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(formData)
};

// fetch("http://localhost:3000/dogs", configurationObject)
// .then(function (response) {
//     return response.json();
//   })
//   .then(function (object) {
//     console.log(object);
//   })
//   .catch(function (error) {
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);
//   });

function submitData(inputName,inputEmail){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: `${inputName}`,
            email: `${inputEmail}`,
        }),
    })
    .then(function (response) {
        return response.json() //response is files, json is function that converts it to json data
    })
    .then(function(user){
        // console.log(user)
        const main = document.createElement("p");
        main.innerHTML = `${user.id}`
        document.body.append(main)
    })
    .catch(function(error) {
        console.log('here is the error', error.message)
        document.body.innerHTML = error.message
    })
}
