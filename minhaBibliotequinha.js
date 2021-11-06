function isTouching(COISINHA1,COISINHA2){
    if (COISINHA1.x - COISINHA2.x < COISINHA2.width / 2 + COISINHA1.width / 2&&
      COISINHA2.x - COISINHA1.x < COISINHA2.width / 2 + COISINHA1.width / 2&&
      COISINHA1.y - COISINHA2.y < COISINHA2.height / 2 + COISINHA1.height / 2&&
      COISINHA2.y - COISINHA1.y < COISINHA2.height / 2 + COISINHA1.height / 2){ 
      return true
    } else {
      return false
    }
  }