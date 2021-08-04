# HaylzWebsite
 Repo for website haylzrandom.co.uk

### Table of contents
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

### Development Process

This is an on-going project that will be updated as I go along learning new web development skills.

First Iteration

Made after doing a few HTML and CSS lessons. Colour scheme was chosen from my logo using [Adobe Color Wheel](https://color.adobe.com/create/color-wheel)

![First iteration](https://raw.githubusercontent.com/HaylzRandom/HaylzWebsite/development/dist/img/oldwebsite.png)

Second Iteration

After learning more about HTML5, CSS3 and SASS/SCSS I created the following style. This is based on a website tutorial from FreeCodeCamp - [Sass Tutorial for Beginners - CSS With Superpowers](https://youtu.be/_a5j7KoflTs)

![Second Iteration](https://raw.githubusercontent.com/HaylzRandom/HaylzWebsite/development/dist/img/haylzwebsite.png)

### Built with

- Semantic HTML5 markup
- CSS3
- SASS/SCSS
- Flexbox
- CSS Grid
- Mobile-first workflow

## What I learned
With building this second iteration and also other challenges I am learning more and more how SASS/SCSS works and how useful it is as a development tool.

The fact that you can next classes within parent nodes helps me a lot to keep track of what CSS attributes belong to where.

```
.jobs {
// Styles go here
	&__job {
	// Styles go here
		h2, h3 {
	// Styles go here
		}
		h6 {
	// Styles go here
		}
		ul {
	// Styles go here
		}
	}
}
```

Learning the mobile-first approach has also been useful as back when I first did web development (in roughly 2008 - 2012 at Uni) it wasn't a common appproach. I e joy making the product fit onto a mobile first and then work on using media queries etc to allow for size adjustments on larger screens.

### Continued Development

I will continue to develop this website as I progress with my training.

I would like to include the following in the future:

- Search function
- Hobbies section
- Light/Dark Toggle

### Useful Resources

Some resources I have found useful while building this website:

- [CSS Tricks](https://css-tricks.com/) - Very useful in trying to understand flexbox and CSS grid but also other things
- [MDN](https://developer.mozilla.org/en-US/) - Will be consistently using this while learning web development ♥
- [FreeCodeCamp YouTube](https://www.youtube.com/c/Freecodecamp) - Been using many of their tutorials on website and YouTube to build many projects
