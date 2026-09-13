function NotificationItem({ notification, onRead }) {
  const { avatar, name, action, target, time, unread, message, image } =
    notification;

  return (
    <li
      onClick={() => onRead(notification.id)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onRead(notification.id);
        }
      }}
      tabIndex={0}
      role="button"
      className={`flex gap-4 rounded-lg p-4 cursor-pointer focus:outline-2 focus:outline-blue-950 ${
        unread ? "bg-navy-50 hover:bg-blue-100" : "hover:bg-navy-50"
      }`}
    >
      <img
        src={avatar}
        alt={name}
        className="h-10 w-10 shrink-0 rounded-full"
      />

      <div className="flex flex-1 justify-between gap-4">
        <div>
          <p className="text-sm text-navy-950">
            <span className="font-extrabold">{name}</span>{" "}
            <span className="text-gray-600">{action}</span>{" "}
            {target && <span className="font-extrabold">{target}</span>}
            {unread && (
              <span className="ml-2 inline-block h-2 w-2 rounded-full bg-red-500 align-middle"></span>
            )}
          </p>

          <p className="mt-1 text-sm text-gray-500">{time}</p>

          {message && (
            <p className="mt-3 rounded-lg border border-navy-100 p-3 text-sm text-gray-600 hover:bg-navy-100">
              {message}
            </p>
          )}
        </div>

        {image && (
          <img
            src={image}
            alt="Chess club post"
            className="h-10 w-10 shrink-0 rounded-lg"
          />
        )}
      </div>
    </li>
  );
}

export default NotificationItem;
