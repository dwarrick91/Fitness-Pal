




let quotes = [
    "You Don't Have To Be Extream, Just Consistent. ",
    "All progress takes place OUTSIDED your confort zone. - Michael John Bobak",
    "I dont count my sit-ups. I only start counting when it starts hurting because theyre the only ones that count. - Muhammad Ali",
    "Take care of your body. Its the only place you have to live. - Jim Rohn",
    "Push harder than yesterday if you want a different tomorrow.",
    "Your body can stand ALMOST anything. Its your MIND that you have to convince. - Andrew Murphy",
    "When you hit failure, your workout has just begun.- Ronnie Coleman",

]

function getQuote() {

    var randomNumer = Math.floor(Math.random()* quotes.length)
    document.getElementById('newQuoteSection').innerHTML = quotes[randomNumer];
}