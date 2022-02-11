// TODO: Declare any global variables we need
let heads = 0;
let tails = 0;
let flipHeads
document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons
const flipButton = document.querySelector('#flip')
flipButton.addEventListener('click', function(){
    let flipHeads = Math.random() < 0.5;


    if (flipHeads === true){
        

        document.getElementById('penny-img').src = './assets/images/penny-heads.jpg'
        heads++
    }else{
       
        document.getElementById('penny-img').src = './assets/images/penny-tails.jpg'
        
        tails++
    }

    


    // Calculate total number of rolls
let total = heads + tails

// Create variables to track percent heads and tails
let percentHeads = 0
let percentTails = 0

if (total > 0) {
    // Calculate percentage of heads and tails
    percentHeads = Math.round((heads / total) * 100)
    percentTails = Math.round((tails / total) * 100)
}

// Update the values in the scoreboard table

document.getElementById('heads').textContent = heads
document.getElementById('heads-percent').textContent = percentHeads + '%'
document.getElementById('tails').textContent = tails
document.getElementById('tails-percent').textContent = percentTails + '%'
});


document.getElementById('clear').addEventListener('click', function () {
    // Reset the heads and tails values to zero
    headsRolls = 0
    tailsRolls = 0

    // Update the message to the user

    // Update the scoreboard
    
    // Calculate total number of rolls
    let total = headsRolls + tailsRolls

    // Create variables to track percent heads and tails
    let percentHeads = 0
    let percentTails = 0

    // Before trying to divide, make sure total is not zero
    if (total > 0) {
        // Calculate percentage of heads and tails
        percentHeads = Math.round((headsRolls / total) * 100)
        percentTails = Math.round((tailsRolls / total) * 100)
    }

    // Update the values in the scoreboard table
    document.getElementById('heads').textContent = headsRolls
    document.getElementById('heads-percent').textContent = percentHeads + '%'
    document.getElementById('tails').textContent = tailsRolls
    document.getElementById('tails-percent').textContent = percentTails + '%'
})



    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})