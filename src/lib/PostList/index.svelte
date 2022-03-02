<script context="module">
    const allPosts = import.meta.globEager('/src/routes/posts/*.md')
</script>
<script>
    import {getUrlFromName} from '../utils'
    export let tagList;
    let allPostData = []
    for (let path in allPosts) {
        const post = allPosts[path];
        tagList.forEach(tag => {
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
