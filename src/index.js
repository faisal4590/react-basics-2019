//import the react and ReactDom libraries
import React from "react"; //React hocce variable er name.. react dependancy theke sob kusi React var e store hocce
import ReactDOM from "react-dom";
import faker from "faker";
//Importing components
import CommentDetails from "./components/CommentDetails";
import ApprovalCards from "./components/ApprovalCard";

/*
/// for chap 1,2,3(functional component)


//create a react component
const App = () => {
 
  return (
    

    <div className="ui container comments">
      <ApprovalCards>
        <CommentDetails
          author="faisal"
          timeAgo="Today at 5.00PM"
          comments="This is a nice blog"
          avatar={faker.image.avatar()}
        />
      </ApprovalCards>

      <ApprovalCards>
        <CommentDetails
          author="tamim"
          timeAgo="Today at 2.00AM"
          comments="Hola amigos"
          avatar={faker.image.avatar()}
        />
      </ApprovalCards>

      <ApprovalCards>
        <CommentDetails
          author="shakib"
          timeAgo="Today at 3.00PM"
          comments="React is awesome"
          avatar={faker.image.avatar()}
        />
      </ApprovalCards>
    </div>
    

    <div>hello</div>
  );
};

*/

/// for chap 4(Display season app)
class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    );

    return <div>Lattitude: </div>;
  }
}

//Take the react component and show it on the screen

ReactDOM.render(<App />, document.querySelector("#root"));
