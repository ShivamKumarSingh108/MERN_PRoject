// import React from 'react'
// import trash from '../trash.svg'
// import { useCart, useDispatchCart } from '../components/ContextReducer';
// export default function Cart() {
 
//     let data = useCart();
//     let dispatch = useDispatchCart();

//     if (data.length === 0) {
//         return (
//           <div>
//             <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
//           </div>
//         )
//       }
    
       
//       const handleCheckOut = async () =>{
//         let userEmail = localStorage.getItem("userEmail");
//         let response = await fetch("http://localhost:5000/api/orderData",{
//             method: 'POST',

//             headers: {
//               'Content-Type': 'application/json'
//             },
//             body:JSON.stringify({
//               order_data: data,
//               email: userEmail,
//               order_date: new Date().toDateString()
//             })
//          }
//         );
//            console.log("Order Response:", response)
//             if (response.status === 200) {
//                dispatch({ type: "DROP" })
//             }
//       }
      
//       let totalPrice = data.reduce((total, food) => total + food.price, 0)
//   return (
//     <div>
//       <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
//         <table className='table table-hover '>
//           <thead className=' text-success fs-4'>
//             <tr>
//               <th scope='col' >#</th>
//               <th scope='col' >Name</th>
//               <th scope='col' >Quantity</th>
//               <th scope='col' >Option</th>
//               <th scope='col' >Amount</th>
//               <th scope='col' ></th>
//             </tr>
//           </thead>
//           <tbody>
//                   {data.map((food, index) => (
//               <tr>
//                 <th scope='row' >{index + 1}</th>
//                 <td >{food.name}</td>
//                 <td>{food.qty}</td>
//                 <td>{food.size}</td>
//                 <td>{food.price}</td>
//                 <td ><button type="button" className="btn p-0"><img src={trash} alt='delete' onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button> </td></tr>
//             ))}
//           </tbody>
//         </table>
//         <div><h1 className='fs-2'>Total Price: {totalPrice}/-</h1></div>
//         <div>
//           <button className='btn bg-success mt-5 ' onClick={handleCheckOut} > Check Out </button>
//         </div>
//       </div>

//     </div>
//   );

// }






import React, { useRef } from 'react'
import trash from '../trash.svg'
import html2canvas from 'html2canvas';

import { useCart, useDispatchCart } from '../components/ContextReducer';
import jsPDF from 'jspdf';
export default function Cart() {

  const pdfRef = useRef();
 
    let data = useCart();
    let dispatch = useDispatchCart();

    if (data.length === 0) {
        return (
          <div>
            <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
          </div>
        )
      }
    
       
      const handleCheckOut = async () =>{
        let userEmail = localStorage.getItem("userEmail");
        let response = await fetch("http://localhost:5000/api/orderData",{
            method: 'POST',

            headers: {
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({
              order_data: data,
              email: userEmail,
              order_date: new Date().toDateString()
            })
         }
        );
           console.log("Order Response:", response)
            if (response.status === 200) {
               dispatch({ type: "DROP" })
            }
      }

      const downloadPDF = ()=>{

        const input = pdfRef.current;
        html2canvas(input).then((canvas)=>{
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF('p','mm','a4',true);
          // const pdfWidth = pdf.internal.pageSize.getWidth();
          // const pdfHeight = pdf.internal.pageSize.getHeight();
          const imgWidth =210;
          const imgHeight =canvas.height* imgWidth / canvas.width;;
          // const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
          // const imgX = (pdfWidth - imgWidth + ratio )/ 2;
          // const imgY = 30;
          // pdf.addImage(imgData,'PNG',imgX, imgY, imgWidth + ratio , imgHeight + ratio );
          pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

          pdf.save('SpicyDay.pdf');
        });
      };






      
      let totalPrice = data.reduce((total, food) => total + food.price, 0)
  return (
    <div ref={pdfRef}>
      <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
        <div><h1>SpicyDay Resturant </h1></div>
        <table className='table table-hover '>
          <thead className=' text-success fs-4'>
            <tr>
              <th scope='col' >#</th>
              <th scope='col' >Name</th>
              <th scope='col' >Quantity</th>
              <th scope='col' >Option</th>
              <th scope='col' >Amount</th>
              <th scope='col' ></th>
            </tr>
          </thead>
          <tbody>
                  {data.map((food, index) => (
              <tr>
                <th scope='row' >{index + 1}</th>
                <td >{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td ><button type="button" className="btn p-0"><img src={trash} alt='delete' onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button> </td></tr>
            ))}
          </tbody>
        </table>
        <div><h1 className='fs-2'>Total Price: {totalPrice}/-</h1></div>
        <div>
          <button className='btn bg-primary mt-5 ' onClick={downloadPDF} > Download PDF </button>
        </div>
        <div>
          <button className='btn bg-success mt-5 ' onClick={handleCheckOut} > Check Out </button>
        </div>
      </div>

    </div>
  );

}






