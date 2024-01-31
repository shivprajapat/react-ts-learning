type GreetProps = {
  name: string;
  messageCount?: number;
};

export const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  return (
    <div>
      <h2>
        Hey {props.name}! You have {messageCount} unread messages
      </h2>
    </div>
  );
};
