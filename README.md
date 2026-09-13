# Notifications Page

This is my solution to the **Notifications page** challenge from Frontend Mentor.

I built this project using **React and Tailwind CSS** to practice working with components, props, state, and responsive layouts.

## Preview

![Notifications Page](./src/assets/hero.png)

## Features

* Shows 7 different notifications
* Unread notifications are highlighted
* Shows the number of unread notifications
* Clicking a notification marks it as read
* "Mark all as read" button marks all notifications as read
* Responsive layout for mobile and desktop
* Hover and focus states for interactive elements

## Built With

* React
* Tailwind CSS
* Vite
* JavaScript
* HTML

## What I Practiced

This project helped me practice some React concepts that I was still getting used to, especially **state and props**.

I used `useState` to keep track of the notifications and whether each one is read or unread. I also separated the UI into components instead of putting everything inside one file.

The main components are:

* `App` — manages the notifications and their state
* `Header` — displays the notification title, unread count, and "Mark all as read" button
* `NotificationItem` — displays each individual notification

I also kept the notification information in a separate data file so the components can use the same structure for all the notifications.

## Getting Started

Clone the repository:

```bash
git clone YOUR_REPOSITORY_LINK
```

Go into the project folder:

```bash
cd notifications-react
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal.

## What I Want to Improve

I want to get more comfortable building React projects without relying too much on tutorials or generated code.

For this project, I'd also like to improve the accessibility and maybe add more interactions in the future.

## Challenge

This project is based on the **Frontend Mentor Notifications page challenge**.

Challenge: https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC

## Author

GitHub: https://github.com/ahlamnuru
