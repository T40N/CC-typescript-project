// let iconsClassArray = [
//     "devicon-aftereffects-plain",
//     "devicon-amazonwebservices-original",
//     "devicon-android-plain",
//     "devicon-angularjs-plain",
//     "devicon-apache-plain",
//     "devicon-appcelerator-original",
//     "devicon-ceylon-plain",
//     "devicon-appwrite-plain", 
//     "devicon-atom-original",
//     "devicon-babel-plain",
//     "devicon-backbonejs-plain",
//     "devicon-bash-plain",
//     "devicon-behance-plain",
//     "devicon-bitbucket-original"
// ]

class drawCards{
    
    firstCard=[0,1,2,3,4,5,6];
    secondCard=[7,8,9,10,11,12,13];

    draw(array) {
        this.array=array;
        const deleteClass=Math.floor(Math.random() * array.length);
        const randomElement = array[deleteClass];
        array.splice(deleteClass,1);
        
        const deleteElement=Math.floor(Math.random() * this.firstCard.length);
        const elem1=this.firstCard[deleteElement];
        const elem2=document.querySelector(`.icon${elem1}`);
            elem2.classList.add(randomElement,"colored");
        this.firstCard.splice(deleteElement,1);

        const deleteElement2=Math.floor(Math.random() * this.secondCard.length);
        const elem3=this.secondCard[deleteElement2];
        let elem4=document.querySelector(`.icon${elem3}`);
            elem4.classList.add(randomElement,"colored");
            this.secondCard.splice(deleteElement2,1);

        let deck=this.firstCard.concat(this.secondCard);

        for(let i=0; i<deck.length; i++){
            let item=document.querySelector(`.icon${deck[i]}`);
            item.classList.add(array[i],"colored");
        }
    }    
}

// let bla = new drawCards;
// bla.draw(iconsClassArray);

export default drawCards;



