import React from 'react';
import '../assets/styles/Categories.css';

const categories = [
  {
    id: 1,
    icon: '🤖',
    title: 'Rubii AI',
    description: 'Rubii: AI native fandom character UGC platform. Create your...',
    stats: '295 K: 33.79%',
    tag: 'AI Character',
  },
];

function Categories() {
  return (
    <section className="categories">
      <h2>Just launched</h2>
      <div className="categories-grid">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <div className="category-icon">{category.icon}</div>
            <div className="category-content">
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <div className="category-stats">
                <span>{category.stats}</span>
              </div>
              <div className="category-tag">
                <span>{category.tag}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;