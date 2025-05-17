<script>
  import { onMount } from 'svelte';
  
  let showButton = false;
  
  function checkScroll() {
    showButton = window.scrollY > 300;
  }
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  onMount(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  });
</script>

<button
  class="scroll-to-top"
  on:click={scrollToTop}
  style="display: {showButton ? 'flex' : 'none'}"
  aria-label="Scroll to top"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
</button>

<style>
  .scroll-to-top {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }

  .scroll-to-top:hover {
    background-color: #f8fafc;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .scroll-to-top svg {
    color: #4a5568;
  }
</style> 