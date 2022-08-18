
This is a simple game where the user they have to guess the first letter of the image. <br>
When the user guess the image, this image will change and in the left side appears a new image. The more images the user guesses, the faster the new images will move.<br><br>
<h4>All game logic is in js</h4>

<h1>GAME SCENARIO</h1>
<p>The game scenario was drawn with canvas html</p>
<li>Width : windows width</li>
<li>Height : 200px</li>

The images appears in this canvas and they moved from left to right on X position.

<br><br>
<h1>SCORE</h1>
<p>For the scoring, the game scenario was divided into 3 areas. Depending on which area the image is in, the score varies.</p>
<br>
![game](https://user-images.githubusercontent.com/66964536/185252558-5dade8be-3320-42d6-b58b-bb6bbab16464.JPG)
<br>

<h1>IMAGE VELOCITY</h1>
<p>Every time the user guessed the letter correctly, the number of hits was saved, basically it was done with a conditional (very simple) which, depending on how many images the user had guessed, the speed increased.<strong>Canvas was used to insert the image and apply said speed on X position</strong>.</p>

<h1>GAME OVER</h1>
<p>Each time the image moved forward its X position was recorded, when the image touched the right side the game was over. To calculate when it would collide with the right side, it was manually tested at what moment the X position of the image touched the right side.</p>
