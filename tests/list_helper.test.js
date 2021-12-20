const listHelper = require("../utils/list_helper")

test("dummy returns one", () => {
	const blogs = []

	const result = listHelper.dummy(blogs)
	expect(result).toBe(1)
})

const listWithBlogs = [
	{
		_id: "5a422aa71b54a676234d17f8",
		title: "Go To Statement Considered Harmful",
		author: "Edsger W. Dijkstra",
		url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
		likes: 5,
		__v: 0
	},
	{
		_id: "5a422aasfsfjsf936234d17f8",
		title: "Deploy a Python Visualization Panel App to Google Cloud",
		author: "Sophia Yang",
		url: "https://towardsdatascience.com/deploy-a-python-visualization-panel-app-to-google-cloud-cafe558fe787",
		likes: 68,
		__v: 0
	},
	{
		_id: "4424sff424slfflsfll2334",
		title: "Introduction to SHAP with Python",
		author: "Connor O'Sullivan",
		url: "https://towardsdatascience.com/introduction-to-shap-with-python-d27edc23c454",
		likes: 76,
		__v: 0
	},
	{
		_id: "5a422a851b54a676234d17f7",
		title: "React patterns",
		author: "Michael Chan",
		url: "https://reactpatterns.com/",
		likes: 7,
		__v: 0
	},
	{
		_id: "5a422b3a1b54a676234d17f9",
		title: "Canonical string reduction",
		author: "Edsger W. Dijkstra",
		url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
		likes: 12,
		__v: 0
	},
	{
		_id: "5a422b891b54a676234d17fa",
		title: "First class tests",
		author: "Robert C. Martin",
		url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
		likes: 10,
		__v: 0
	},
	{
		_id: "5a422ba71b54a676234d17fb",
		title: "TDD harms architecture",
		author: "Robert C. Martin",
		url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
		likes: 0,
		__v: 0
	},
	{
		_id: "5a422bc61b54a676234d17fc",
		title: "Type wars",
		author: "Robert C. Martin",
		url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
		likes: 2,
		__v: 0
	}  
]

describe("total likes", () => {

	test("if passed one blog, total likes should be just the likes from that", () => {
		expect(listHelper.totalLikes([listWithBlogs[0]])).toBe(5)
	})

	test("if no blogs, then total likes should be 0", () => {
		expect(listHelper.totalLikes([])).toBe(0)
	})

	test("if passed a larger list, calculation should be right", () => {
		expect(listHelper.totalLikes(listWithBlogs)).toBe(180)
	})
})

describe("favourite blog", () => {

	test("If passed one blog, favourite blog should be that blog", () => {
		expect(listHelper.favoriteBlog([listWithBlogs[0]])).toEqual({ 
			title: "Go To Statement Considered Harmful",
			author: "Edsger W. Dijkstra",
			likes: 5 
		})
	})

	test("if passed no blogs, output should be a blank object", () => {
		expect(listHelper.favoriteBlog([])).toEqual({})
	})

	test("If passed a list of blogs, should find favourite blog correctly", () => {
		expect(listHelper.favoriteBlog(listWithBlogs)).toEqual({ 
			title: "Introduction to SHAP with Python",
			author: "Connor O'Sullivan",
			likes: 76,
		})
	})


})