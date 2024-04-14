let noClickCount = 0;

const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const confirmation = document.querySelector(".confirmation");
const container = document.querySelector(".container");
const deathGif = document.createElement('div');
deathGif.classList.add('death-gif');
deathGif.style.backgroundImage = 'url("https://media1.tenor.com/m/1yBa4sGmBQYAAAAC/get-it-together-get-a-grip.gif")';
deathGif.style.backgroundSize = 'cover';
deathGif.style.width = '700px';
deathGif.style.height = '700px';
deathGif.style.position = 'fixed';
deathGif.style.top = '50%';
deathGif.style.left = '50%';
deathGif.style.transform = 'translate(-50%, -50%)';
deathGif.style.zIndex = '9999';
deathGif.style.display = 'none';
document.body.appendChild(deathGif);

const showDeathGif = () => {
    deathGif.style.display = 'block';
    setTimeout(() => {
        deathGif.style.display = 'none';
    }, 3000); // Ocultar o gif após 3 segundos
};

yesAnswerMethod = () => {
    container.style.display = 'none'
    confirmation.style.display = 'block'
}

noAnswerMethod = () => {
    no.style.position = 'absolute'

    xPosition = Math.floor(Math.random() * container.clientWidth)
    yPosition = Math.floor(Math.random() * container.clientHeight)

    no.style.top = `${yPosition}px`
    no.style.left = `${xPosition}px`

    noClickCount++;
    if (noClickCount >= 5) {
        showDeathGif();
        noClickCount = 0; // Reiniciar a contagem após mostrar o gif
    }
};

no.addEventListener('click', noAnswerMethod)
yes.addEventListener('click', yesAnswerMethod)

document.getElementById("fix").addEventListener("click", function(){
    window.location= "https://chat.whatsapp.com/C0sEi1sYY4OEqg3onMiYFh";
}, false);
