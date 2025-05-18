<script lang='ts'>
  import portfolio from './portfolio.json';
  import leftArrow from '../assets/icons/left-arrow.svg';
  import rightArrow from '../assets/icons/right-arrow.svg';

  const images: Record<string, { default: string }> = import.meta.glob('../assets/*.jpg', { eager: true });

  let items = portfolio.map(item => {
    const imagePaths = item.images.map(imageName => {
      const path = Object.keys(images).find(key => key.endsWith(imageName));
      if (!path) {
        console.warn(`Image not found for: ${imageName}`);
      }
      return path;
    }).filter(Boolean);

    return {
      images: imagePaths,
      title: item.title,
      currentImageIndex: 0
    };
  });

  function previousImage(item: any) {
    item.currentImageIndex = Math.max(0, item.currentImageIndex - 1);
    items = items;
  }

  function nextImage(item: any) {
    item.currentImageIndex = Math.min(item.currentImageIndex + 1, item.images.length - 1);
    items = items;
  }
</script>

<section class="gallery" id="portfolio">
  <div class="header">
    <h2>Portfolio</h2>
    <p>Een selectie van mijn handgemaakte keramiek</p>
  </div>
  
  <div class="grid">
    {#each items as item}
      <div class="item">
        <div class="slideshow">
          <div class="slideshow-container" style="transform: translateX({-item.currentImageIndex * 100}%)">
            {#each item.images as imagePath}
              <div class="slide">
                <img 
                  src={images[imagePath].default} 
                  alt={item.title} 
                />
              </div>
            {/each}
          </div>
          <div class="slideshow-controls">
            {#if item.currentImageIndex > 0}
              <button on:click={() => previousImage(item)} class="nav-button">
                <img src={leftArrow} alt="Previous" />
              </button>
            {:else}
              <div class="nav-button-placeholder"></div>
            {/if}
            {#if item.currentImageIndex < item.images.length - 1}
              <button on:click={() => nextImage(item)} class="nav-button">
                <img src={rightArrow} alt="Next" />
              </button>
            {:else}
              <div class="nav-button-placeholder"></div>
            {/if}
          </div>
        </div>
        <h3>{item.title}</h3>
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

  .slideshow {
    position: relative;
    overflow: hidden;
  }

  .slideshow-container {
    display: flex;
    transition: transform 0.3s ease-in-out;
  }

  .slide {
    min-width: 100%;
    flex-shrink: 0;
  }

  .slideshow img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    display: block;
  }

  .slideshow-controls {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    pointer-events: none;
  }

  .nav-button {
    background: rgba(255, 255, 255, 0.4);
    border: none;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    pointer-events: auto;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 0;
  }

  .nav-button img {
    width: 16px;
    height: 16px;
    object-fit: contain;
  }

  .nav-button:hover {
    transform: scale(1.1);
  }

  .slideshow:hover .nav-button {
    background: rgba(255, 255, 255, 0.8);
  }

  .nav-button-placeholder {
    width: 32px;
    height: 32px;
  }

  .item h3 {
    font-size: 1.2rem;
    margin: 1rem;
    color: #333;
  }
</style> 