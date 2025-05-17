<script>
  import Hero from './lib/Hero.svelte';
  import About from './lib/About.svelte';
  import Portfolio from './lib/Portfolio.svelte';
  import Footer from './lib/Footer.svelte';
  import Navbar from './lib/Navbar.svelte';
  import ScrollToTop from './components/ScrollToTop.svelte';
</script>

<!-- Critical: Navbar must remain at the top level -->
<Navbar />

<main>
  <Hero />
  <About />
  <Portfolio />
  <Footer />
</main>

<ScrollToTop />

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: 'Nunito', sans-serif;
    background-color: #faf7f2;
  }

  main {
    width: 100%;
    margin: 0;
    padding: 0;
  }
</style>
