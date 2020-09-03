var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["89130035-904a-4963-9a70-378ce65110ef","72378cef-ab26-4d17-99e1-f1134ac8adf3","1867f397-f33f-4443-bb21-239f033425cc","9d1aec3d-dd1f-414a-9b7e-a786584dd162","ced7c73a-b61f-443f-bd0f-58d118ea6b0b","7835dc53-b1a7-4eea-a84b-334e69d51dcf","6df689e8-7ab6-4f30-ad9f-0f615f397e2a","076d7a80-b537-49a7-9eed-453d7a2753c3","a6ed4ed4-4075-46c0-8406-9f4b15fcf358","dc7e6892-f480-48ef-a3ce-b9acea2f9115","ce1a178a-7016-467d-ab9d-574b3810a5c5","5539ff09-dbc8-4f2b-8f5f-c3383d0ccac9","760d3521-48e3-40c4-b343-7d3da1f111f2","7424a98c-05c7-4c49-806f-3dcf6e302db5","2c3ae13c-751a-42b8-8f50-821a21c91259","89635feb-c985-475d-b9d9-4fb4870b7969","8eafd66b-51ce-4357-a6c1-6099b8bc7414","5b31081a-8a5a-42f3-927a-224b8b261eab","c7046348-a1ac-4355-aaa3-a9f0ce1a5cf7","b81feec4-df9d-4973-9cf0-b6c130fb71c7","84651fae-0fac-44da-964a-224d78f786d4","2df1faa5-81eb-4409-a022-b9b16acc97fb","38c8f57f-6aa3-48df-9b48-b467bcf02e4a"],"propsByKey":{"89130035-904a-4963-9a70-378ce65110ef":{"name":"mainShip","sourceUrl":null,"frameSize":{"x":400,"y":487},"frameCount":2,"looping":true,"frameDelay":60,"version":"CT3wtN5dQ0_o4UwTyMoh7kuKqeQ2.K2O","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":487},"rootRelativePath":"assets/89130035-904a-4963-9a70-378ce65110ef.png"},"72378cef-ab26-4d17-99e1-f1134ac8adf3":{"name":"mainShipDamaged","sourceUrl":null,"frameSize":{"x":400,"y":487},"frameCount":2,"looping":true,"frameDelay":60,"version":"DkS4P9LIeYlD075zQeIYOXOStFQHKORU","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":487},"rootRelativePath":"assets/72378cef-ab26-4d17-99e1-f1134ac8adf3.png"},"1867f397-f33f-4443-bb21-239f033425cc":{"name":"cannonFlashes","sourceUrl":null,"frameSize":{"x":155,"y":27},"frameCount":4,"looping":true,"frameDelay":12,"version":"8cI5MIm5dbbIjMY28_0dxYJw1XZ2F6P8","loadedFromSource":true,"saved":true,"sourceSize":{"x":155,"y":108},"rootRelativePath":"assets/1867f397-f33f-4443-bb21-239f033425cc.png"},"9d1aec3d-dd1f-414a-9b7e-a786584dd162":{"name":"spacebar","sourceUrl":null,"frameSize":{"x":176,"y":36},"frameCount":2,"looping":true,"frameDelay":30,"version":"DnQ_kReNHd8Zg74r7MnXXkI7EpmotduX","loadedFromSource":true,"saved":true,"sourceSize":{"x":176,"y":72},"rootRelativePath":"assets/9d1aec3d-dd1f-414a-9b7e-a786584dd162.png"},"ced7c73a-b61f-443f-bd0f-58d118ea6b0b":{"name":"spacebarStill","sourceUrl":null,"frameSize":{"x":176,"y":36},"frameCount":1,"looping":true,"frameDelay":12,"version":"ziHLxgnX9GGcqLHqfrC0hekKXNU9PC99","loadedFromSource":true,"saved":true,"sourceSize":{"x":176,"y":36},"rootRelativePath":"assets/ced7c73a-b61f-443f-bd0f-58d118ea6b0b.png"},"7835dc53-b1a7-4eea-a84b-334e69d51dcf":{"name":"clear","sourceUrl":null,"frameSize":{"x":10,"y":10},"frameCount":1,"looping":true,"frameDelay":12,"version":"GzQXxb.M1k.2d72MMj03p5j1qUSnht19","loadedFromSource":true,"saved":true,"sourceSize":{"x":10,"y":10},"rootRelativePath":"assets/7835dc53-b1a7-4eea-a84b-334e69d51dcf.png"},"6df689e8-7ab6-4f30-ad9f-0f615f397e2a":{"name":"islandBothPirates","sourceUrl":null,"frameSize":{"x":320,"y":208},"frameCount":2,"looping":true,"frameDelay":15,"version":"rGZTKJU4t62bs2zr0DcMBBbhkHhhtwWV","loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":416},"rootRelativePath":"assets/6df689e8-7ab6-4f30-ad9f-0f615f397e2a.png"},"076d7a80-b537-49a7-9eed-453d7a2753c3":{"name":"islandOnePirate","sourceUrl":null,"frameSize":{"x":320,"y":208},"frameCount":2,"looping":true,"frameDelay":15,"version":"bu4uWSLwfgAmjlYnYFHgWjI2Gc3uupIQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":416},"rootRelativePath":"assets/076d7a80-b537-49a7-9eed-453d7a2753c3.png"},"a6ed4ed4-4075-46c0-8406-9f4b15fcf358":{"name":"island","sourceUrl":null,"frameSize":{"x":320,"y":208},"frameCount":1,"looping":true,"frameDelay":15,"version":"qVpdPHN80m9i3ULiavNe2J9c0HuzcZ7g","loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":208},"rootRelativePath":"assets/a6ed4ed4-4075-46c0-8406-9f4b15fcf358.png"},"dc7e6892-f480-48ef-a3ce-b9acea2f9115":{"name":"cannonSkeleton","sourceUrl":null,"frameSize":{"x":104,"y":79},"frameCount":2,"looping":true,"frameDelay":20,"version":"Lu8e58VIgSTLuZIjEqKVqqs1zP6_h3UL","loadedFromSource":true,"saved":true,"sourceSize":{"x":104,"y":158},"rootRelativePath":"assets/dc7e6892-f480-48ef-a3ce-b9acea2f9115.png"},"ce1a178a-7016-467d-ab9d-574b3810a5c5":{"name":"swordSkeleton","sourceUrl":null,"frameSize":{"x":46,"y":79},"frameCount":2,"looping":true,"frameDelay":20,"version":".UQfcpzyLGoGb5QhNVOas.mpz9M5Uf0O","loadedFromSource":true,"saved":true,"sourceSize":{"x":92,"y":79},"rootRelativePath":"assets/ce1a178a-7016-467d-ab9d-574b3810a5c5.png"},"5539ff09-dbc8-4f2b-8f5f-c3383d0ccac9":{"name":"pirateCannonFlashes","sourceUrl":null,"frameSize":{"x":108,"y":80},"frameCount":2,"looping":true,"frameDelay":2,"version":"Tpi5sUqVH0f_gXKQ31hWFD1snou1ubKr","loadedFromSource":true,"saved":true,"sourceSize":{"x":108,"y":160},"rootRelativePath":"assets/5539ff09-dbc8-4f2b-8f5f-c3383d0ccac9.png"},"760d3521-48e3-40c4-b343-7d3da1f111f2":{"name":"attack","sourceUrl":null,"frameSize":{"x":96,"y":64},"frameCount":1,"looping":true,"frameDelay":12,"version":"5aKcK09k.a3_RIo78inQUdpt18tL1nR.","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":64},"rootRelativePath":"assets/760d3521-48e3-40c4-b343-7d3da1f111f2.png"},"7424a98c-05c7-4c49-806f-3dcf6e302db5":{"name":"repair","sourceUrl":null,"frameSize":{"x":96,"y":64},"frameCount":1,"looping":true,"frameDelay":12,"version":"72721wRN2wpLzcdFs8HC8YbNpeq_PoSH","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":64},"rootRelativePath":"assets/7424a98c-05c7-4c49-806f-3dcf6e302db5.png"},"2c3ae13c-751a-42b8-8f50-821a21c91259":{"name":"greyHammer","sourceUrl":null,"frameSize":{"x":96,"y":64},"frameCount":1,"looping":true,"frameDelay":12,"version":"errWzksQ2J3KflTyrzUuJkyGBZSE0kW_","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":64},"rootRelativePath":"assets/2c3ae13c-751a-42b8-8f50-821a21c91259.png"},"89635feb-c985-475d-b9d9-4fb4870b7969":{"name":"repairing","sourceUrl":null,"frameSize":{"x":128,"y":64},"frameCount":6,"looping":true,"frameDelay":4,"version":"SE3y_tkc1t.ZoN5H.QHW91y4ym5Z0m6H","loadedFromSource":true,"saved":true,"sourceSize":{"x":256,"y":192},"rootRelativePath":"assets/89635feb-c985-475d-b9d9-4fb4870b7969.png"},"8eafd66b-51ce-4357-a6c1-6099b8bc7414":{"name":"gamble","sourceUrl":null,"frameSize":{"x":96,"y":64},"frameCount":1,"looping":true,"frameDelay":12,"version":"1SakvMI7SWL7YF7gTUnCrrCUKsuxDldh","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":64},"rootRelativePath":"assets/8eafd66b-51ce-4357-a6c1-6099b8bc7414.png"},"5b31081a-8a5a-42f3-927a-224b8b261eab":{"name":"greyDice","sourceUrl":null,"frameSize":{"x":96,"y":64},"frameCount":1,"looping":true,"frameDelay":12,"version":"CvN7yx1ahElO0QpdK1xcTCIOYBc5rHsJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":64},"rootRelativePath":"assets/5b31081a-8a5a-42f3-927a-224b8b261eab.png"},"c7046348-a1ac-4355-aaa3-a9f0ce1a5cf7":{"name":"win","sourceUrl":null,"frameSize":{"x":179,"y":25},"frameCount":1,"looping":true,"frameDelay":12,"version":"Ls7zwchi0FkjDKdG972KjEAVXlIOp5MM","loadedFromSource":true,"saved":true,"sourceSize":{"x":179,"y":25},"rootRelativePath":"assets/c7046348-a1ac-4355-aaa3-a9f0ce1a5cf7.png"},"b81feec4-df9d-4973-9cf0-b6c130fb71c7":{"name":"ocean","sourceUrl":null,"frameSize":{"x":500,"y":95},"frameCount":2,"looping":true,"frameDelay":45,"version":"m0cPxbwbb9fbAUHC.eaLxYN_U1eEleLP","loadedFromSource":true,"saved":true,"sourceSize":{"x":500,"y":190},"rootRelativePath":"assets/b81feec4-df9d-4973-9cf0-b6c130fb71c7.png"},"84651fae-0fac-44da-964a-224d78f786d4":{"name":"gameOver","sourceUrl":null,"frameSize":{"x":292,"y":25},"frameCount":1,"looping":true,"frameDelay":12,"version":"coSGA4TzqA4po_NxFbXRlRKPlngcs5mi","loadedFromSource":true,"saved":true,"sourceSize":{"x":292,"y":25},"rootRelativePath":"assets/84651fae-0fac-44da-964a-224d78f786d4.png"},"2df1faa5-81eb-4409-a022-b9b16acc97fb":{"name":"help","sourceUrl":null,"frameSize":{"x":24,"y":22},"frameCount":1,"looping":true,"frameDelay":12,"version":"9AtffCUHAad5kB2NzuNV1tqKPSv0g.ky","loadedFromSource":true,"saved":true,"sourceSize":{"x":24,"y":22},"rootRelativePath":"assets/2df1faa5-81eb-4409-a022-b9b16acc97fb.png"},"38c8f57f-6aa3-48df-9b48-b467bcf02e4a":{"name":"treasure","sourceUrl":null,"frameSize":{"x":186,"y":118},"frameCount":9,"looping":true,"frameDelay":4,"version":"nQvA7qdQFvjaqVsD3RssUKSTgWd1f1rH","loadedFromSource":true,"saved":true,"sourceSize":{"x":372,"y":590},"rootRelativePath":"assets/38c8f57f-6aa3-48df-9b48-b467bcf02e4a.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

/// Default Settings
  World.frameRate = 60;
  playSound("assets/8bitadventure.mp3", true);
// Font Values
  textFont("Arial Black");
  textSize(35);
/// Definitions
  var bg = rgb(135, 206, 250);
  var autoFire = 0;
  var score = 0;
  var health = 3;
  var repairs = 2;
  var enemyHealth = 2;
  var gambles = 1;
  var creditsVisible = false;
  var textVisible = false;
  var spacebarLock = false;
  var attackLock = true;
  var repairLock = true;
  var gambleLock = true;
  var endGameLock = true;
  var spacebarTouchLock = false;
  var __ = true;
  var repairTouchLock = true;
  var gambleTouchLock = true;
  var endGameTouchLock = true;
  var mainShip = createSprite(200, 238);
  var ocean = createSprite(200, 384);
  var spacebarAuto = createSprite(-90, 50);
  var spacebar = createSprite(205, 50);
  var island = createSprite(600, 300);
  var attack = createSprite(100, 50);
  var repair = createSprite(200, 50);
  var gamble = createSprite(300, 50);
  var cannonFlashes = createSprite(64, 343);
  var pirateCannonFlashes = createSprite(330, 335);
  var hammer = createSprite(80, 280);
  var gameOver = createSprite(200, 60);
  var win = createSprite(175, 60);
  var mouseReset = createSprite(200, 200);
  var help = createSprite(15, 15);
  var treasure = createSprite(200, 300);
// Sprites
  mainShip.setAnimation("mainShip");
  ocean.setAnimation("ocean");
  spacebarAuto.setAnimation("spacebarStill");
  spacebar.setAnimation("clear");
  island.setAnimation("islandBothPirates");
  attack.setAnimation("attack");
  repair.setAnimation("repair");
  gamble.setAnimation("gamble");
  cannonFlashes.setAnimation("clear");
  pirateCannonFlashes.setAnimation("clear");
  hammer.setAnimation("clear");
  gameOver.setAnimation("clear");
  win.setAnimation("clear");
  mouseReset.setAnimation("clear");
  help.setAnimation("help");
  treasure.setAnimation("clear");
  mainShip.scale = 0.5;
  cannonFlashes.scale = 0.5;
  hideControls();
// Start
  setTimeout(function() {
    spacebarAuto.setSpeedAndDirection(1.5, 360);
    setTimeout(function() {
      spacebarAuto.destroy();
      spacebar.setAnimation("spacebar");
    }, 3300);
  }, 2000);
/// New Island 
  function newIsland(time) {
    hideControls();
    setTimeout(function() {
      hideControls();
      island.setSpeedAndDirection(1, 180);
      setTimeout(function() {
        island.setSpeedAndDirection(0, 180);
        island.x = 310; 
        revealControls();
        autoFire = timedLoop(20000, function() {
          playSound("assets/cannonfire.mp3");
          pirateCannonFlashes.setAnimation("pirateCannonFlashes");
          health = health - 1;
          setTimeout(function() {
            stopSound("assets/cannonfire.mp3");
            pirateCannonFlashes.setAnimation("clear");
          }, 1000);
        });
      }, time);
    }, 1000);
  }
/// Hide Controls
  function hideControls() {
    mouseReset.y = 600;
    mouseReset.y = 600;
    stopTimedLoop(autoFire);
    attack.visible = false;
    repair.visible = false;
    gamble.visible = false;
    attackLock = true;
    repairLock = true;
    gambleLock = true;
    endGameLock = true;
    attackTouchLock = true;
    repairTouchLock = true;
    gambleTouchLock = true;
    endGameTouchLock = true;
  }
/// Reveal Controls
  function revealControls() {
    mouseReset.y = 600;
    mouseReset.y = 600;
    attack.visible = true;
    repair.visible = true;
    gamble.visible = true;
    attackLock = false;
    repairLock = false;
    gambleLock = false;
    endGameLock = false;
    attackTouchLock = false;
    repairTouchLock = false;
    gambleTouchLock = false;
    endGameTouchLock = false;
  }
/// End Game
  function endGame() {
    textVisible = true;
    hideControls();
    gameOver.destroy();
    hammer.destroy();
    cannonFlashes.destroy();
    attack.destroy();
    repair.destroy();
    gamble.destroy();
    spacebar.destroy();
    spacebarAuto.destroy();
    island.setSpeedAndDirection(1, 180);
    mainShip.setSpeedAndDirection(0.5, 360);
    win.setAnimation("win");
    stopSound("assets/8bitadventure.mp3");
    playSound("assets/splash.mp3");
    playSound("assets/8bitjoy.mp3", true);
    setTimeout(function() {
      island.destroy();
    }, 8000);
  }
/// Draw
  function draw() {
    background(bg); 
// Time of Day
  if (score >= 500) {
    bg = rgb(50, 50, 50);
  }
/// Help
  if (mouseIsOver(help)) {
    textSize(10);
    textFont("Lucida Console");
    fill(rgb(0, 0, 0));
    text("Press 'E' (or touch the ship) to end the game!", 30, 18);
  }
// Spacebar 
  if (keyWentDown("space")) {
    if (spacebarLock === false) {
      help.destroy();
      spacebarLock = true;
      spacebarTouchLock = true;
      spacebar.destroy();
      spacebarAuto.destroy();
      mouseReset.destroy();
      mainShip.setSpeedAndDirection(1, 180);
      setTimeout(function() {
        mainShip.setSpeedAndDirection(0, 180);
        newIsland(4850);
      }, 2000);
    }
  }
// Attack (1)
  if (keyWentDown("1")) {
    if (attackLock === false) {
      hideControls();
      attackProb();
      cannonFlashes.setAnimation("cannonFlashes");
      playSound("assets/cannonfire.mp3", false);
      setTimeout(function() {
        cannonFlashes.setAnimation("clear");
        stopSound("assets/cannonfire.mp3");
        if (enemyHealth > 0) {
          revealControls();
        }
      }, 1000);
    }
  }
// Repair (2)
  if (keyWentDown("2")) {
    if (repairLock === false) {
      hideControls();
      repairs = repairs - 1;
      health = health + 1;
      playSound("assets/repair.mp3", false);
      hammer.setAnimation("repairing");
      setTimeout(function() {
        hammer.setAnimation("clear");
        stopSound("assets/repair.mp3");
        revealControls();
      }, 2000);
    }
  }
// Gamble (3)
  if (keyWentDown("3")) {
    if (gambleLock === false) {
      hideControls();
      enemyHealth = randomNumber(2, 4);
      playSound("assets/splash.mp3", false);
      newIsland(12600);
      repairs = repairs + 2;
      gambles = gambles - 1;
      if (repairs > 1) {
        repairs = repairs - 2;
      }
      setTimeout(function() {
        island.setAnimation("islandBothPirates");
      }, 6000);
    }
  }
// End Game (E)
  if (keyWentDown("e")) {
    if (endGameLock === false) {
      endGame();
    }
  }
// Touch Detection
  if (mouseIsOver(spacebar) || (mouseIsOver(attack) || (mouseIsOver(repair) || (mouseIsOver(gamble) || (mouseIsOver(mainShip)))))) {
    if (mouseDidMove()) {
      mouseReset.x = World.mouseX;
      mouseReset.y = World.mouseY;
    }
  }
// Spacebar Tap
  if (mouseReset.isTouching(spacebar)) {
    if (spacebarTouchLock === false) {
      mouseReset.x = 0;
      mouseReset.y = 0;
      spacebarTouchLock = true;
      spacebarLock = true;
      help.destroy();
      spacebar.destroy();
      spacebarAuto.destroy();
      mainShip.setSpeedAndDirection(1, 180);
      setTimeout(function() {
        mainShip.setSpeedAndDirection(0, 180);
        newIsland(5100);
      }, 2000);
    }
  }
// Attack Tap
  if (attackTouchLock === false) {
    if (mouseReset.isTouching(attack)) {
      hideControls();
      attackProb();
      cannonFlashes.setAnimation("cannonFlashes");
      playSound("assets/cannonfire.mp3", false);
      setTimeout(function() {
        cannonFlashes.setAnimation("clear");
        stopSound("assets/cannonfire.mp3");
        revealControls();
      }, 1000);
   }
  }
// Repair Tap
  if (repairTouchLock === false) {
    if (mouseReset.isTouching(repair)) {
      hideControls();
      repairs = repairs - 1;
      health = health + 1;
      playSound("assets/repair.mp3", false);
      hammer.setAnimation("repairing");
      setTimeout(function() {
        hammer.setAnimation("clear");
        stopSound("assets/repair.mp3");
        revealControls();
      }, 2000);
   }
  }
// Gamble Tap
  if (gambleTouchLock === false) {
    if (mouseReset.isTouching(gamble)) {
      hideControls();
      enemyHealth = randomNumber(2, 4);
      playSound("assets/splash.mp3", false);
      newIsland(12600);
      repairs = repairs + 1;
      gambles = gambles - 1;
      if (repairs > 1) {
        repairs = repairs - 1;
      }
      setTimeout(function() {
        island.setAnimation("islandBothPirates");
      }, 6000);
    }
  }
// End Game Tap
  if (endGameTouchLock === false) {
    if (mouseReset.isTouching(mainShip)) {
      mouseIsOver(mouseReset);
      endGame();
    }
  }
/// Island Reset
  if (island.x === -200) {
    island.setAnimation("islandBothPirates");
    island.x = 550;
  }
  if (mainShip.x === 500) {
    mainShip.destroy();
  }
  if (enemyHealth === 1) {
    island.setAnimation("islandOnePirate");
  }
/// Attack Ouputs 
  function attackProb() {
    if (randomNumber(1, 2) == "1") {
      enemyHealth = enemyHealth - 1;
      if (enemyHealth < 2) {
        score = score + 50;
      }
    } else {
      health = health - 1;
      pirateCannonFlashes.setAnimation("pirateCannonFlashes");
      cannonFlashes.setAnimation("clear");
      cannonFlashes.visible = false;
      setTimeout(function() {
        cannonFlashes.visible = true;
        pirateCannonFlashes.setAnimation("clear");
      }, 1000);
    }
  }
/// Damaged Ship
  if (health === 1) {
    mainShip.setAnimation("mainShipDamaged");
  } else {
    mainShip.setAnimation("mainShip");
  }
/// Repairs Value Check
  if (repairs <= 0) {
    repairLock = true;
    repairTouchLock = true;
    repair.setAnimation("greyHammer");
  } else {
    repair.setAnimation("repair");
  }
  if (repairs <= 0) {
    repairTouchLock = true;
    repairLock = true;
  }
/// Gambles Value Check
  if (gambles <= 0) {
    gambleLock = true;
    gambleTouchLock = true;
    gamble.setAnimation("greyDice");
  }
/// Game Over
  if (health === 0) {
    hideControls();
    win.destroy();
    hammer.destroy();
    cannonFlashes.destroy();
    attack.destroy();
    repair.destroy();
    gamble.destroy();
    spacebar.destroy();
    spacebarAuto.destroy();
    mainShip.destroy();
    gameOver.setAnimation("gameOver");
    stopSound("assets/8bitadventure.mp3");
    playSound("assets/8bitspacegroove.mp3", true);
  }
/// Score
  if (enemyHealth === 0) {
    repairs = repairs + 1;
    island.setAnimation("island");
    newIsland(12600);
    enemyHealth = randomNumber(2, 5);
    setTimeout(function() {
      playSound("assets/treasure.mp3");
      treasure.setAnimation("treasure");
    }, 800);
    setTimeout(function() {
      treasure.setAnimation("clear");
    }, 1400);
  }
  if (textVisible === true) {
    text(score, 275, 71);
  }
/// Credits
  if (keyWentDown("c")) {
    creditsVisible = true;
    textVisible = false;
  }
  if (creditsVisible === true) {
    stopTimedLoop(autoFire);
    attackLock = true;
    repairLock = true;
    gambleLock = true;
    endGameLock = true;
    attackTouchLock = true;
    repairTouchLock = true;
    gambleTouchLock = true;
    endGameTouchLock = true;
    mainShip.destroy();
    ocean.destroy();
    spacebarAuto.destroy();
    spacebar.destroy();
    island.destroy();
    attack.destroy();
    repair.destroy();
    gamble.destroy();
    cannonFlashes.destroy();
    pirateCannonFlashes.destroy();
    hammer.destroy();
    gameOver.destroy();
    win.destroy();
    mouseReset.destroy();
    help.destroy();
    treasure.destroy();
    textSize(18);
    text("Testers:", 30, 150);
    text("Luke Goldsine", 100, 200);
    text("Sebastian Fernandez", 100, 250);
  }
 drawSprites();
}
/// Links
// "8-bit Joy!"
// https://youtu.be/TdXFHKjJopI
// "8-bit Space Groove!
// https://youtu.be/Bok8nLviThg
// "Adventure Meme - Kevin MacLeod"
// https://youtu.be/ibP2W2N1STo
// Power Up Sound Effect
// https://youtu.be/ysjX9meRrbQ
// Cannon Fire Sound Effect
// http://soundbible.com/909-Cannon.html
// Repair Hammer Sound Effect
// http://www.freesfx.co.uk/rx2/mp3s/2/14076_1459886700.mp3
// Wave Sound Effect
// http://soundbible.com/309-Wave-Crashing-At-Beach.html
// I do not own any of the audio used in this program.
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
