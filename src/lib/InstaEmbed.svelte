<!-- Embed.svelte -->
<script>
    import { onMount } from 'svelte';
  
    onMount(() => {
      const script = document.createElement('script');
      script.setAttribute('src', 'https://www.instagram.com/embed.js');
      script.async = true;
      document.body.appendChild(script);
    });
  </script>
  
  <div>
    <blockquote 
      class="instagram-media" 
      data-instgrm-permalink="https://www.instagram.com/mayraskleipraatjes/"
      data-instgrm-version="14"
      style="background:#FFF; border:0; margin: 1rem 0; padding:0;">
    </blockquote>
  </div>