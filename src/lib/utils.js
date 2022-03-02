const getUrlFromName = (name) => {
	return name.replace('.md', '').replace('../', '/');
};

export { getUrlFromName };
