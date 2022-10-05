function points(games) {
    return games.reduce((sum,current)=>{
      const [x,y]=current.split(':') 
      return ((x>y?3:x===y?1:0) + sum)
    },0)
    }