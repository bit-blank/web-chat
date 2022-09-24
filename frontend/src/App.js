import './App.css';

const MessageBubble = ({text, alignment}) => {
  var className = "MessageBubble";
  if (alignment === "right") className += " Right"
  
  return <span className={className}>{text}</span>;
}

const MessageList = () => {
  return (
  <div className="MessageList">
    <MessageBubble text="Message sent by me"/>
    <MessageBubble text="Message received by me" alignment="right"/>
    <MessageBubble text="Message sent by me"/>
    <MessageBubble text="Message received by me" alignment="right"/>
  </div>
  );
}

const App = () => {
  return (
  <form className="ChatWindow" onSubmit={() => {}}>
    <MessageList/>
    <div className='UserInput'>
    <input type="text" placeholder="Enter message here..."/>
    <input type="submit" value="Send message"/>
    </div>
  </form>
  );
}

export default App;
