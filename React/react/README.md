# Frontend Mentor - Newsletter sign-up form with success message solution

This is my solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FcO1SmMg). Built with React, TypeScript, and Tailwind for my mentorship class.

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after submitting
- See validation messages if the field is empty or the email isn't formatted correctly
- Get a layout that works well on mobile and desktop
- See hover and focus states on everything clickable

### Links

- Solution URL: (add your repo link here)
- Live Site URL: (add your deployed link here)

## My process

### Built with

- React (with Vite)
- TypeScript
- Tailwind CSS
- Mobile-first layout
- useState for the email input, the error message, and whether the form was submitted

### What I learned

This one was mostly about form validation. I wrote a small function called `validateEmail` that takes the typed-in email and gives back either an error message or `null` if it's fine. Because it's TypeScript, I could say the function returns `string | null`, so anywhere I use it I get a reminder that it might come back empty (meaning no error) instead of assuming there's always a message.

The other main thing was switching between the form and the success screen. Instead of hiding/showing things with CSS, I just kept one piece of state (`submittedEmail`) that's either `null` (show the form) or the email string (show the success message). If it has a value, the App component renders `SuccessMessage` instead of `SignupForm` - so there's only ever one of them on the page at a time.

### Continued development

I'd like to look into showing the error message as someone types instead of only after they hit submit, and maybe animating the switch between the form and the success screen instead of it just swapping instantly.
