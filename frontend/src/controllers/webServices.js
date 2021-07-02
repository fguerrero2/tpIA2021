const urlApi = "http://localhost:4000/";
console.log("url",urlApi);


const urlWebServices = {
    login:urlApi +"api/users/login",
    uploadFileImg: urlApi + "api/utils/uploadImage",
    guardarImageProduct: urlApi + "api/products/guardarImageProduct",
    getImageProduct: urlApi + "api/products/imageProductByProduct"
}

export default urlWebServices;