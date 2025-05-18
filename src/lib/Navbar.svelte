<script>
  import logoBig from "../assets/logo_big.svg?url";

  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
</script>

<nav class="navbar">
  <div class="logo">
    <img src={logoBig} alt="Mayra van der Waal Logo" class="logo" />
  </div>
  <div class="buttons">
    <button class="navigation" on:click={() => scrollToSection("about")}
      >Over mij</button
    >
    <button class="navigation" on:click={() => scrollToSection("portfolio")}
      >Portfolio</button
    >
    <button class="navigation" on:click={() => scrollToSection("contact")}
      >Contact</button
    >
  </div>
</nav>

<style>
  .navbar {
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background-color: #bcbfa0; /* Soft mint green color */
    z-index: 100;
    display: flex;
    align-items: center;
    position: fixed;
    justify-content: flex-end;
  }

  .logo {
    height: 60px;
    width: auto;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .buttons {
    display: flex;
    gap: 10px;
    padding-right: 16px;
  }

  .navigation {
    width: 110px;
    height: 40px;
    font-size: 15px;
    border: 1px solid black;
    color: black;
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
    .buttons {
      display: none;
    }
  }
</style>
