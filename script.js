    let formulario = document.querySelector(".formulario");

    console.log(formulario)

    function aparecerFormulario(){
        formulario.style.left = "50%"
    }

    function desaparecerFormulario(){
        formulario.style.left = "-50%"
    }


    const hamburgerButton = document.querySelector("#hamburgerButton");

    //console.log(hamburgerButton)

    const closeButton = document.querySelector("#closeButton");

    //console.log(closeButton)

    const mobileMenu = document.querySelector("#mobileMenu");

    //console.log(mobileMenu)

    hamburgerButton.addEventListener("click", function() {
        mobileMenu.classList.add("flex")
    })

    closeButton.addEventListener("click", function(){
        mobileMenu.classList.remove("flex")
    })