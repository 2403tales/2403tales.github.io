<svelte:head> 
    <title>Data Tales | 2403tales</title>
</svelte:head>
<script>
    const getUrlFromName = (name) => {
        return name.replace('.md', '').replace('../', '/')
    }

    const tags = ['data-engineering', 'data-science', 'big-data']
    const allPosts = import.meta.globEager('../../posts/*.md')
    let allPostData = []
    for (let path in allPosts) {
        const post = allPosts[path];
        console.log(post.metadata.categories)
        tags.forEach(tag => {
            if(post.metadata.categories.includes(tag))
                allPostData.push({...post.metadata, link: getUrlFromName(path)})
        })
    }
</script>
<ul>
    {#each allPostData as post}
        <li>
            <a href={post.link}>{post.title}</a>
        </li>
    {/each}
</ul> 
