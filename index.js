const buttonElement = document.getElementById('btn') 
const jokeElement = document.getElementById('joke')

const apiKey = '6bnIfWFHJ+mzEQ6Y5Jngjw==ADEZ3XYtYF0A6EkL'

const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1'

const options ={
    method: 'GET',
    headers: { 'X-Api-Key': apiKey},
}
   

async function handleGetJoke(){
    try {
        const response = await fetch (apiURL, options)
        const data = await  response.json()
        
        jokeElement.innerText = data[0].joke
    } catch (error) {
        jokeElement.innerText = 'an error occured'
    }
   
}


buttonElement.addEventListener('click', handleGetJoke)