document.addEventListener("DOMContentLoaded", () => {

    // all button elements
    const buttons = document.getElementsByTagName('button')
    const buttonsArray = Array.from(buttons)

    // counter elements
    const counter = document.getElementById('counter')
    counter.innerText = '0'

    // + & - button elements
    const minusButton = document.getElementById('minus')
    const plusButton = document.getElementById('plus')

    // like button elements
    const likeButton = document.getElementById('heart')
    const likesList = document.querySelector('.likes')

    // pause button elements
    const pauseButton = document.getElementById('pause')
    let stop = false

    // comment elements
    const newComment = document.getElementById('comment-form')
    const commentsList = document.getElementById('list')

    // 1. As a user, i should see the timer increment every second once the page has loaded
    // runs counterIncrement 1x per second
    setInterval(() => {
        counterIncrement(counter)
    }, 1000)

    // increments the innerText of the counter header
    function counterIncrement(counter){
        if (stop === true){
            return
        } else {
        let counterNum = parseInt(counter.innerText)
        counterNum++
        counter.innerText = counterNum
        }
    }

    // 2. As a user, i can manually increment and decrement the counter as i like
    plusButton.addEventListener("click", () => {
        let counterNum = parseInt(counter.innerText)
        counterNum ++
        counter.innerText = counterNum
    })

    minusButton.addEventListener("click", () => {
        let counterNum = parseInt(counter.innerText)
        counterNum--
        counter.innerText = counterNum
    })

    // 3. As a user, i can like an individual number of the counter. 
    // I should see the appropriate number of likes associated with that particular number
    likeButton.addEventListener("click", () =>{
        let counterNum = counter.innerText
        if ((document.getElementById(counterNum))!= null){
            let likedNum = document.getElementById(counterNum)
            let numOfLikes = document.getElementById(counterNum).nextElementSibling
            numOfLikes.innerText = (parseInt(numOfLikes.innerText))+1
        } else {
            let likesLi = document.createElement("li")
            let liLikedNum = document.createElement("p")
            liLikedNum.setAttribute("id", counterNum)
            liLikedNum.innerText = `Number: ${counterNum}, Number of Likes: `
            likesLi.appendChild(liLikedNum)
            let liNumOfLikes = document.createElement("p")
            liNumOfLikes.innerText = 1
            likesLi.appendChild(liNumOfLikes)
            likesList.appendChild(likesLi)
        }     
    })

    // 4. As a user I can pause the game, which should disable all buttons except the pause button, which should now show the text 'resume'
    pauseButton.addEventListener("click", () =>{
        if (stop === false){
            stop = true
            buttonsArray.forEach(button => {
                if (button.id != "pause"){
                button.disabled = true}
            })
                pauseButton.innerText = "resume"
        } else if (stop === true){
            stop = false
            buttonsArray.forEach(button => {
                button.disabled = false})            
                pauseButton.innerText = "pause"
        }
    })
    
    // 5. As a user I can leave comments on my gameplay, such as "Wow, what a fun game this is"
    newComment.addEventListener("submit", (event) => {
        event.preventDefault()
        let comment = document.createElement("p")
        comment.innerText = event.target[0].value
        commentsList.appendChild(comment) 
    })
})