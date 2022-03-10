<script>
    export let title
    export let date
    export let description
    export let author
    const authorDp  = `/images/${author}.png` // relative to index.html
    // const authorProfileURL = `/author/${author}`
    export let categories
    const uniqueCategories = [...new Set(categories)]

    const getCategoryURL = (category) => `/category/${category}`
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description}>
</svelte:head>

<div class="container md:mx-auto px-4">
  <div class="flex pt-5 pb-20 font-bold">
    
    <div>
      <div class="mr-2 flex">
        <div>
          
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a href="#"> 
            <p class="justify-center w-16 leading-tight text-sm text-center">
              <!-- svelte-ignore a11y-img-redundant-alt -->
              <img class="rounded-full w-16 h-16" src={authorDp} alt="Profile picture"/>
            </p>
          </a>
        </div>
        <div class="ml-3 mb-3">
          <a href="#"> 
            <p>{author}</p>
          </a>
          <p class="text-gray-400">{date}</p>
        </div>
        
      </div>
      <h1>{title}</h1>
      <div class="flex text-sm mt-2">
        {#each uniqueCategories as category}
          <p class="p-1 px-1 mr-2 bg-emerald-500 text-black rounded-xl">{category}</p>
        {/each}
      </div>
      
    </div>
  </div>
  <slot />
</div>

  
  