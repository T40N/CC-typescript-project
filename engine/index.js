const cards=document.querySelectorAll('.game-card')

const doubles={
   double: "devicon-flask-original",
   first:[
      "devicon-apache-plain",
      "devicon-atom-original",
      "devicon-confluence-original",
      "devicon-c-plain",
      "devicon-flask-original"
   ],
   second:[
      "devicon-flask-original",
      "devicon-html5-plain",
      "devicon-jquery-plain",
      "devicon-linux-plain",
      "devicon-mongodb-plain"
   ],
   third:[
      "devicon-materialui-plain colored",
      "devicon-redhat-plain colored",
      "devicon-sourcetree-original colored",
      "devicon-typo3-plain colored",
      "devicon-yunohost-plain colored"
   ]
}

const change=(counter)=>{
   while(cards[counter].childNodes.length>0){
      cards[counter].removeChild(cards[counter].childNodes[0])
   }

   doubles.third.forEach(item=>{
      const container=document.createElement('div')
      const icon=document.createElement('i')

      container.appendChild(icon)
      icon.setAttribute('class', item)
      icon.style='font-size: 50px;'
      container.style='width: 50px; height: 50px; margin: 10px;'

      container.addEventListener('click', ()=>{
         console.log(container.childNodes[0].className);
      })

      cards[counter].appendChild(container)
   })
}

   doubles.first.forEach(item=>{
      const container=document.createElement('div')
      const icon=document.createElement('i')

      container.appendChild(icon)
      icon.setAttribute('class', item)
      icon.style='font-size: 50px;'
      container.style='width: 50px; height: 50px; margin: 10px;'

      container.addEventListener('click', ()=>{
         if(container.childNodes[0].className==doubles.double)
            change(0)
      })

      cards[0].appendChild(container)
   })

   doubles.second.forEach(item=>{
      const container=document.createElement('div')
      const icon=document.createElement('i')

      container.appendChild(icon)
      icon.setAttribute('class', item)
      icon.style='font-size: 50px;'
      container.style='width: 50px; height: 50px; margin: 10px;'
      
      container.addEventListener('click', ()=>{
         if(container.childNodes[0].className==doubles.double)
            change(1)
      })

      cards[1].appendChild(container)
   })