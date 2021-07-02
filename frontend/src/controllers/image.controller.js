import urlWebServices from '../controllers/webServices.js';


export const guardarImageProduct = async function(message)
{
    //url webservices
    let url = urlWebServices.guardarImageProduct;
    //console.log("url",url);
    //console.log("token",WebToken.webToken);
    const formData = new URLSearchParams();
    formData.append('idProduct', message.idProduct);
    formData.append('nameProduct', message.nameProduct);
    formData.append('nombreImagen',message.imagen);
    
    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                'x-access-token': localStorage.getItem('x'),
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body:formData
        });
        if (response.status===201)
        {
            return true;
        }
        else
        {
           return false; 
        }
    }
    catch(error)
    {
        console.log("error",error);
        return false;
    };
}

export const uploadFileImg= async function(files,nombres)
{
     //url webservices
     let url = urlWebServices.uploadFileImg;
  
    console.log('files', files)
    console.log('nombres',nombres)
    const formData = new FormData();
    //agrego archivos para subir
    for (let i = 0; i < files.length; i++)
    {
        formData.append('files', files[i], nombres[i])
    }
   
    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/form-data',
                'x-access-token': localStorage.getItem('x'),
                'Origin':'http://localhost:3000',
                //'Content-Type': 'application/form-data'
            },
            body:formData
        });
    
        let archivos = await response.json()
        console.log('respuestaUpload', archivos);
        return archivos;
    } catch (err) {
        alert('Error uploading the files')
        console.log('Error uploading the files', err)
    }
}
export const getImagenesByProduct = async function(message)
{
    //url webservices
    let url = urlWebServices.getImageProduct;
    //console.log("url",url);
    //console.log("token",WebToken.webToken);
    const formData = new URLSearchParams();
    formData.append('idProduct', message.idProduct);
    
    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                'x-access-token': localStorage.getItem('x'),
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body:formData
        });
        if (response.status===200)
        {
            let data = await response.json();
            console.log("imagenesProduct",data);
            let listaImg = data.data.docs;
            return listaImg;
        }
        else
        {
            let vacio=[];
            console.log("No hay imagenes")
            return (vacio);
            
        }
    }
    catch(error)
    {
        console.log("error",error);
    };
}