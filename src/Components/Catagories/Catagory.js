// import React, { useEffect, useState } from 'react'
// import { useStateValue } from '../../StateProvider/StateProvider';

// function Catagories() {
//     const [{ basket }, dispatch] = useStateValue();
//     const [electronics, setElectron] = useState([])
    

//     useEffect(() => {
//         fetch(`https://fakestoreapi.com/products/${basket.category}`)
//           .then((res) => res.json())
//           .then((json) => setElectron(json));
      
//     }, [])
//     console.log(electronics);
//     return (
//       <div>
//         {electronics.map((electron, index) => (
//           <div key={index}>
//             <img src={electron.image} alt="" />
//             <h3>{electron.price}</h3>
//           </div>
//         ))}
//         ghjj
//       </div>
//     );
// }

// export default Catagories
