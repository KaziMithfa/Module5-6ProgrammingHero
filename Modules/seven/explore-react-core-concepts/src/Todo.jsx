//  export default  function Todo({task,isDone}){
//     return (
//         <li>Task: {task}</li>

//     )
// }

//conditional rendering

// export default function Todo({ task, isDone }) {
//   if (isDone) {
//     return <li>Finished: {task}</li>;
//   } else {
//     return <li>Work on : {task}</li>;
//   }
// }

// conditional rendering option 2

// export default function Todo({ task, isDone }) {
//   if (isDone) {
//     return <li>Finished: {task}</li>;
//   }

//   return <li>Work on : {task}</li>;
// }

// conditional rendering 3: ternary operator

// export default function Todo({ task, isDone }) {
//   if (isDone) {
//     return <li>Finished: {task}</li>;
//   }

//   return (
//     <li>
//       {isDone ? "Finished" : "Work On"} : {task}
//     </li>
//   );
// }

//conditional rendering option 4: &&

// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {task} {isDone && ": Done"}
//     </li>
//   );
// }

//conditional rendering option 5: ||

export default function Todo({ task, isDone }) {
  return (
    <li>
      {task} {isDone || ": Do it"}
    </li>
  );
}
