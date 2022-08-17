All game logic is in js <br>


<h1>GAME SCENARIO</h1>
<p>The game scenario was drawn with canvas html</p>
<li>Width : canvas current width (windows current width)</li>
<li>Height : 200px</li>

<br><br>
<h1>SCORE</h1>
<p>For the scoring, the game scenario was divided into 3 areas. Depending on which area the image is in, the score varies.</p>
![game](https://user-images.githubusercontent.com/66964536/185252558-5dade8be-3320-42d6-b58b-bb6bbab16464.JPG)
<br>

<h1>IMAGE VELOCITY</h1>
<p>Every time the user guessed the letter correctly, the number of hits was saved, basically it was done with a conditional (very simple) which, depending on how many images the user had guessed, the speed increased.</p>

<h1>GAME OVER</h1>
<p>Each time the image moved forward its X position was recorded, when the image touched the right side the game was over. To calculate when it would collide with the right side, it was manually tested at what moment the X position of the image touched the right side.</p>
