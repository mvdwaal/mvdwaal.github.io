<script>
  // Import beach background image
  import beachImage from "../assets/forestSummer.jpeg?url";

  const mail = "keramiek@mayravanderwaal.nl";
  const instagram = "https://www.instagram.com/mayraskleipraatjes/";
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
</svelte:head>

<footer id="contact">
  <div class="background-container">
    <img src={beachImage} alt="" class="background-image" />
    <div class="overlay"></div>
  </div>
  <div class="content">
    <h2>Contact</h2>
    <p>Heb je interesse in mijn werk? Stuur een mailtje of volg me op Instagram!</p>
    <div class="contact-buttons">
      <a href={`mailto:${mail}`} class="contact-button" target="_blank" rel="noopener noreferrer">
        <i class="fas fa-envelope"></i>
        <span>{mail}</span>
      </a>
      <a href={instagram} class="contact-button" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-instagram"></i>
        <span>@mayraskleipraatjes</span>
      </a>
    </div>
  </div>
</footer>

<style>
  footer {
    height: 60vh;
    position: relative;
    color: white;
    overflow: hidden;
  }

  .background-container {
    position: absolute;
    top: 0;
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
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rem;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 300;
    margin: 0 0 1rem;
  }

  p {
    font-size: 1.2rem;
    margin: 0 0 2rem;
  }

  .contact-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: rgba(0, 0, 0, 0.6);
  }

  .contact-button {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    border: 2px solid white;
    color: white;
    background-color: transparent;
    border-radius: 4px;
    cursor: pointer;
    transition: transform 0.2s;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    text-decoration: none;
  }

  .contact-button i {
    font-size: 1.2rem;
  }

  .contact-button:hover {
    transform: translateY(-2px);
  }
</style>
