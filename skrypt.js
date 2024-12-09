function informacje()
{
    var extraInfo = document.getElementById("infowiecej")
    var button = document.getElementById("wiecejinfo")

    if (infowiecej.style.display === "none")
    {
        infowiecej.style.display = "block";
        button.textContent = "Ukryj informacje"; 
    }

    else
    {
        infowiecej.style.display = "none";
        button.textContent = "Więcej informacji;"
    }
}

function dogalerii()
{
    window.location.href = "galeria.html";
}