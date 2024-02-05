$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, canvas.height, -1, -canvas.height);
    // }
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(canvas.width, i, -canvas.width, -1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    createPlatform(300, 700, 300, 50); // short but wide platform located 500 pixels from the left of the screen and 700 pixels from the top of the screen
    createPlatform(80, 540, 300, 35); // long but wide platform located 150 pixels from the left of the screen and 500 pixels from the top of the screen
    createPlatform(800, 600, 300, 20); // short but wide platform located 600 pixels from the left of the screen and 700 pixels from the top of the screen
    createPlatform(550, 450, 300, 20); // short but wide platform located 600 pixels from the left of the screen and 700 pixels from the top of the screen
    createPlatform(900, 500, 300, 20); // short but wide platform located 670 pixels from the left of the screen and 500 pixels from the top of the screen
    
    // TODO 2
    createCollectable("steve", 600, 650, 20, 0.5); // creates a "steve" collectible at the coordinates (500, 300), falling with a high gravity of 20, and bouncing with 50% bounce
    createCollectable("grace",300 , 300); // creates a "grace" collectible at the coordinates (500, 300), falling with default gravity and bouncing with default bounce %
    createCollectable("grace", 1300, 500); // creates a "grace" collectible at the coordinates (800, 650), falling with default gravity and bouncing with default bounce %
    createCollectable("grace", 900, 400); // creates a "grace" collectible at the coordinates (900, 600), falling with default gravity and bouncing with default bounce %
    createCollectable("grace", 500, 600); // creates a "grace" collectible at the coordinates (900, 600), falling with default gravity and bouncing with default bounce %


    // TODO 3
    createCannon("right",700, 2500); // cannon on right wall, 550px down shooting once every 10 seconds
    createCannon("top",600, 1600); // cannon on right wall, 400px down shooting once every 8 seconds
    createCannon("left",300, 1200); // cannon on right wall, 550px down shooting once every 10 seconds




    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
