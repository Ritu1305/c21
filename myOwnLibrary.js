function bounceOff(z1,z2){

    if (z1.x - z2.x < z2.width/2 + z1.width/2
      && z2.x - z1.x < z2.width/2 + z1.width/2
     ) {
    z1.velocityX =z1.velocityX * (-1) ;
    z2.velocityX = z2.velocityX * (-1) ;
  }
  if( z1.y - z2.y < z2.height/2 + z1.height/2
    && z2.y - z1.y < z2.height/2 + z1.height/2) {
      z1.velocityY =z1.velocityY * (-1) ;
   z2.velocityY = z2.velocityY * (-1) ;
  }
}


function isTouching(z1,z2){

    if (z1.x - z2.x < z2.width/2 + z1.width/2
      && z2.x - z1.x < z2.width/2 + z1.width/2
      && z1.y - z2.y < z2.height/2 + z1.height/2
      && z2.y - z1.y < z2.height/2 + z1.height/2) {
        return true;
   
  }
  else {
   
  return false;
  }
  
  }