function istouching(fixedrect,movingrect ) {
    if (fixedrect.x-movingrect.x<=fixedrect.width/2+movingrect.width/2 &&
      movingrect.x-fixedrect.x<=fixedrect.width/2+movingrect.width/2 &&
      fixedrect.y-movingrect.y<=fixedrect.height/2+movingrect.height/2 &&
      movingrect.y-fixedrect.y<=fixedrect.height/2+movingrect.height/2) {
        return true;
      }
      else
      return false;
  }