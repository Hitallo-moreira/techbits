import React from 'react'
import './product-page.css';
export default function Product() {
    const plants = [
        { id: 1, name: 'Snake Plant', price: '$15', category: 'Low Light', thumbnail: 'https://images.unsplash.com/photo-1615882982047-bd787b991e8b' },
        { id: 2, name: 'Peace Lily', price: '$20', category: 'Low Light', thumbnail: 'https://images.unsplash.com/photo-1612975987568-ef8043b1b75d' },
        { id: 7, name: 'Calathea', price: '$22', category: 'Low Light', thumbnail: 'https://images.unsplash.com/photo-1610564550756-4db59e26c39f' },
        { id: 8, name: 'Chinese Evergreen', price: '$18', category: 'Low Light', thumbnail: 'https://images.unsplash.com/photo-1591016442292-e427fa16f424' },
        { id: 3, name: 'Spider Plant', price: '$12', category: 'Air Purifying', thumbnail: 'https://images.unsplash.com/photo-1607408310823-71c1ec128ef6' },
        { id: 4, name: 'Areca Palm', price: '$25', category: 'Air Purifying', thumbnail: 'https://images.unsplash.com/photo-1599702229863-3e21b899a3ae' },
        { id: 9, name: 'Boston Fern', price: '$14', category: 'Air Purifying', thumbnail: 'https://images.unsplash.com/photo-1580934016285-417a38d3df72' },
        { id: 10, name: 'Rubber Plant', price: '$20', category: 'Air Purifying', thumbnail: 'https://images.unsplash.com/photo-1603409248886-8c380fe885d2' },
        { id: 5, name: 'Pothos', price: '$10', category: 'Easy Care', thumbnail: 'https://images.unsplash.com/photo-1598282915500-439baea66a27' },
        { id: 6, name: 'ZZ Plant', price: '$18', category: 'Easy Care', thumbnail: 'https://images.unsplash.com/photo-1612963571044-ccad33f5f45b' },
        { id: 11, name: 'Jade Plant', price: '$16', category: 'Easy Care', thumbnail: 'https://images.unsplash.com/photo-1602840824311-8cfc4eae11b4' },
        { id: 12, name: 'Lucky Bamboo', price: '$12', category: 'Easy Care', thumbnail: 'https://images.unsplash.com/photo-1612345047084-f6e8a60f2452' },
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
