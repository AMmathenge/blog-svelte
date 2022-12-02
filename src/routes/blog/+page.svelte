<script>
    /** @type {import('./$types').PageData} */
    
        export let data;
</script>
<div class="title">
    {#each data.blog as blog}
      <div  class="post">
        <h2>{blog.title}</h2>
        <p>{blog.body}</p>
      </div>
     
    {/each}
  
  </div>  