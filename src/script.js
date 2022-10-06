const weight = document.getElementById('weight');
const size = document.getElementById('size');
const result = document.getElementById('result');
const infos = document.getElementById('infos');
const btn = document.getElementById('btn');

// Calcul de l'IMC
btn.addEventListener('click', () => 
{
    const calcul = (parseFloat(weight.value) / (parseFloat(size.value) * parseFloat(size.value))) / 0.0001;
    const calculFinal = Math.round(calcul * 10) / 10
    result.innerHTML = "<b>" + calculFinal + "<b>";
    infos.innerHTML = infoIMC(calculFinal);
});

function infoIMC(valueIMC)
{
    let info;

    if (valueIMC <= 0 || weight.value <= 0  || size.value <= 0)
    {
        info = "<br> Remplissez correctement les inputs";
        result.style.color = '#f00';
        result.innerHTML = "🤨";
    }
    else if (valueIMC > 100 || valueIMC < 10)
    {
        info = "<br> Alors comme ça on essaye de rentrer des valeurs aberrantes ?";
        result.style.color = '#f00';
        result.innerHTML = "🤭";
    }
    else if (valueIMC < 18.5) // #04145
    {
        info = "<br> Résultat : Maigreur 😕";
        result.style.color = '#250064';
    } else if (valueIMC < 24.9) {
        info = "<br> Résultat : Bonne santé 👍🏼";
        result.style.color = '#059a00';
    } else if (valueIMC < 29.9) {
        info = "<br> Résultat : Surpoids 😬";
        result.style.color = '#d77700';
    } else {
        info = "<br> Résultat : Obésité ⚠️";
        result.style.color = '#f00';
    }

    return info;
}