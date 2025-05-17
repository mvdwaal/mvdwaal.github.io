<script>
  // Import beach background image
  import beachImage from '../assets/forestBackground.jpg';
</script>

<footer id="contact">
  <div class="background-container">
    <img src={beachImage} alt="" class="background-image" />
    <div class="overlay"></div>
  </div>
  <div class="content">
    <h2>Contact</h2>
    <p>Voor vragen of opdrachten, neem gerust contact op</p>
    <a href="mailto:keramiek@mayravanderwaal.nl" class="contact-button">Email mij</a>
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
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1))
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

  .contact-button {
    display: inline-block;
    padding: 1rem 2rem;
    background-color: white;
    color: #333;
    text-decoration: none;
    border-radius: 4px;
    font-size: 1.1rem;
    transition: transform 0.2s;
  }

  .contact-button:hover {
    transform: translateY(-2px);
  }
</style> 