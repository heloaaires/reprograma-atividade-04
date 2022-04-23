    //A
    for(let i = 1; i <= 50; i = i + 1) {
      console.log(i)
    }
    console.log('Terminou a letra A')

   //B
    for(let i = 1; i <=50;  i = i + 1) {
        console.log(i)
      
        if(i === 25) {
          break
        }  
      }
      console.log("Parou no 25 e terminou a letra B")

    //C

    for(let i = 1; i <= 50; i = i + 1) {
        if(i === 10){
            console.log("Pulei o 10")
            continue
        }
        
        console.log(i)
      }
      console.log('Terminou a letra C')
   