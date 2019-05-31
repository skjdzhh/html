// let add = {
//     type:'ADD'
// }

let add = (num) =>{
    console.log('add--action',num);
    return {
        type:'ADD',
        num
    }
}

export default add;