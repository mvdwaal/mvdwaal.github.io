<script>
  import logoBig from '../assets/logo_big.svg?url';
</script>

<nav class="navbar">
  <div class="logo-container">
    <img src={logoBig} alt="Mayra van der Waal Logo" class="logo" />
  </div>
</nav>

<style>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background-color: #bcbfa0;  /* Soft mint green color */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
  }

  .logo-container {
    display: flex;
    align-items: center;
  }

  .logo {
    height: 60px;
    width: auto;
  }
</style> 