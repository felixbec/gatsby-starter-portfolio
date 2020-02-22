const path = require('path')
const _ = require("lodash")
// Create pages for category and blogs separately using two separate
// queries. We use the `graphql` function which returns a Promise
// and ultimately resolve all of them using Promise.all(Promise[])
exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions;
	const blogTemplate = path.resolve('src/templates/BlogPost/index.js');

	// Individual blogs pages
	const blogs = graphql(`
		{
            allContentfulBlogPost (limit:100) {
                edges {
                    node {
                        id
                        slug
                    }
                }
            }
		}
	`).then(result => {
		if (result.errors) {
			Promise.reject(result.errors);
		}

		// Create blog pages
		result.data.allContentfulBlogPost.edges.forEach((edge) => {
            createPage ({
                path: edge.node.slug,
                component: blogTemplate,
                context: {
                slug: edge.node.slug
                }
            })
        });
	});

	// Return a Promise which would wait for both the queries to resolve
	return Promise.all([blogs]);
};