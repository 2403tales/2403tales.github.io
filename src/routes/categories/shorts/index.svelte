<svelte:head> 
    <title>Data Tales | 2403tales</title>
</svelte:head>
<script>
    import PostList from "$lib/PostList/index.svelte"
</script>

<h1>Short stories</h1>
<PostList tagList={['shorts']} />
