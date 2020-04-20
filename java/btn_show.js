 function start()
{
    document.getElementById("texte").style.visibility="hidden";

}

 window.onload=start();
 function afficher_cacher()
{
    if(document.getElementById("texte").style.visibility=="hidden")
    {
        document.getElementById("texte").style.visibility="visible";
        document.getElementById("bouton_texte").innerHTML='En savoir moins';
    }
    else
    {
        document.getElementById("texte").style.visibility="hidden";
        document.getElementById("bouton_texte").innerHTML='En savoir plus';
    }
    return true;
}