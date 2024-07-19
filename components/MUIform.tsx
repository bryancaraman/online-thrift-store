
import { Card, Button, Box, TextField,Stack, IconButton, InputBase, Container, Typography } from '@mui/material';
import { FavoriteBorder, PaddingRounded, PersonOutline, ShoppingCart } from '@mui/icons-material';
import Link from 'next/link'; 
import React from 'react';
import {useForm} from "react-hook-form"
import {DevTool} from "@hookform/devtools"
import { useRouter } from 'next/router'

type FormValues = {
    name: String 
    description : String
    price : number
    size : String
    color : String
    condition : String
    material : String
    image_url : String
    is_on_sale : boolean 
    sale_price : Number
}

const Selling = () => {
        const form = useForm<FormValues>({
            defaultValues: {
                name : "",
                description : "",
                price : 0.0,
                size : "",
                color : "",
                condition :"",
                material : "",
                image_url : "",
                is_on_sale : false ,
                sale_price :0.0
            }
        })
        const {register, handleSubmit, formState ,control } = form
        const {errors} = formState
        const onSubmit = (data : FormValues) => {
            handleAddToShop(data)
        }
        //adding to api 
        const router = useRouter();
        const PRODUCTS_URL = "http://localhost:8000/v1/products";
        const handleAddToShop = async (product) => {
            /* fetch current cart items */
            const response = await fetch(PRODUCTS_URL, { method: 'GET'});
            const shopItems = await response.json();
        
            const existingShopItem = shopItems.find(item => (item.name === product.product_id));
    
            if (existingShopItem) {
                const updatedItem = { ...existingShopItem, quantity: existingShopItem.quantity + 1 };
                const body = JSON.stringify(updatedItem);
                await fetch(PRODUCTS_URL, { method: 'PATCH', body, headers: { 'content-type': 'application/json' }});
            } 
            else {
                const body = JSON.stringify({ ...product, quantity: 1 });
                await fetch(PRODUCTS_URL, { method: 'POST', body, headers: { 'content-type': 'application/json' }});
            }
            router.push('/shop')
        }

    return (
        <Container>
            <header>
                <Box display="flex" justifyContent="space-between" alignItems="center" py={2} borderBottom={1} borderColor="brown.500">
                    <Box display="flex" alignItems="center">
                        {/* Second Chance Logo Image */}
                        <Link legacyBehavior href="/">
                            <img src="/BrownLogo.png" alt="Logo" style={{ height: '50px' }} />
                        </Link>
                        </Box>
                        <Box display="flex" alignItems="center">
                        <Link legacyBehavior href="/aboutMe">
                            <a style={{ color: '#6E3C19', margin: '0 16px' }}>ABOUT US</a>
                        </Link>
                        <Link legacyBehavior href="/shop">
                            <a style={{ color: '#6E3C19', margin: '0 16px' }}>SHOP</a>
                        </Link>
                        <Link legacyBehavior href="/sell">
                            <a style={{ color: '#6E3C19', margin: '0 16px' }}>SELL</a>
                        </Link>
                    </Box>
                    
                    <Box display="flex" alignItems="center">
                    <InputBase placeholder="Search" style={{ margin: '0 16px', border: '1px solid beige', padding: '4px' }} />
                    <IconButton style={{ color: '#8A9A5B' }}><FavoriteBorder /></IconButton>
                    <IconButton style={{ color: '#8A9A5B' }}><PersonOutline /></IconButton>
                    <Link legacyBehavior href="/cart">
                        <IconButton style={{ color: '#8A9A5B' }} ><ShoppingCart /></IconButton>
                    </Link>
                    </Box>
                </Box>
            </header>

            <h1> <center>Sell your clothes here! </center> </h1>
            <h2 color="green"> <center> Please enter the details of your clothes so we can sell them! </center> </h2>

            <p> </p>
        <form onSubmit={handleSubmit(onSubmit)} noValidate><center>
            <Stack spacing = {2} width = {400}>
            <TextField label = "Name" type = "Name" {...register("name")} error={!!errors.name} helperText = {errors.name?.message}/>
            <TextField label = "Description " type = "description" {...register("description", {required: 'this field  is required '})} error={!!errors.description} helperText = {errors.description?.message}/>
            <TextField label = "Size" type = "size" {...register("size", {required: 'this field  is required '})} error={!!errors.size} helperText = {errors.size?.message}/>
            <TextField label = "Color" type = "color_pick"{...register("color", {required: 'this field  is required '})} error={!!errors.color} helperText ={errors.color?.message}/>
            <TextField label = "Condition" type = "condition" {...register("condition", {required: 'this field  is required '})} error={!!errors.condition} helperText = {errors.condition?.message}/>
            <TextField label = "Material" type = "material" {...register("material", {required: 'this field  is required '})} error={!!errors.material} helperText ={errors.material?.message}/>
            <TextField label = "Image_url" type = "image_url" {...register("image_url", {required: 'this field  is required '})} error={!!errors.image_url} helperText ={errors.image_url?.message}/>
            <TextField label = "Price" type = "price" {...register("price", {required: 'this field  is required '})} error={!!errors.price} helperText = {errors.price?.message}/>
            <TextField label = "Is_on_sale" type = "is_on_sale" {...register("is_on_sale", {required: 'this field  is required '})} error={!!errors.is_on_sale} helperText ={errors.is_on_sale?.message}/>
            <TextField label = "Sale_price" type = "sale_price" {...register("sale_price", {required: 'this field  is required '})} error={!!errors.sale_price} helperText = {errors.sale_price?.message}/>
           
            </Stack>
            <Button type = "submit" color = "primary"> submit </Button>
            </center>
            </form>
            <DevTool control ={control}/>


        </Container>
    );
};

export default Selling;