import avatarMarkWebber from "../assets/images/avatar-mark-webber.webp";
import avatarAngelaGray from "../assets/images/avatar-angela-gray.webp";
import avatarJacobThompson from "../assets/images/avatar-jacob-thompson.webp";
import avatarRizkyHasanuddin from "../assets/images/avatar-rizky-hasanuddin.webp";
import avatarKimberlySmith from "../assets/images/avatar-kimberly-smith.webp";
import avatarNathanPeterson from "../assets/images/avatar-nathan-peterson.webp";
import avatarAnnaKim from "../assets/images/avatar-anna-kim.webp";
import imageChess from "../assets/images/image-chess.webp";

// this is just the starting data for all the notifications
// "unread" gets flipped to false once someone clicks the notification
export const initialNotifications = [
  {
    id: 1,
    avatar: avatarMarkWebber,
    name: "Mark Webber",
    action: "reacted to your recent post",
    target: "My first tournament today!",
    time: "1m ago",
    unread: true,
  },
  {
    id: 2,
    avatar: avatarAngelaGray,
    name: "Angela Gray",
    action: "followed you",
    time: "5m ago",
    unread: true,
  },
  {
    id: 3,
    avatar: avatarJacobThompson,
    name: "Jacob Thompson",
    action: "has joined your group",
    target: "Chess Club",
    time: "1 day ago",
    unread: true,
  },
  {
    id: 4,
    avatar: avatarRizkyHasanuddin,
    name: "Rizky Hasanuddin",
    action: "sent you a private message",
    time: "5 days ago",
    unread: false,
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
  },
  {
    id: 5,
    avatar: avatarKimberlySmith,
    name: "Kimberly Smith",
    action: "commented on your picture",
    time: "1 week ago",
    unread: false,
    image: imageChess,
  },
  {
    id: 6,
    avatar: avatarNathanPeterson,
    name: "Nathan Peterson",
    action: "reacted to your recent post",
    target: "5 end-game strategies to increase your win rate",
    time: "2 weeks ago",
    unread: false,
  },
  {
    id: 7,
    avatar: avatarAnnaKim,
    name: "Anna Kim",
    action: "left the group",
    target: "Chess Club",
    time: "2 weeks ago",
    unread: false,
  },
];
