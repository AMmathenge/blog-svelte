<script>
/** @type {import('./$types').PageData} */

    export let data;
</script>

<!-- <h1>{data.posts}</h1> -->

<div class="title">
  {#each data.posts as post}
    <div  class="post">
      <h2>{post.title.substring(0, 20)}</h2>
      <p>{post.body.substring(0, 150)}</p>
      <p class="link"><a href={`/blog/${post.id}`}>Read More</a></p>

    </div>
   
  {/each}

</div>  

<style>
 .title{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px
 }
 .post{
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 1%;
  box-shadow: 0 0 15px #eee
 }
 h2{
  margin:0;
 }
 .link{
  text-align: right;
 }
</style>



     
