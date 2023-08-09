// async function getProductData() {
//     const response = await fetch("https://dummyjson.com/products");
//     console.log("Oir response is: ", response);
// }

// getProductData();

async function getProductData() {
    const response = await fetch("https://dummyjson.com/products");
    console.log("Oir response is: ", response);
    const data = await response.json();
    console.log("Our data is: ", data)
}

getProductData();

// async function getProductData(){
//     const res= await fetch("https://dummyjson.com/products");
//     console.log("Our response is: ", res);
//     const data=await res.json();
//     console.log("Our data: ", data);
// }

// getProductData();