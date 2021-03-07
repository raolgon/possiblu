'use strict'

//Algoritmo para generar respuesta aleatoria
const answerGenerator = (e) => {

    //Capturar la respuesta
    const questionInput = document.querySelector('#question').value
    const questionText = document.querySelector('#question_text').innerHTML = questionInput

    //Evitar mandar campos vacios y retornar error
    if(questionInput.length === 0){
        Notiflix.Notify.Failure('No preguntaste nada')
        return false
    }

    //Contenedor de la respuesta
    const answerCardVisibility = document.querySelector('.answer_wrapper').style.visibility = 'visible'

    //Numero aleratorio del 1 al 10
    const randomNumber = Math.floor(Math.random()*11)

    //Renderizar las pregunta y respuesta
    if(randomNumber >= 5){
        answerCardVisibility
        questionText
        document.querySelector('#answer_text').innerHTML = 'NO'
        Notiflix.Notify.Success('Lo siento mucho... ¿o no? ;)')
    } else {
        answerCardVisibility
        questionText
        document.querySelector('#answer_text').innerHTML = 'SI'
        Notiflix.Notify.Success('¡Siiii! Adelante campeón')
    }

    document.querySelector('#form_question').reset()

    e.preventDefault()
}

document.querySelector('#form_btn').addEventListener('click', answerGenerator)