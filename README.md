# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

![desktop-preview](https://user-images.githubusercontent.com/94350356/210324115-278ca447-10c7-48b2-88cc-2bad5a36cb7e.jpg)


### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

Desktop-view:
![active-states](https://user-images.githubusercontent.com/94350356/210324169-c8f81693-56a3-437a-ba57-3da88d251dad.jpg)

![complete-state-desktop](https://user-images.githubusercontent.com/94350356/210324201-400f29c9-b9d2-4048-8f37-62f8dba2bc3a.jpg)

Mobile-view:

![mobile-design](https://user-images.githubusercontent.com/94350356/210324243-86860cae-cc80-48e3-a2d2-27864e5e3f26.jpg)

![complete-state-mobile](https://user-images.githubusercontent.com/94350356/210324260-6a86fb1f-7f19-4bc7-b83c-16209d6fc02d.jpg)



### Links

- Solution URL: [Solution](https://www.frontendmentor.io/solutions/interactive-card-details-form-_diKgg7KiT)
- Live Site URL: [Live site](https://deepaktech40-card-details-form.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JS validation
- Mobile-first workflow

### What I learned

I learned a lot through this project especially form validation using JS

```js
form1El.addEventListener("submit", (e) => {
  let flag = true;
  e.preventDefault();
  for (let i = 0; i < 5; i++) {
    const inEl = document.querySelector(`.i${i}`);
    const errEl = document.querySelector(`.e${i}`);
    if (inEl.value == "") {
      inEl.style.border = `1px solid var(--Red)`;
      errEl.style.display = `block`;
      flag = false;
    }
  }
  if (flag) {
    form1El.style.display = "none";
    form2El.style.display = `flex`;
  }
```

## Author

- Frontend Mentor - [@DEEPAK-tech40](https://www.frontendmentor.io/profile/DEEPAK-tech40)
