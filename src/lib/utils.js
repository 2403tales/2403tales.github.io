const getUrlFromName = (name) => {
	return name.replace('.md', '').replace('/src/routes/', '/');
};

export { getUrlFromName };
