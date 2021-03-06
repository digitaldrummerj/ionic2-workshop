// More info https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
	slideNumber: 'h.v / t',
	history: true,
	controls: true,
	progress: true,
	center: true,
	width: 1280,
	height: 768,
	transition: 'slide', //none/fade/slide/convex/concave/zoom
	// More info https://github.com/hakimel/reveal.js#dependencies
	dependencies: [
		{ src: 'plugin/markdown/marked.js', condition: function () { return !!document.querySelector('[data-markdown]'); } },
		{ src: 'plugin/markdown/markdown.js', condition: function () { return !!document.querySelector('[data-markdown]'); } },
		{ src: 'plugin/notes/notes.js', async: true },
		{ src: 'plugin/fullscreen/fullscreen.js' },
		{ src: 'plugin/highlightjs-nonplug/highlight.pack.js' },

		{ src: 'plugin/menu/menu.js' },
		{
			src: 'plugin/reveal-code-focus/reveal-code-focus.js',
			async: true,
			callback: function () {
				RevealCodeFocus();
			}
		}
		// { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
				],

				menu: {
		// Specifies which side of the presentation the menu will 
		// be shown. Use 'left' or 'right'.
		side: 'left',

		// Add slide numbers to the titles in the slide list.
		// Use 'true' or format string (same as reveal.js slide numbers)
		numbers: false,

		// Specifies which slide elements will be used for generating
		// the slide titles in the menu. The default selects the first
		// heading element found in the slide, but you can specify any
		// valid css selector and the text from the first matching
		// element will be used.
		// Note: that a section data-menu-title attribute or an element
		// with a menu-title class will take precedence over this option
		titleSelector: 'h1, h2, h3, h4, h5, h6',

		// Hide slides from the menu that do not have a title.
		// Set to 'true' to only list slides with titles.
		hideMissingTitles: false,

		// Add markers to the slide titles to indicate the 
		// progress through the presentation
		markers: false,

		// Specify custom panels to be included in the menu, by
		// providing an array of objects with 'title', 'icon'
		// properties, and either a 'src' or 'content' property.
		custom: false,

		// Specifies the themes that will be available in the themes
		// menu panel. Set to 'false' to hide themes panel.
		themes: [
			{ name: 'Black', theme: 'css/theme/black.css' },
			{ name: 'White', theme: 'css/theme/white.css' },
			{ name: 'League', theme: 'css/theme/league.css' },
			{ name: 'Sky', theme: 'css/theme/sky.css' },
			{ name: 'Beige', theme: 'css/theme/beige.css' },
			{ name: 'Simple', theme: 'css/theme/simple.css' },
			{ name: 'Serif', theme: 'css/theme/serif.css' },
			{ name: 'Blood', theme: 'css/theme/blood.css' },
			{ name: 'Night', theme: 'css/theme/night.css' },
			{ name: 'Moon', theme: 'css/theme/moon.css' },
			{ name: 'Solarized', theme: 'css/theme/solarized.css' },
			{ name: 'ionic', theme: 'css/theme/ionic.css' }
		],

		// Specifies if the transitions menu panel will be shown.
		transitions: true,

		// Adds a menu button to the slides to open the menu panel.
		// Set to 'false' to hide the button.
		openButton: true,

		// If 'true' allows the slide number in the presentation to
		// open the menu panel. The reveal.js slideNumber option must 
		// be displayed for this to take effect
		openSlideNumber: false,

		// If true allows the user to open and navigate the menu using
		// the keyboard. Standard keyboard interaction with reveal
		// will be disabled while the menu is open.
		keyboard: true

				}
});

Reveal.addEventListener('ready', function (/*e*/) {
				var aTags = document.getElementsByTagName('a');
				for (var i = 0; i < aTags.length; i++) {
		aTags[i].setAttribute('target', '_blank');
				}
});