import { Router } from "express";
import uploader from "../utils.js"
import objectContenedor from "../contenedor/objectContenedor.js";

const contenedor = new objectContenedor();

const router = Router();
//const products = [];

//Obtiene todos los productos
router.get('/', async (req,res)=>{
    let productos = await contenedor.getAll();
    console.log(productos);
    res.send(productos);
})


//Obtiene los productos segun su id
router.get('/:id', async (req,res)=>{
   let id = req.params.id
   let productos = await contenedor.getById(id);
   console.log(productos);
   res.send(productos);
})


//Recibe o agrega un producto y lo devuelve con su ID
router.post('/',uploader.single('file'), async (req,res)=>{
    console.log(req.file);
    let product = req.body;
    await contenedor.save(product);
    console.log(product);
   // product.image = req.file.path
    if(!product.productos) return res.status(400).send({status:'error',error: 'Invalid input' });
    //product.push(contenedor);
    res.send({status: "Success", message: "Products added"});
})


//Recibe y actualiza un producto segun su ID
router.put('/', async (req,res)=>{
    let producto = req.body
    await contenedor.actualizar(producto);
})


//Elimina un producto segun su ID

router.delete('/:id', async (req,res)=>{ 
    let id = req.params.id
    let producto = await contenedor.deleteById(id);
    console.log(producto);
    res.send('Producto eliminado');
 
})



export default router;