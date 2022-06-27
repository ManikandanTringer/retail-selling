import {  createSlice } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import productDetails from '../productDetails'
const initialState={
    store1Items:[productDetails.productItems],
    store2Items:[productDetails.clothings],
    store3Items:[productDetails.aquarium],
    store1Bill:[],
    store2Bill:[],
    store3Bill:[],
    store1Total:0,
    store2Total:0,
    store3Total:0,
}
const productSlice = createSlice({
    name:'retial',
    initialState,
    reducers:{       
         removeItems(state,action){
            
            const type=action.payload.type    
            switch(type){
        case "store1":
        state.store1Items = [...state.store1Items,{id:action.payload.item.id,name:action.payload.item.name,price:action.payload.item.price}]
        state.store1Bill=state.store1Bill.filter(item => item.id !== action.payload.item.id)
        state.store1Total=0
        state.store1Bill.map( item => state.electronicsTotal+=item.total)  
        break;
        case "store2":state.store2Items = [...state.store2Items,{id:action.payload.item.id,pname:action.payload.item.name,price:action.payload.item.price}]
        state.store2Bill=state.store2Bill.filter(item => item.id !== action.payload.item.id)
        state.store2Total=0
        state.store2Bill.map( item => state.clothingsTotal+=item.total)
        break;
        case "store3":state.store3Items = [...state.store3Items,{id:action.payload.item.id,pname:action.payload.item.name,price:action.payload.item.price}]
        state.store3Bill=state.store3Bill.filter(item => item.id !== action.payload.item.id)
        state.store3Total=0
        state.store3Bill.map( item => state.aquariumTotal+=item.total)
                break;
        default:alert("Not Deleted")
    }

         },
         addItems(state, action){
            const newItem = action.payload
            state.store1Items = state.store1Items.filter( item=> item.id!== newItem.productId)
            state.store2Items = state.store2Items.filter( item=> item.id!== newItem.productId)
            state.store3Items = state.store3Items.filter( item=> item.id!== newItem.productId)
            switch(newItem.type){
            case "store1":state.store1Bill.push({
                                id:newItem.productId,
                                name:newItem.productname,
                                price:newItem.productprice,
                                quantity:newItem.productquantity,
                                total:newItem.producttotal,
                                flag:newItem.flag
                                })
                                state.store1Items.map( item => state.store1Total+=item.total)
                                break;
            case "store2":state.store2Bill.push({
                                id:newItem.productId,
                                name:newItem.productname,
                                price:newItem.productprice,
                                quantity:newItem.productquantity,
                                total:newItem.producttotal,
                                flag:newItem.flag
                                })
                                state.cartList2.map( item => state.store2Total+=item.total)
                                break;
            case "store3":state.store3Bill.push({
                                id:newItem.productId,
                                name:newItem.productname,
                                price:newItem.productprice,
                                quantity:newItem.productquantity,
                                total:newItem.producttotal,
                                flag:newItem.flag
                                })
                                state.store3Bill.map( item => state.store3Total+=item.total)
                                break;
            default:alert("Add Bill")
            
        }
         },
    }
     
})
// useDispatch(retial.actions.addItems)
 console.log(productSlice)
export const generateBill = productSlice.actions;
export default productSlice;
// export default store;


// import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counterSlice'

// export const store = configureStore({
//   reducer: {
//     retial: retialReducer,
//   },
// })
