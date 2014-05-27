# Wesnoth Bestiary
A web site for browsing game and unit information for The Battle for Wesnoth

Bestiary has been overhauled. Consider this Version 2.

## What is Wesnoth Bestiary?
This is a web site for browsing unit information for a free strategy game called The Battle For Wesnoth. (Not familiar? Check it out at http://www.wesnoth.org) Part of it is an experiment and self-learning to the wonderful ways of JavaScript, jquery, and web design. As I continue to work on the project, it will eventually replace http://units.wesnoth.org.

## Where can I learn more?
Visit the Wesnoth forums, at:
http://forums.wesnoth.org/viewtopic.php?f=6&t=29138

## Changelog
Version 2 Beta 2
* Updated licensing information. There is now a LICENSE.md file which
contains information on all components.
* No longer using underscore.
* Incorporated awesome tablesorter build by mottie!
* Fixed table sorting issues. Name headers now are a static ascending
sort, the rest correctly sort when clicked, and terrain without numbers
always show at the botom.
* Edited preflight so that it automates more content, including
factions.
* Included a unit browser. It’s not complete yet, but it is fully
functional.
* Modified loading and url parsing behvior.
* All sorts of other gooey, yummy bug fixes.

Version 2 Beta 1
* No PHP required. All dynamic loading is handled via JavaScript.
* All data files are generated form a Python file, and have thus been
removed.

Version 2 Build 5
* Re-organized the template.
* Using icon as portrait where there is none.

Version 2 Build 4
24 June 2012
* Reworked layout. Stats are placed prominently earlier in the page now. Left and right divs (may be changed to sections later) are now fixed width.
* Added preliminary support for advancement. Clicking on an advanced unit will load that unit’s page.
* Fixed bug with defense exceptions showing under movement.
* Removed footer.

Version 2 Build 3a
20 June 2012
* Added support for portraits.
* Removed logic for resizing. It’s all fluid, so things should just work.
* Disabled links in nav for now.

Version 2 Build 2b
17 June 2012
* Added attack and resistance icons.
* Added support for attacks.
* Added better CSS so things look nice.
* Added a textured background.

Version 2 Build 1
16 June 2012
* Renamed the project to Wesnoth Bestiary.
* Completely re-designed Bestiary from the ground up.
* Features will be added back in slowly, so as to get things right. Many things have changed; there are new APIs and more features enabled for popular browsers. I plan on leveraging this.

Version 1 Build 1
17 April 2011
* First entire upload of the project.
* Rebuilt Bestiary versus Wesnoth r49262.
* Made changes to table formatting to prepare for table sorting.
* Removed excess unused portraits from the project.
* Updated splitter.php to better handle errors.
* Dynamic loading of manually typed URIs into a web browser’s address bar is broken.

## License
Files in the data directory are licensed under GPL Version 2 as per The Battle for Wesnoth project.
http://www.gnu.org/licenses/gpl-2.0.txt

All other files are licensed under MIT.
http://www.opensource.org/licenses/MIT


Copyright © 2012 ancestral

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.