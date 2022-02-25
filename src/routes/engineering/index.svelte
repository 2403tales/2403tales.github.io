<script context="module">
    const getUrlFromName = (name) => {
        return name.replace('.md', '').replace('../', '/')
    }
</script>
<script>
    const allPosts = import.meta.globEager('../posts/*.md')
    let allPostData = []
    for (let path in allPosts) {
        const post = allPosts[path];
        allPostData.push({...post.metadata, link: getUrlFromName(path)})
    }
</script>
<h1>
    <ul>
        {#each allPostData as post}
            <li>
                <a href={post.link}>{post.title}</a>
            </li>
        {/each}
    </ul> 
</h1>
