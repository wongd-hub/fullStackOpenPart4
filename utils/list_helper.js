/* eslint-disable no-unused-vars */
var _ = require("lodash")

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

const mostBlogs = (blogs) => {

	if (blogs.length > 0) {

		const mostProlificAuthor = 	_
			.chain(blogs)
			.countBy("author")
			.toPairs()
			.maxBy(o => o[1])
			.value()

		return {
			author: mostProlificAuthor[0],
			blogs: mostProlificAuthor[1]
		}

	} else {

		return {}

	}

}

const mostLikes = (blogs) => {

	if (blogs.length > 0) {

		const mostLikedAuthor = _
            .chain(blogs.map(el => {return { author: el.author, likes: el.likes }}))
            .reduce((accum, el) => {
                return accum = {
                    ...accum,
                    [el.author]: typeof(accum) === "undefined" 
                        ? el.likes 
                        : typeof(accum[el.author]) === "undefined"
                            ? el.likes
                            : accum[el.author] + el.likes
                }
            }, {})
            .toPairs()
            .maxBy(o => o[1])
            .value()

		return {
			author: mostLikedAuthor[0],
			likes: mostLikedAuthor[1]
		}

	} else {

		return {}

	}

}

module.exports = {
	dummy, 
	totalLikes,
	favoriteBlog,
    mostBlogs,
    mostLikes
}