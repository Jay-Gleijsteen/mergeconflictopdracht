const oldgreeting = require("./oldgreeting.js");
console.log("merge oefening leuk!")

oldgreeting.greet()


function basicHaiku()
{
    return ["Toward those short trees","We saw a Spiderman descending","On a day in summer."]
}
//zet hier je haiku functie neer, zie https://github.com/progsen/haikugitopdracht voor ideeen
function basicHaikustudent1()
{
    return ["My life, - How much more of it remains? The night is brief."]
}

function basicHaikustudent2()
{
    return ["Over the wintry forest, winds howl in rage with no leaves to blow."]
}    
haikus = [
    basicHaiku()
    ,basicHaikustudent1()

    ,basicHaikustudent2()
]

function randomHaiku()
{

    let i = Math.floor(Math.random(haikus.length));
    return haikus[i];
}

function start()
{
    console.log("starting main")
    
    console.log(randomHaiku())

}

start()