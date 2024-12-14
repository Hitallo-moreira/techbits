import React from 'react'
import './product-page.css';
export default function Product() {
    const plants = [
        { id: 1, name: 'Snake Plant', price: '$15', category: 'Low Light', thumbnail: 'https://images.pexels.com/photos/2123482/pexels-photo-2123482.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: 2, name: 'Peace Lily', price: '$20', category: 'Low Light', thumbnail: 'https://images.pexels.com/photos/3698376/pexels-photo-3698376.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: 7, name: 'Calathea', price: '$22', category: 'Low Light', thumbnail: 'https://images.pexels.com/photos/11592924/pexels-photo-11592924.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: 8, name: 'Chinese Evergreen', price: '$18', category: 'Low Light', thumbnail: 'https://images.unsplash.com/photo-1610551835289-9f8a81fc3a6c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 3, name: 'Spider Plant', price: '$12', category: 'Air Purifying', thumbnail: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 4, name: 'Areca Palm', price: '$25', category: 'Air Purifying', thumbnail: 'https://images.unsplash.com/photo-1617799499863-9bb2054a2be7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QXJlY2ElMjBQYWxtfGVufDB8fDB8fHww' },
        { id: 9, name: 'Boston Fern', price: '$14', category: 'Air Purifying', thumbnail: 'https://images.unsplash.com/photo-1497877164981-9c2afdf31e9e?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 10, name: 'Rubber Plant', price: '$20', category: 'Air Purifying', thumbnail: 'https://images.unsplash.com/photo-1477554193778-9562c28588c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UnViYmVyJTIwUGxhbnR8ZW58MHx8MHx8fDA%3D' },
        { id: 5, name: 'Pothos', price: '$10', category: 'Easy Care', thumbnail: 'https://images.unsplash.com/photo-1658309833602-854ab8e1d9f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UG90aG9zfGVufDB8fDB8fHww' },
        { id: 6, name: 'ZZ Plant', price: '$18', category: 'Easy Care', thumbnail: 'https://images.unsplash.com/photo-1606256419855-d72ce8675863?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8WlolMjBQbGFudHxlbnwwfHwwfHx8MA%3D%3D' },
        { id: 11, name: 'Jade Plant', price: '$16', category: 'Easy Care', thumbnail: 'https://images.unsplash.com/photo-1616189596748-20a7a4687a62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SmFkZSUyMFBsYW50fGVufDB8fDB8fHww' },
        { id: 12, name: 'Lucky Bamboo', price: '$12', category: 'Easy Care', thumbnail: 'https://images.unsplash.com/photo-1674461875598-41f69d6549b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEx1Y2t5JTIwQmFtYm9vfGVufDB8fDB8fHww' },
    ];
    

    const PlantCategory = ({ category, plants }) => (
        <div className='product-container'>
            <h2>{category}</h2>
            <div className='card'>
                {plants.map((plant) => (
                    <div key={plant.id} style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
                        <img src={plant.thumbnail} alt={plant.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                        <h3>{plant.name}</h3>
                        <p>{plant.price}</p>
                        <button style={{ marginTop: '8px', padding: '8px 12px', background: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );

    const categories = ['Low Light', 'Air Purifying', 'Easy Care'];
    return (
        <div style={{ padding: '0 40px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ position: 'relative', zIndex: '1', color: '#fff' }}>Our Houseplants</h1>
            {categories.map((category) => (
                <PlantCategory
                    key={category}
                    category={category}
                    plants={plants.filter((plant) => plant.category === category)}
                />
            ))}
        </div>
    )
}
