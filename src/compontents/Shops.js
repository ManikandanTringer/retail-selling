import React from 'react'
import { useState } from 'react';
// import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Autocomplete } from '@mui/material';
import productDetails from '../productDetails';
import { useSelector } from 'react-redux';
import "../App.css"

// export default function FormDialog() {

//     </div>
//   );
// }

 const Shops = () => {
 
    const [newItem,setNewItem]=useState({name:'',price:'',quantity:''})
    const [open, setOpen] = React.useState(false);
    const [selectedName,setSelectedName]=useState("")
    const [selectedprice,setSelectedPrice]=useState("")
    const handleClickOpen = () => {
      setOpen(true);        
    };
  
    const handleClose = () => {
      setOpen(false);
      console.log(newItem)
    };
    const handleChange = e => {
      const { name, value } = e.target;
      setNewItem(prevState => ({
          ...prevState,
          [e.target.name]: value
      }));
    }
              //     const handlePrice = e =>{
              //     // const handlePrice = e ={(event,value)=>{
              //       // const price = useSelector((state) => state.productDetails.productItems((m) => {
              //         // console.log(m)
                    
                    
              //         // return m.name == e.target.value ? console.log(m.price)
              //     // }))
              //       setNewItem(prevState=>({...prevState,name: value,price:productDetails.productItems.price}))}}
              //     // console.log(newItem)
              // };
  const handleName = e => {
    const { name, value } = e.target;
    setNewItem(prevState => ({
        ...prevState,
        name: value
    }));
    // console.log(newItem)
};

const checkPrice=(productItem)=>{
    productDetails.productItems.map((item)=>{
      if(item.name===selectedName){
          setSelectedPrice(item.price)
      }
      console.log(selectPrice)
    })
      }

const selectPrice=(selectName)=>{
      // console.log(selectName)
      setSelectedName(selectName)
      productDetails.productItems.find(checkPrice)

}
    
  
    return (
      <div className='entry'>
        <Button id="store1" variant="outlined" onClick={handleClickOpen}> store 1 </Button>
        <Button id="store2" variant="outlined" onClick={handleClickOpen}> store 2 </Button>
        <Button id="store3" variant="outlined" onClick={handleClickOpen}> store 3 </Button>
        <Dialog  open={open} onClose={handleClose}>
          <DialogTitle className="product-form">Bill</DialogTitle>
          <DialogContent className="product-form">
            <DialogContentText>
                
              </DialogContentText>
              <Autocomplete
              id="free-solo-demo"
              className='fields'
              freeSolo
              name="name"
              options={productDetails.productItems.map((option) => option.name)}
              renderInput={(params) => <TextField {...params} label="product name" />}
              onChange={handleChange}
            />
           {/* {selectPrice(newItem.name)} */}
           {(productDetails.productItems.map(item=>{
            if(newItem.name=== item.name){
              let currentPrice=item.price
              // setSelectedPrice(currentPrice)
              console.log(item.price)
              return 1}
          
          })) && <Autocomplete
              id="free-solo-demo"
              freeSolo
              
              className='fields'
              options={productDetails.productItems.map((option) => option.price)}
              renderInput={(params) => <TextField {...params} label="product price" />}
             value={newItem.price}
            
            />
           
           } 
             <TextField
              autoFocus
              margin="dense"
              id="quantiny"
              
              className='fields'
              name="quantiny"
              type="number"
              fullWidth
              onChange={(event,value)=>{setNewItem(prevState=>({...prevState,quantity: value}))}}
              value={newItem.quantity}
              variant="standard"
            />
          </DialogContent>
          <DialogActions className="product-form">
            <Button className='dialog-action' onClick={handleClose}>Cancel</Button>
            <Button className='dialog-action' onClick={handleClose}>Add</Button>
          </DialogActions>
        </Dialog>

        
    </div>
  )
}

export default Shops