const MessageList = ({ messages }) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${monthNames[month]} ${day}, ${year}`;
  }

  return (
    <div className="w-full max-h-[400px] border border-[#33353F] rounded-lg overflow-auto">
      <ul>
        {messages.map((message) => (
          <li
            className="p-4 border-b last:border-b-0 border-[#33353F] bg-[#18191E]"
            key={message.id}
          >
            <h1 className="text-xl font-semibold text-white">{message.name}</h1>
            <p className="text-gray-100">{message.message}</p>
            <p className="text-sm text-right text-gray-400">
              {formatDate(message.createdAt)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;
