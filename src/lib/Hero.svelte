<script>
  import background from '../assets/Productoverzicht.jpg?url';

  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@200;300;400&display=swap" rel="stylesheet">
</svelte:head>

<section class="hero">
  <div class="background-container">
    <img src={background} alt="" class="background-image" />
    <div class="overlay"></div>
  </div>
  <div class="content">
    <h1>Mayra van der Waal</h1>
    <h2>Handgemaakte keramiek</h2>
    <div class="buttons">
      <button class="navigation" on:click={() => scrollToSection('about')}>Over mij</button>
      <button class="navigation" on:click={() => scrollToSection('portfolio')}>Portfolio</button>
      <button class="navigation" on:click={() => scrollToSection('contact')}>Contact</button>
    </div>
  </div>
</section>

<style>
  .hero {
    height: 100vh;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
    overflow: hidden;
  }

  .background-container {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .background-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }

  .content {
    position: relative;
    padding: 2rem;
    width: 100%;
    max-width: min(90vw, 1200px);
  }

  h1 {
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: clamp(2rem, 5vw, 4rem);
    margin: 0;
    font-weight: 300;
    letter-spacing: 0.05em;
  }

  h2 {
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: clamp(1rem, 2vw, 1.5rem);
    margin: 1rem 0 2rem;
    font-weight: 300;
    letter-spacing: 1px;
  }

  .buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin: 0 auto;
    max-width: 600px;
  }

  .navigation {
    width: 160px;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    border: 2px solid white;
    color: white;
    background-color: transparent;
    border-radius: 4px;
    cursor: pointer;
    transition: transform 0.2s;
    white-space: nowrap;
  }

  .navigation:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    .navigation {
      width: 140px;
      padding: 0.7rem 1rem;
    }
  }

  @media (max-width: 480px) {
    .buttons {
      gap: 0.5rem;
    }

    .navigation {
      width: 120px;
      padding: 0.6rem 0.8rem;
      font-size: 0.9rem;
    }
  }
</style> 