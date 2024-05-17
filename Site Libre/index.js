let isMessageValid = true;
let isUrlValid = null;

const messageArea = document.getElementById('description');

messageArea.addEventListener('change', function () {
    const message = messageArea.value;

    if(message.trim().length < 2) {
        messageArea.classList.add('is-invalid');
        isMessageValid = false;
    } else {
        messageArea.classList.remove('is-invalid');
        isMessageValid = true;
    }
});

const inputUrl = document.querySelector('#formUrl');
inputUrl.value = ""

inputUrl.addEventListener('change', function () {
    const urlValue = inputUrl.value;
    console.log(urlValue);

    if (urlValue.startsWith('file://') || urlValue.startsWith('https://') || urlValue.startsWith('www.')) {
        inputUrl.classList.remove('is-invalid')
        inputUrl.classList.add('is-valid')
        console.log('okay');
        isUrlValid = true;
    } else if (urlValue == null || urlValue == '') {
        inputUrl.classList.add('is-invalid')
        inputUrl.classList.remove('is-valid')
        console.log("empty string");
        isUrlValid = false;
    } else {
        inputUrl.classList.add('is-invalid')
        inputUrl.classList.remove('is-valid')
        isUrlValid = false;
    }
})

const recipeData = JSON.parse(localStorage.getItem('galleries'));
recipeData.map( (e, key) => {
    createFigure(key, e.url, e.description)
})

function formListener () {
    const forms = document.querySelectorAll('.needs-validation')
    console.log("hello world!");

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            const url = inputUrl.value
            const description = document.querySelector("#description")
            const data = {"description": description.value,
                "url": url
            }
            const figures = document.querySelectorAll("figure")

            if (!isMessageValid || !isUrlValid) {
                console.log(isUrlValid, isMessageValid, description.value, url);
                event.preventDefault()
                event.stopPropagation()
                console.log('not okay');
            } else {
                recipeData.push(data);
                localStorage.setItem('galleries', JSON.stringify(recipeData));
                figures.forEach((e) => {
                    e.remove();
                })
                recipeData.map( (e, key) => {
                    createFigure(key, e.url, e.description)
                })
            }
        }, false)
    })
}

formListener()


function createFigure (key, url, description) {
    const parent = document.querySelector(".figureParent")
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const figcaption = document.createElement('figcaption');

    figure.className = "figure col-12 col-sm-6 col-lg-4"
    figure.setAttribute("id", key)

    img.setAttribute('src', url);
    img.setAttribute('alt', description);
    img.className = "figure-img img-fluid rounded"
    img.setAttribute("data-bs-target", "#exampleModal")
    img.setAttribute("data-bs-toggle", "modal")
    img.setAttribute("role", "button")

    figcaption.textContent = description
    figcaption.className = "figure-caption"

    figure.appendChild(img);
    figure.appendChild(figcaption);
    parent.appendChild(figure);
}


// const data = [{"hello": "world",
//     "world":"hello world"},
//     {"world":"hello world"}
// ]


// const firstImage = [{"description": "One Piece",
//     "url": "https://t4.ftcdn.net/jpg/05/62/02/41/360_F_562024161_tGM4lFlnO0OczLYHFFuNNdMUTG9ekHxb.jpg"},
// {"description": "One Piece",
//     "url": "https://t4.ftcdn.net/jpg/05/62/02/41/360_F_562024161_tGM4lFlnO0OczLYHFFuNNdMUTG9ekHxb.jpg"}]
// localStorage.setItem('galleries', JSON.stringify(firstImage));

// const hola = JSON.parse(localStorage.getItem('test'));

// console.log(recipeData);

// for (let i = 3; i < recipeData.length ; i++) {
//     recipeData.splice(i); 
// }

// localStorage.setItem('galleries', JSON.stringify(recipeData));

// console.log(recipeData);

function modaleUpdator() {
    recipeData.map(function (el, key) {
        const button = document.createElement('button');
        const buttonParent = document.querySelector('.carousel-indicators');
        
        button.setAttribute('type', 'button');
        button.setAttribute('data-bs-target', '#carouselExampleCaptions');
        button.setAttribute('data-bs-slide-to', key);
        button.setAttribute('aria-label', `Slide ${key ++}`);

        const parentDivImage = document.querySelector('.carousel-inner');
        const div = document.createElement('div');
        const img = document.createElement('img');
        const underDiv = document.createElement('div');
        const p = document.createElement("p");

        div.classList.add('carousel-item');
        div.setAttribute('pid', key);
        img.src = el.url;
        img.classList.add('d-block');
        img.classList.add('w-100');
        img.setAttribute('alt', el.description);
        underDiv.className = 'carousel-caption d-none d-md-block'
        p.textContent = el.description;
        buttonParent.appendChild(button)
        parentDivImage.appendChild(div);
        div.appendChild(img);
        div.appendChild(underDiv);
        underDiv.appendChild(p);
    })
}


let modaleIdActive = null
const figures = document.querySelectorAll('figure');
figures.forEach(function (e) {
    e.addEventListener('click', function () {
        const id = e.getAttribute('id');
        const modaleButton = document.querySelector(`button[data-bs-slide-to="${id}"]`)
        const modaleImage = document.querySelector(`div[pid="${id}"]`)

        modaleButton.classList.add('active');
        modaleButton.setAttribute('aria-current', 'true');
        modaleImage.classList.add('active');
        modaleIdActive = id;
    })
})

modaleUpdator();

const closeModale = document.querySelectorAll('.closermodale')
closeModale.forEach(function (e) {
    e.addEventListener('click', function () {
        const modaleButton = document.querySelector(`button[class="active"]`)
        // const modaleImage = document.querySelector(`div[class="active"]`)
        console.log(modaleButton);
        // modaleButton.classList.remove('active');
        // modaleButton.removeAttribute('aria-current');
        // modaleImage.classList.remove('active');
        // modaleIdActive = null;
    })
})