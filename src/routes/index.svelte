<svelte:head>
    <title>Home | 2403tales</title>
</svelte:head>
<script >
    const getUrlFromName = (name) => {
        return name.replace('.md', '').replace('../', '/')
    }

    const allPosts = import.meta.globEager('./posts/*.md')
    let allPostData = []
    for (let path in allPosts) {
        const post = allPosts[path];
        allPostData.push({...post.metadata, link: getUrlFromName(path)})
    }
</script>
<ul>
    {#each allPostData as post}
        <li>
            <a href={post.link}>{post.title}</a>
        </li>
    {/each}
</ul> 