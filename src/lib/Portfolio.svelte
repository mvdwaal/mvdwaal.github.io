<script lang="ts">
  import leftArrow from "../assets/Icons/left-arrow.svg";
  import rightArrow from "../assets/Icons/right-arrow.svg";

  const itemsToShow = [
    "Amethist",
    "Heksenkind",
    "Korstmos",
    "Jade",
    "Borealis",
    "Koraal",
    "Silva",
    "Fleur",
  ];

  const allImages = import.meta.glob("../assets/Portfolio/*/*.jpg", {
    eager: true,
  });

  let items = itemsToShow.map((item: string) => {
    const images = Object.fromEntries(
      Object.entries(allImages).filter(([path]) => path.includes(item)),
    );

    const imagePaths = Object.keys(images);

    return {
      images: imagePaths,
      title: item,
      currentImageIndex: 0,
      touchStartX: 0,
      touchStartY: 0,
      touchEndX: 0,
      isPinching: false,
      initialTouchDistance: 0,
    };
  });

  function previousImage(item: any) {
    item.currentImageIndex = Math.max(0, item.currentImageIndex - 1);
    items = items;
  }

  function nextImage(item: any) {
    item.currentImageIndex = Math.min(
      item.currentImageIndex + 1,
      item.images.length - 1,
    );
    items = items;
  }

  function handleTouchStart(event: TouchEvent, item: any) {
    if (event.touches.length === 1) {
      // Single touch - track for swipe
      item.touchStartX = event.touches[0].clientX;
      item.touchStartY = event.touches[0].clientY;
      item.isPinching = false;
    } else if (event.touches.length === 2) {
      // Two touches - track for pinch
      item.isPinching = true;
      const touch1 = event.touches[0];
      const touch2 = event.touches[1];
      item.initialTouchDistance = Math.hypot(
        touch2.clientX - touch1.clientX,
        touch2.clientY - touch1.clientY
      );
    }
  }

  function handleTouchMove(event: TouchEvent, item: any) {
    if (item.isPinching) {
      // During pinch, prevent any swipe behavior
      event.preventDefault();
      return;
    }

    if (event.touches.length === 1) {
      const touchX = event.touches[0].clientX;
      const touchY = event.touches[0].clientY;
      const deltaX = Math.abs(touchX - item.touchStartX);
      const deltaY = Math.abs(touchY - item.touchStartY);

      // If the horizontal movement is greater than vertical, prevent scrolling
      if (deltaX > deltaY) {
        event.preventDefault();
      }
    }
  }

  function handleTouchEnd(event: TouchEvent, item: any) {
    if (!item.isPinching) {
      item.touchEndX = event.changedTouches[0].clientX;
      handleSwipe(item);
    }
    item.isPinching = false;
  }

  function handleSwipe(item: any) {
    const swipeThreshold = 50; // minimum distance for a swipe
    const swipeDistance = item.touchEndX - item.touchStartX;

    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0) {
        // Swiped right, go to previous
        if (item.currentImageIndex > 0) {
          previousImage(item);
        }
      } else {
        // Swiped left, go to next
        if (item.currentImageIndex < item.images.length - 1) {
          nextImage(item);
        }
      }
    }
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
        <div
          class="slideshow"
          on:touchstart={(e) => handleTouchStart(e, item)}
          on:touchmove={(e) => handleTouchMove(e, item)}
          on:touchend={(e) => handleTouchEnd(e, item)}
        >
          <div
            class="slideshow-container"
            style="transform: translateX({-item.currentImageIndex * 100}%)"
          >
            {#each item.images as imagePath}
              <div class="slide">
                <img src={allImages[imagePath].default} alt={item.title} />
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
        <p>{item.title}</p>
      </div>
    {/each}
  </div>
</section>

<style>
  .gallery {
    padding: 4rem 2rem;
    background-color: white;
    scroll-margin-top: 32px;
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
    max-width: 1300px;
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
    width: 100%;
  }

  .slideshow-container {
    display: flex;
    transition: transform 0.3s ease-in-out;
    width: 100%;
  }

  .slide {
    min-width: 100%;
    flex-shrink: 0;
    width: 100%;
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

  .item p {
    font-size: 1.2rem;
    margin: 1rem;
    color: #333;
  }
</style>
