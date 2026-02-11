<h1>Barony Save Editor</h1>
<p>A simple webapp for editing savegame-files that can be used for the game <a href="https://www.baronygame.com/">Barony</a>. Basically, you input your save file into the app, edit values, and then export the new save file.</p>
<p>Tested for version 5.01 (on Steam), and for versions pre-5.0 you can use the files in the legacy-folder. It's written in html and javascript, and uses Bootstrap 5 and AngularJS.</p>
<p>You can download it and run it locally in your browser, or <a href="https://groshie.github.io/Barony%20Save%20Editor/Barony_SE.html">use the latest version here</a>!</p>

<h2>What can it do?</h2>
<ul>
  <li>Change game information (dungeon level, game seed, map seed)</li>
  <li>Change general stats (name, gold, hunger, class, etc.)</li>
  <li>Change attributes (strength, agility, max hp, etc.)</li>
  <li>Change proficiencies (thaumaturgy, blocking, sword, etc.)</li>
  <li>Toggle status effects or set timers for them (drunk, magic resist, strength, etc.)</li>
  <li>Add and remove spells (except "Spray Web" and "Arthropod Form" because of duplicates in the game code and I'm lazy - might fix later)</li>
  <li>Add and remove items from a player character's carried inventory.</li>
</ul>

<h2>Screenshots</h2>
<h3>The main app</h3>
<img width="778" height="464" alt="bild" src="https://github.com/user-attachments/assets/02f87d22-d9b9-4359-902a-d2b5a6ac0cde" />
<h3>Proficiencies</h3>
<img width="920" height="141" alt="bild" src="https://github.com/user-attachments/assets/5c517b58-cbde-4da7-bec4-ee07a859df2d" />
<h3>Adding spells</h3>
<img width="909" height="694" alt="bild" src="https://github.com/user-attachments/assets/86f910b7-a514-49fe-959e-af6951c640b9" />

<h2>Known issues</h2>
<ul>
  <li>Minor: Adding the effect "Telepath" may render your held items invisible when loading the game. A workaround for this is to swap items back and forth using the hotbar (so make sure you have your held items on the hotbar!), this seems to have to do with the game's code and not this tool so it's not something I can fix unfortunately.</li>
  <li>Minor: Adding multiple items of the same type may cause the game to treat them as if they are the same item (like, 19 amulets - 1 is worn but every amulet shows the "worn" symbol). A workaround for this is to drop the items on the ground and then pick them up again, as this seems to reset the behaviour.</li>
</ul>

<h2>Disclaimers</h2>
<p>Remember to back up (or simply don't replace) your original save file. I haven't found any problems, but I wouldn't be surprised if there's a possibility to corrupt the save file depending on different combinations.</p>
<p>I am not affiliated with the game or developer of the game in any way, I just enjoy playing and testing - I hope that you will too!</p>
