function Header({ unreadCount, onMarkAllRead }) {
  return (
    <div className="flex items-center justify-between px-4 pt-6 pb-4 sm:px-0">
      <div className="flex items-center gap-3">
        <h1 className="text-lg font-extrabold text-navy-950">
          Notifications
        </h1>
        {unreadCount > 0 && (
          <span className="rounded px-2 py-0.5 text-sm font-extrabold text-white bg-blue-950">
            {unreadCount}
          </span>
        )}
      </div>

      <button
        onClick={onMarkAllRead}
        className="text-sm font-medium text-gray-600 hover:text-blue-950 focus:outline-2 focus:outline-blue-950 focus:rounded"
      >
        Mark all as read
      </button>
    </div>
  );
}

export default Header;
