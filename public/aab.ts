export type Newarrivals ={
    id: string | number;
    category: string;
    image: string;
    type: string;
    name: string;
    model: string;
    new_price: string;
    old_price: string;
    description: string;

}


const data1: Newarrivals[] = [
   
    {
        "id": "4",
        "category": "WomanWear",
        "image": "/WomanWear/4.jpg",
        "type": "Jumpsuit",
        "name": "Forever 21 Utility Jumpsuit",
        "model": "",
        "new_price": "59.99",
        "old_price": "65.00",
        
        "description": "A utility-style jumpsuit with a modern and versatile look."
    },
    {
        "id": "22",
        "category": "Men",
        "image": "/MenWear/12.jpg",
        "type": "Blazer",
        "name": "Brothers Classic Blazer",
        "model": "",
        "new_price": "189.00",
        "old_price": "199.99",
        
        "description": "A timeless classic blazer suitable for both professional and smart-casual looks."
    },
   
    {
        "id": "5",
        "category": "WomanWear",
        "image": "/WomanWear/5.jpg",
        "type": "Skirt",
        "name": "Topshop A-Line Mini",
        "model": "",
        "new_price": "39.99",
        "old_price": "50.00",
        
        "description": "A stylish A-line mini skirt with a retro touch, suitable for various occasions."
    },
   
    {
        "id": "16",
        "category": "Men",
        "image": "/MenWear/6.jpg",
        "type": "Shorts",
        "name": "Under Armour Tech Mesh Shorts",
        "model": "",
        "new_price": "34.99",
        "old_price": "50.99",
    
        
        "description": "Lightweight and breathable mesh shorts for workouts and active lifestyles."
    },
    {
        "id": "19",
        "category": "Men",
        "image": "/MenWear/9.jpg",
        "type": "Hoodie",
        "name": "Adidas Essentials Hoodie",
        "model": "",
        "new_price": "44.99",
        "old_price": "59.99",
        
        "description": "A comfortable and stylish hoodie with the Adidas logo, suitable for everyday wear."
    },
    {
        "id": "24",
        "category": "WomanWear",
        "image": "/WomanWear/10.jpg",
        "type": "Pants Hollister",
        "name": "High-Rise Skinny",
        "model": "",
        "new_price": "49.95",
        "old_price": "90.00",
        
        "description": "High-rise skinny pants with a flattering fit, suitable for various occasions."
    },
    {
        "id": "20",
        "category": "Men",
        "image": "/MenWear/10.jpg",
        "type": "Chinos",
        "name": "Dockers Alpha Khak",
        "model": "i",
        "new_price": "39.99",
        "old_price": "69.99",
        "description": "Versatile chino pants with a modern slim fit, suitable for casual and semi-formal occasions."
    },
    {
        "id": "8",
        "category": "WomanWear",
        "image": "/WomanWear/8.jpg",
        "type": "Activewear",
        "name": "Lululemon Align Leggings",
        "model": "",
        "new_price": "98.00",
        "old_price": "190.00",
        
        "description": "High-quality leggings with a buttery soft feel, ideal for yoga and workouts."
    },

];

export default data1;