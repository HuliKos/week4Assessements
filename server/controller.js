




module.exports = {
    
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
        
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
        
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortune = ["A smile is your personal welcome mat.","A lifetime friend shall soon be made.","A friend asks only for your time not your money.", "A good time to finish up old tasks.", "A lifetime of happiness lies ahead of you."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];
      
        res.status(200).send(randomFortune);
    },
    getPoints: (req, res) => {
        const fortune = ["100","100","100","100"];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];
      
        res.status(200).send(randomFortune);
    },
    createNewPerson: (req, res) => {
        let {name, sp} = req.body
        
        personDb.push({
            name: name,
            sp: sp})
        res.status(200).send(personDb)
    },
    deleteAPerson: (req, res) =>{
        let {name} = req.params

        for(i=0; i<personDb.length; i++){
            if (name === personDb[i].name)
            personDb.splice(i,1)
        }
        res.status(200).send(personDb)
    },
    changeAPerson: (req,res) =>{
        let {nameChange} = req.params
        let {newSpp} = req.query
        console.log(nameChange,newSpp)

        for(i=0; i<personDb.length; i++){
            if ( nameChange === personDb[i].name)
            personDb[i].sp = newSpp
            console.log(personDb[i])
        }
        res.status(200).send(personDb)
    }
}


let personDb = [
    {
        name: "Lan",
        sp: "Future reader"
    },
    {
        name: "D",
        sp: "Invisibility"
    },
    {
        name: "F",
        sp: "Useless"
    }
]