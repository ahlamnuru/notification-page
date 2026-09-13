# Frontend Mentor - Notifications page solution

This is my solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC). This one was for my class, so i used it to practice building with React and Tailwind instead of just plain HTML/CSS.

## Overview

### The challenge

Users should be able to:

- Tell the difference between "unread" and "read" notifications
- Click "Mark all as read" to make all the unread ones read and set the unread count to zero
- Get a layout that works well on both mobile and desktop
- See hover and focus states on the clickable stuff (the notifications and the button)

### Links

- Solution URL: (add your repo link here)
- Live Site URL: (add your deployed link here)

## My process

### Built with

- React (with Vite)
- Tailwind CSS
- Mobile-first layout
- useState for keeping track of which notifications are read/unread

### What I learned

This was my first time building something in React instead of plain HTML/JS. The main thing i had to get my head around was state - instead of grabbing an element and changing its class like i would in vanilla JS, in React you just update a piece of state (like `unread: false` on a notification) and React re-renders the page for you.

I split the page into three components:
- `Header` - the title, the unread count badge, and the mark all as read button
- `NotificationItem` - one single notification card
- `App` - holds all the notification data and passes it down to the other two

Clicking a notification or the "mark all as read" button both work by updating the same `notifications` array in state, just in different ways.

### Continued development

Next time i want to get more comfortable with things like relative timestamps updating automatically, and maybe try adding a small backend so the "read" status actually saves instead of resetting on refresh.
That's it