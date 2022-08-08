const weight = document.getElementById('weight');
const size = document.getElementById('size');
const result = document.getElementById('result');
const infos = document.getElementById('infos');
const btn = document.getElementById('btn');

// Calcul de l'IMC
btn.addEventListener('click', () => 
{
    const calcul = (parseFloat(weight.value) / (parseFloat(size.value) * parseFloat(size.value))) / 0.0001;
    result.innerHTML = "Vous avez un IMC de <b>" + calcul + "<b>";
    infos.innerHTML = infoIMC(calcul);
});

function infoIMC(valueIMC)
{
    let info;

    if (valueIMC < 18.5) 
    {
        info = "Poids insuffisant et pouvant occasionner certains risques pour la santé";
    } else if (valueIMC < 24.9) {
        info = "Poids qui n'augmente pas les risques pour la santé.";
    } else if (valueIMC < 29.9) {
        info = "Excès de poids pouvant occasionner certains risques pour la santé.";
    } else {
        info = "Obésité, risque accru de développer certaines maladies.";
    }

    return info;
}