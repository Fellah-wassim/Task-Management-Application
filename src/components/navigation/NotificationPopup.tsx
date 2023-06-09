interface Notification {
  id: number;
  title: string;
  description: string;
}

const NotificationPopup: React.FC = () => {
  const notifData: Notification[] = [
    {
      id: 1,
      title: "Notification 1",
      description: "This is the description of notification 1.",
    },
    {
      id: 2,
      title: "Notification 2",
      description: "This is the description of notification 2.",
    },
    {
      id: 3,
      title: "Notification 3",
      description: "This is the description of notification 3.",
    },
    {
      id: 4,
      title: "Notification 4",
      description: "This is the description of notification 4.",
    },
    {
      id: 5,
      title: "Notification 5",
      description: "This is the description of notification 5.",
    },
  ];

  return (
    <div className="absolute top-16 right-4 bg-white w-80 rounded-lg shadow-lg overflow-hidden">
      <div className="flex justify-between border-b border-gray-200 p-4">
        <div className="font-bold text-gray-900">Notifications</div>
        <div className="text-sm text-gray-600 cursor-pointer hover:text-gray-800">
          Mark all as read
        </div>
      </div>
      <ul>
        {notifData.map((notification) => (
          <li
            className="p-4 cursor-pointer hover:bg-gray-100"
            key={notification.id}
          >
            <div className="flex flex-col items-start">
              <p className="font-semibold text-gray-900">
                {notification.title}
              </p>
              <div className="text-sm text-gray-600">
                {notification.description}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationPopup;
