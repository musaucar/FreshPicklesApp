const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  try {
    axios({
      method: "post",
      url: "http://localhost:3000/api/user-create",
      data: {
        name: document.getElementById("first-name").value,
        surname: document.getElementById("last-name").value,
        email: document.getElementById("input-email").value,
        password: document.getElementById("input-password").value,
      },
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        //handle success
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'user created successfully.',
          showConfirmButton: false,
          timer: 3000
        })
        console.log(response);
        form.reset()
      })
      .catch(function (error) {
        //handle error
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Validation Error. Please check your informations.',
        })
        console.log("Burasi ilk catch",error);
      });    
  } catch (error) {
    console.log(error);
  }
});
