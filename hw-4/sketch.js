//Calling the setup function:
function setup() {

  //Creating a 600-pixel-wide by 900-pixel-tall canvas:
  createCanvas( 600, 900 );

}

/////////////////////////////////////////////////

//Calling the draw function:
function draw() {

  //Moving the 'pen' laying down the images to the center of the canvas:
  translate( 300, 450 );

  //** BACKGROUND *******************************
  push();

    //Setting the background color:
    background( 'MediumSpringGreen' );

    fill ( 'Gold' );
    noStroke();

      arc( -300, -300, -500, -500, radians( 360 ), radians ( 0 ) );

    fill ( 'Aquamarine' );

      arc( 300, -500, 500, 500, radians( 360 ), radians( 0 ) );

  //** END BACKGROUND ***************************
  pop();

/////////////////////////////////////////////////

  //** PERSON ***********************************
  push();

    //** TORSO ************************
    push();

      fill( 'MediumPurple' );
      stroke( 'SlateBlue' );
      strokeWeight( 20 );

        //Chest
        quad( -200, 50, -100, 200, -280, 500, 200, 200 );

      fill( 100, 200 );
      stroke( 'LightGreen' );
      strokeWeight( 25 );

        //Shirt
        quad( -400, 175, 250, 150, 150, 300, 200, 500 );


    //** END TORSO ********************
    pop();

/////////////////////////////////////////////////

    //** HEAD *************************
    push();

      fill( 'MediumPurple' );
      stroke( 'SlateBlue' );
      strokeWeight( 20 );

      rect( -175, -250, 350, 375, 0, 300, 150, 150 );

      //** EYES *************
      push();

        fill( 'DarkTurquoise' );
        stroke( 'Black' );
        strokeWeight ( 2 );

        //Left Eye

          //Retina
          arc( -85, -125, 50, 50, 0, radians( 90 ) );

        noFill();

          //Eyebag
          arc( -90, -117, 60, 60, radians ( 30 ), radians ( 150 ) );

          //Eyelashes
          arc( -85, -125, 70, 70, radians ( 180 ), radians ( 215 ) );
          arc( -90, -125, 70, 70, radians ( 180 ), radians ( 215 ) );
          arc( -95, -125, 70, 70, radians ( 180 ), radians ( 215 ) );

        fill( 0, 75 );

          //Eyelid
          arc( -90, -125, 80, 80, radians ( 200 ), radians ( 350 ), CHORD );

        //Right Eye
        translate ( 150, 0 );
        fill ( 'DarkTurquoise' );

          //Retina
          arc( -85, -125, 50, 50, 0, radians( 90 ) );

        noFill();

          //Eyebag
          arc( -90, -117, 60, 60, radians( 30 ), radians( 150 ) );

          //Eyelashes
          arc( -85, -125, 70, 70, radians( 180 ), radians( 215 ) );
          arc( -90, -125, 70, 70, radians( 180 ), radians( 215 ) );
          arc( -95, -125, 70, 70, radians( 180 ), radians( 215 ) );

        fill( 0, 75 );

          //Eyelid
          arc( -90, -125, 80, 80, radians( 200 ), radians( 350 ), CHORD );

      //** END EYES *********
      pop();

      //** NOSE *************
      push();

        stroke( 'Black' );
        strokeWeight( 2 );

          line( -25, -75, 5, -20 );

      //** END NOSE *********
      pop();

      //** MOUTH ************
      push();

        fill( 'MediumSpringGreen' );
        stroke( 'Black' );
        strokeWeight( 2 );

          arc( 0, 50, 100, 30, radians( 0 ), radians( 180 ) );

      //** END MOUTH ********
      pop();

    //** END HEAD *********************
    pop();

  //** END PERSON *******************************
  pop();

}
