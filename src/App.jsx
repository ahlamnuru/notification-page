import { useState } from "react";
import Header from "./components/Header";
import NotificationItem from "./components/NotificationItem";
import { initialNotifications } from "./data/notifications";

function App() {
  // this holds all our notifications, and each one knows if it's read or not
  const [notifications, setNotifications] = useState(initialNotifications);

  // count how many are still unread, this feeds the little blue badge
  const unreadCount = notifications.filter((n) => n.unread).length;

  // when someone clicks one notification, just flip that one to read
  function handleRead(id) {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, unread: false } : n))
    );
  }

  // when someone clicks "mark all as read", flip everything to read
  function handleMarkAllRead() {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  }

  return (
    <div className="mx-auto min-h-screen max-w-2xl bg-white sm:my-8 sm:rounded-xl sm:p-4 sm:shadow-sm">
      <Header unreadCount={unreadCount} onMarkAllRead={handleMarkAllRead} />

      <ul className="flex flex-col gap-1 px-2 pb-6 sm:px-0">
        {notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            onRead={handleRead}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
