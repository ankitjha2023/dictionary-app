const input = document.getElementById('input')
const btn = document.getElementById('btn')
const inputWord = document.getElementById('input-word')
const sound = document.getElementById('sound')
const meaning = document.getElementById('meaning')
const example = document.getElementById('example')
const musicBtn =  document.querySelector('.fa-music')

btn.addEventListener('click',()=>{


    if(input.value==""){
        inputWord.innerHTML = "Input Field is empty"
    }else{
        inputWord.innerHTML = "Meaning of : "+input.value
        const inputValue = input.value
       
        fetchUrl(inputValue)
    }
})

const fetchUrl = async(inputValue) => {
    
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}` 

    let res = await fetch(url)
    if(res.status===404){
        inputWord.innerHTML= "Word Not found"
        
    }else{
        let data = await res.json()
        
        meaning.innerHTML = data[0].meanings[0].definitions[0].definition
        example.innerHTML = data[0].meanings[0].definitions[1].example
       musicBtn.style.display="block"
       sound.src=data[0].phonetics[1].audio
       
       musicBtn.addEventListener('click',()=>{
                sound.play()
       })
    }
  
   
    
}
