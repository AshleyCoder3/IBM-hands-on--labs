
/*
React component with styled props
*/
// function App(props) {
//     const colorStyle = {
//         color:props.color,
//         fontsize:props.size
//     }
//   return (
//     <div>
//       <div style={colorStyle}>
//           Hello World!
//       </div>
//     </div>
//   );
// }

/*
setting props from outside and maintain the state of the component inside.
The state that will be maintained will be the number of times the button is clicked
*/
// import {useState} from "react";
//
// const App = (props) =>{
//     const [counter, setCounter] = useState(0);
//
//     let incrementCounter = () =>{
//         setCounter(counter + 1);
//     }
//
//     let colorStyle={
//         color: props['color'],
//         fontSize: props['size']
//     }
//     return (
//             <div style={colorStyle}>
//                React Component
//                 <br/><br/>
//                 <button onClick={incrementCounter}>Click Me!</button>
//                 <br/><br/>
//                 {counter}
//             </div>
//     );
// }
//

/*
Retrieving state from an asynchronous method call with axios
 */
import {useEffect, useState} from "react";
import axios from "axios";

const App = (props)=> {
    //define the state and the setter
    const [APIlist, setAPIlist] = useState();
    //On load invoke method to genrate list
    useEffect(() => {  let url = "https://api.publicapis.org/entries?category=Animals";
        axios({
            method: 'get',
            url: url,
            responseType: 'json'
        }).then(resp => {
            let listOfEntries = resp.data.entries;
            let listOfEntriesAsArray = Object.entries(listOfEntries);
            let i=1;
            let entryDetails = listOfEntriesAsArray.map((entryDetail)=>{
                return(
                    <tr key={i++}>
                        <td key={i++} style={{color: "red",border: "1px solid black"}}>
                            {entryDetail[1]["API"]}
                        </td>
                        <td key={i++} style={{color: "red",border: "1px solid black"}}>
                            {entryDetail[1]["Link"]}
                        </td>
                    </tr>
                )
            })
            setAPIlist(entryDetails);
        })
            .catch(err => {
                console.log(err.toString())
            });
    }, []);
    const colorStyle = { color:props['color'], fontSize:props['size']}
    return (
        <div>
            <h2>APIs List</h2>
            <br/>
            <div style={colorStyle}><ul>{APIlist}</ul></div>
        </div>
    );
}


export default App;

