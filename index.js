let personas = ["Juan", "Chris", "Ariel"];

console.log(personas);

const btn = document.getElementById("alert");

btn.addEventListener("click", mostrarAlerta);



function mostrarAlerta(){
    alert(
        <div class="alert alert-danger" role="alert">
            A simple danger alert—check it out!
        </div>
    )
}