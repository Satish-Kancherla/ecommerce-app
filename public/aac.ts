
export type Product = {
    id:  string ;
    category: string;
    image: string;
    type: string;
    name: string;
    model: string;
    new_price: string | number;
    old_price: string | number;
    description: string;
};


const All_Data : Product[] = [
   
    {
        "id": "1",
        "category": "Women",
        "image": "/WomanWear/1.jpg",
        "type": "Dress",
        "name": "Zara Flowy Maxi",
        "model": "",
        "new_price": "79.99",
        "old_price": "99.99",
        
        "description": "A flowy maxi dress with floral patterns, perfect for summer occasions."
    },
    {
        "id": "2",
        "category": "Women",
        "image": "/WomanWear/2.jpg",
        "type": "Blouse",
        "name": "H&M Classic Silk",
        "model": "",
        "new_price": "49.90",
        "old_price": "60.99",
        
        "description": "A classic silk blouse suitable for professional and casual settings."
    },
    {
        "id": "3",
        "category": "Women",
        "image": "/WomanWear/3.jpg",
        "type": "Jeans",
        "name": "Levi's 501 Skinny",
        "model": "",
        "new_price": "89.50",
        "old_price": "95.99",
        
        "description": "Skinny fit jeans with a classic 5-pocket design, perfect for everyday wear."
    },
    {
        "id": "4",
        "category": "Women",
        "image": "/WomanWear/4.jpg",
        "type": "Jumpsuit",
        "name": "Forever 21 Utility Jumpsuit",
        "model": "",
        "new_price": "59.99",
        "old_price": "65.00",
        
        "description": "A utility-style jumpsuit with a modern and versatile look."
    },
    {
        "id": "5",
        "category": "Women",
        "image": "/WomanWear/5.jpg",
        "type": "Skirt",
        "name": "Topshop A-Line Mini",
        "model": "",
        "new_price": "39.99",
        "old_price": "50.00",
        
        "description": "A stylish A-line mini skirt with a retro touch, suitable for various occasions."
    },
    {
        "id": "6",
        "category": "Women",
        "image": "/WomanWear/6.jpg",
        "type": "Sweater",
        "name": "Gap Cable Knit",
        "model": "",
        "new_price": "49.95",
        "old_price": "62.00",
        
        "description": "A cozy cable knit sweater with a timeless design, perfect for chilly days."
    },
    {
        "id": "7",
        "category": "Women",
        "image": "/WomanWear/7.jpg",
        "type": "Blazer",
        "name": "Mango Tailored Blazer",
        "model": "",
        "new_price": "79.99",
        "old_price": "90.50",
        
        "description": "A tailored blazer with a chic silhouette, suitable for formal and casual looks."
    },
    {
        "id": "8",
        "category": "Women",
        "image": "/WomanWear/8.jpg",
        "type": "Activewear",
        "name": "Lululemon Align Leggings",
        "model": "",
        "new_price": "98.00",
        "old_price": "190.00",
        
        "description": "High-quality leggings with a buttery soft feel, ideal for yoga and workouts."
    },
    {
        "id": "9",
        "category": "Women",
        "image": "/WomanWear/9.jpg",
        "type": "Swimwear",
        "name": "Secret Bikini Set",
        "model": "",
        "new_price": "59.50",
        "old_price": "65.00",
        
        "description": "A stylish bikini set with vibrant patterns, perfect for beach days."
    },
    {
        "id": "24",
        "category": "Women",
        "image": "/WomanWear/10.jpg",
        "type": "Pants Hollister",
        "name": "High-Rise Skinny",
        "model": "",
        "new_price": "49.95",
        "old_price": "90.00",
        
        "description": "High-rise skinny pants with a flattering fit, suitable for various occasions."
    },
    {
        "id": "25",
        "category": "Women",
        "image": "/WomanWear/11.jpg",
        "type": "Coat",
        "name": "Voltaire Wool Blend Coat",
        "model": "",
        "new_price": "299.00",
        "old_price": "599.00",
        
        "description": "A stylish wool blend coat with a modern and elegant design, perfect for colder days."
    },
    {
        "id": "26",
        "category": "Women",
        "image": "/WomanWear/12.jpg",
        "type": "T-Shirt",
        "name": "Eagle Graphic Tee",
        "model": " ",
        "new_price": "24.95",
        "old_price": "39.99",
        
        "description": "A casual graphic tee with trendy prints, suitable for relaxed everyday outfits."
    },
    
{
    "id": "11",
    "category": "Men",
    "image": "/MenWear/1.jpg",
    "type": "T-Shirt",
    "name": "Nike Sporty Tee",
    "model": "",
    "new_price": "29.99",
    "old_price": "42.55",
    
    "description": "A comfortable and stylish sporty t-shirt with moisture-wicking fabric."
},
{
    "id": "12",
    "category": "Men",
    "image": "/MenWear/2.jpg",
    "type": "Dress Shirt",
    "model": "",
    "name": "Calvin Klein ClassicFit",
    "new_price": "49.99",
    "old_price": "56.00",
    
    "description": "A classic fit dress shirt made from high-quality fabric, suitable for formal occasions."
},
{
    "id": "13",
    "category": "Men",
    "image": "/MenWear/3.jpg",
    "type": "Jeans",
    "name": "Levi's 511 Slim Fit",
    "model": "",
    "new_price": "59.50",
    "old_price": "80.00",
    
    "description": "Slim fit jeans with a modern look, perfect for casual outings."
},
{
    "id": "14",
    "category": "Men",
    "image": "/MenWear/4.jpg",
    "type": "Polo Shirt",
    "name": "Ralph Lauren Signature Polo",
    "model": "",
    "new_price": "69.00",
    "old_price": "75.00",
    
    "description": "A classic polo shirt with the iconic Ralph Lauren logo, ideal for a refined casual look."
},
{
    "id": "15",
    "category": "Men",
    "image": "/MenWear/5.jpg",
    "type": "Jacket",
    "name": "The North Face Apex Bionic",
    "new_price": "129.99",
    "model": "",
    "old_price": "200.00",    
    "description": "A versatile softshell jacket designed for outdoor activities and everyday wear."
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
    "id": "17",
    "category": "Men",
    "image": "/MenWear/7.jpg",
    "type": "Sweater",
    "name": "Tommy Hilfiger Crewneck Sweater",
    "model": "",
    "new_price": "79.50",
    "old_price": "99.99",

    
    "description": "A classic crewneck sweater made from soft and comfortable materials."
},
{
    "id": "18",
    "category": "Men",
    "image": "/MenWear/8.jpg",
    "type": "Suit",
    "name": "Hugo Boss ModernFit Suit",
    "model": "",
    "new_price": "499.00",
    "old_price": "599.99",

    
    "description": "A modern-fit suit crafted with attention to detail, perfect for formal occasions."
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
    "id": "21",
    "category": "Men",
    "image": "/MenWear/11.jpg",
    "type": "Swim Trunks",
    "name": "Speedo Endurance+ Swim Trunks",
    "model": "",
    "new_price": "29.50",
    "old_price": "49.99",
    
    "description": "Durable and comfortable swim trunks designed for performance and comfort in the water."
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
}]


export default All_Data;