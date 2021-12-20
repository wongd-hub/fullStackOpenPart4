/* eslint-disable no-unused-vars */
const dummy = (blogs) => {
	return 1
}

const totalLikes = (blogs) => {
    
	return blogs.length === 0 ?
		0 :
		blogs.reduce((sum, blog) => sum + blog.likes, 0)
    
} 

const favoriteBlog = (blogs) => {

	if (blogs.length > 0) {

		const maxLikes = Math.max(...blogs.map(el => el.likes))
		const faveBlog = blogs.find(el => el.likes === maxLikes)

		return {
			title: faveBlog.title,
			author: faveBlog.author,
			likes: faveBlog.likes
		}

	} else {

		return {}

	}

}

module.exports = {
	dummy, 
	totalLikes,
	favoriteBlog
}