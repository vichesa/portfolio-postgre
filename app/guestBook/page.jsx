import Form from "./form";
import MessageList from "./messageList";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const dynamic = "force-dynamic";

const getMessages = async () => {
  const res = await prisma.guest.findMany({
    select: {
      id: true,
      name: true,
      message: true,
      createdAt: true,
    },
  });
  return res;
};

const GuestBook = async () => {
  const messages = await getMessages();
  messages.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <section>
      {/* <div className='my-5 flex flex-col gap-4'> */}
      {/* <h1 className='text-3xl font-bold'>Todo List App</h1> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10">
        <div>
          <h1 className="text-4xl font-bold text-center lg:text-left">
            Guest Book
          </h1>
          <div className="my-10">
            <Form />
          </div>
        </div>
        <div className="lg:ml-10 mt-6">
          <MessageList messages={messages} />
        </div>
      </div>
    </section>
  );
};

export default GuestBook;
