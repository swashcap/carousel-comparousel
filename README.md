# carousel-comparousel

A comparison of popular [React](https://reactjs.org) carousel libraries.

## Featured libraries

### Nuka Carousel

* **Source code:** https://github.com/FormidableLabs/nuka-carousel
* **Downloads:** ~77K / week ([via npm](https://www.npmjs.com/package/nuka-carousel))
* **Demo(s):** Run locally: https://github.com/FormidableLabs/nuka-carousel#running-demo-locally
* **Documentation:** https://github.com/FormidableLabs/nuka-carousel#props
* **Sizes** (carousel library _and_ application code):
  * **JS:** 19.5kB (gzipped)
  * **CSS:** 1.2kB (gzipped)
* **Notes:**
  * Highly customizeable
  * Features `slidesToShow` and `slidesToScroll` properties to effectively
    display `children` as a group

### React Alice Carousel

* **Source code:** https://github.com/maxmarinich/react-alice-carousel
* **Downloads:** ~18K / week ([via npm](https://www.npmjs.com/package/react-alice-carousel))
* **Demo(s):** n/a
* **Documentation:** https://github.com/maxmarinich/react-alice-carousel#advanced-configuration
* **Sizes** (carousel library _and_ application code):
  * **JS:** 12.8kB (gzipped)
  * **CSS:** 1.6kB (gzipped)
* **Notes:**
  * Lacking demos and extensive documentation
  * Styles broken out of the box

### React Slick

* **Source code:** https://github.com/akiran/react-slick
* **Downloads:** ~654K / week ([via npm](https://www.npmjs.com/package/react-slick))
* **Demo(s):** https://react-slick.neostack.com/docs/example/simple-slider
* **Documentation:** https://react-slick.neostack.com/docs/get-started
* **Sizes** (carousel library _and_ application code):
  * **JS:** 16.0kB (gzipped)
  * **CSS + font:** 3.6kB (gzipped)
* **Notes:**
  * Features `slidesToShow` and `slidesToScroll` properties to effectively
    display `children` as a group
  * TypeScript types not included (although available in `@types/react-slick`)
  * Left and right button styles broken out of the box

### React Responsive Carousel

* **Source code:** https://github.com/leandrowd/react-responsive-carousel
* **Downloads:** ~64K / week ([via npm](https://www.npmjs.com/package/react-responsive-carousel))
* **Documentation:** https://github.com/leandrowd/react-responsive-carousel#customizing
* **Demo(s):** http://react-responsive-carousel.js.org/storybook/?path=/story/01-basic--base
* **Sizes** (carousel library _and_ application code):
  * **JS:** 9.6kB (gzipped)
  * **CSS:** 1.8kB (gzipped)
* **Notes:**
  * Specifically styled for single-image with thumbnails
  * Source in TypeScript
  * Global CSS with common classes (`.slide`)

## Running locally

With [Node.js](https://nodejs.org/en/) (14.4.x) and [yarn](https://yarnpkg.com/)
installed:

1. Install dependencies: `yarn`
2. Build the project: `yarn build`
3. Run the [serve](https://www.npmjs.com/package/serve) file server: `yarn start`
4. Open examples: [localhost:5000](http://localhost:5000)
