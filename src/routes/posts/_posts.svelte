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

<div class="container mx-auto">
  <div class="flex pt-10 pb-10 font-bold">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <div class="mr-2">
      <a href=#> 
        <p class="justify-center w-16 leading-tight text-sm text-center">
          <img class="rounded-full w-16 h-16" src={authorDp} alt="Profile picture"/>
        </p>
        <p>{author}</p>
    </a>
    </div>
    <div>
      <h1>{title}</h1>
      <div class="flex text-sm mt-2">
        <p class="text-gray-400 mr-3 mt-1">{date}</p>
        {#each uniqueCategories as category}
          <p class="p-1 px-1 ml-2 bg-emerald-500 text-black rounded-xl">{category}</p>
        {/each}
      </div>
      
    </div>
  </div>
  <slot />
</div>

  
  