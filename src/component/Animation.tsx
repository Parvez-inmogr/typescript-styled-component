
type Data={
    name:string;
    messageCount:number;
    isLoggedIn:boolean;
}
export const Animation = (props:Data) => {
  return (
    <div>
       <h2>{props.isLoggedIn ? `  Welcome ${props.name} ! you have ${props.messageCount} notiofication`:'Welcome Guest '}</h2>

      
    </div>
  )
}
