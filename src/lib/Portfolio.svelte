<script lang='ts'>
  import portfolio from './portfolio.json';

  const images: Record<string, { default: string }> = import.meta.glob('../assets/*.jpg', { eager: true });

  const items = portfolio.map(item => {
    const imagePath = Object.keys(images).find(key => key.endsWith(item.image));
    
    if (!imagePath) {
      console.warn(`Image not found for: ${item.image}`);
    }

    return {
      image: imagePath,
      title: item.title,
      description: item.description
    };
  });
</script>

<section class="gallery" id="portfolio">
  <div class="header">
    <h2>Portfolio</h2>
    <p>Een selectie van mijn handgemaakte keramiek</p>
  </div>
  
  <div class="grid">
    {#each items as item}
      <div class="item">
        <img src={images[item.image].default} alt={item.title} />
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    {/each}
  </div>
</section>

<style>
  .gallery {
    padding: 4rem 2rem;
    background-color: white;
  }

  .header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .header h2 {
    font-size: 2.5rem;
    font-weight: 300;
    color: #333;
    margin: 0;
  }

  .header p {
    font-size: 1.2rem;
    color: #666;
    margin: 1rem 0 0;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .item {
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
  }
/* 
  .item:hover {
    transform: translateY(-5px);
  } */

  .item img {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }

  .item h3 {
    font-size: 1.2rem;
    margin: 1rem;
    color: #333;
  }

  .item p {
    font-size: 1rem;
    margin: 0 1rem 1rem;
    color: #666;
    line-height: 1.4;
  }
</style> 