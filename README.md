# Wesnoth Bestiary
A web site for browsing game and unit information for *The Battle for Wesnoth.*

**You can view it live at: http://wesnoth.io**

## What is Wesnoth Bestiary?
This is a web site for browsing unit information for a free strategy game called *The Battle For Wesnoth.* (Not familiar? Check it out at http://www.wesnoth.org)

As I continue to work on the project, the goal is it will eventually replace http://units.wesnoth.org.

## Features
* Rich, visual layout with unit portraits and icons
* Navigable unit trees
* Various stats for each unit, including sortable tabular data for terrain and resistance statistics
* Dynamic AJAX loading and clean URLs
* Automatic site generator for external server deployment

## Work To Do
* Build against trunk again (or just wait for 1.12 stable)
* Display spinner animation while portraits are loading
* Write code to build unit trees
* Wire it to read existing eras and add-ons

## Where can I learn more?
Visit the Wesnoth forums, at:
http://r.wesnoth.org/t29138

## Changelog
Version 0.5.2 (11)
4 November 2014

* Updated Readme file.

Version 0.5.1 (10)
15 June 2014

* Re-numbered versions historically. Numebring is now in the format “major.minor (build)”.
* Updated Readme file.
* Updated License file.
* Font sizes are now almost all divisible by 7.

Version 0.5 (9)
27 May 2014

* Added Khalifate and miscenllaenous units to browser.
* Various fixes to nav bar.
* Fixed alignment issue with unit &lt;li&gt; elements.
* Tablesorter updates on new load.
* Image-rendering blurring turned off.
* optimizeLegibility reversed.

Version 0.4 (8)
28 June 2013

* Updated licensing information. There is now a LICENSE.md file which contains information on all components.
* No longer using underscore.
* Incorporated awesome tablesorter build by mottie!
* Fixed table sorting issues. Name headers now are a static ascending sort, the rest correctly sort when clicked, and terrain without numbers always show at the botom.
* Edited preflight so that it automates more content, including factions.
* Included a unit browser. It’s not complete yet, but it is fully functional.
* Modified loading and url parsing behvior.
* All sorts of other gooey, yummy bug fixes.

Version 0.3 (7)
24 May 2014

* No PHP required. All dynamic loading is handled via JavaScript.
* All data files are generated form a Python file, and have thus been removed.

Version 0.2.4 (6)
28 June 2012

* Re-organized the template.
* Using icon as portrait where there is none.

Version 0.2.3 (5)
24 June 2012

* Reworked layout. Stats are placed prominently earlier in the page now. Left and right divs (may be changed to sections later) are now fixed width.
* Added preliminary support for advancement. Clicking on an advanced unit will load that unit’s page.
* Fixed bug with defense exceptions showing under movement.
* Removed footer.

Version 0.2.2 (4)
20 June 2012

* Added support for portraits.
* Removed logic for resizing. It’s all fluid, so things should just work.
* Disabled links in nav for now.

Version 0.2.1 (3)
17 June 2012

* Added attack and resistance icons.
* Added support for attacks.
* Added better CSS so things look nice.
* Added a textured background.

Version 0.2 (2)
16 June 2012

* Renamed the project to Wesnoth Bestiary.
* Completely re-designed Bestiary from the ground up.
* Features will be added back in slowly, so as to get things right. Many things have changed; there are new APIs and more features enabled for popular browsers. I plan on leveraging this.

Version 0.1 (1)
17 April 2011

* First entire upload of the project.
* Rebuilt Bestiary versus Wesnoth r49262.
* Made changes to table formatting to prepare for table sorting.
* Removed excess unused portraits from the project.
* Updated splitter.php to better handle errors.
* Dynamic loading of manually typed URIs into a web browser’s address bar is broken.

## License
All files here are licensed under MIT.
http://www.opensource.org/licenses/MIT


Copyright © 2014 ancestral

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
