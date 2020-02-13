const path = require('path')
const _ = require("lodash")
// Create pages for category and blogs separately using two separate
// queries. We use the `graphql` function which returns a Promise
// and ultimately resolve all of them using Promise.all(Promise[])
exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions;
	const blogTemplate = path.resolve('src/templates/BlogPost/index.js');
    const categoryPageTemplate = path.resolve('src/templates/CategoryPage/index.js');
    const pageTemplate = path.resolve('src/templates/Page/index.js');
    const tagTemplate = path.resolve('src/templates/Tags/index.js');

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

	// Individual category pages
	const category = graphql(`
		{
			allContentfulCategoryPage(limit: 100) {
                edges {
                    node {
                        slug
                        id
                    }
                }
            }
		}
	`).then(result => {
		if (result.errors) {
			Promise.reject(result.errors);
		}

		// Create category pages
		result.data.allContentfulCategoryPage.edges.forEach((edge) => {
            createPage ({
                path: `/categories/${_.kebabCase(edge.node.slug)}/`,
                component: categoryPageTemplate,
                context: {
                slug: edge.node.slug
                }
            })
        });
    });
    
     //Individual pages
	const pages = graphql(`
    {
        allContentfulPage(limit: 100) {
            edges {
                node {
                    slug
                    id
                }
            }
        }
    }
    `).then(result => {
        if (result.errors) {
            Promise.reject(result.errors);
        }

        // Create pages
        result.data.allContentfulPage.edges.forEach((edge) => {
            createPage ({
                path: edge.node.slug,
                component: pageTemplate,
                context: {
                slug: edge.node.slug
                }
            })
        });
    });

    // Individual tag pages
    const tags = graphql(`
    {
        tagsGroup: allContentfulBlogPost(limit: 1000) {
            group(field: tags) {
                fieldValue
                field
            }
        }

    }
    `).then(result => {
        if (result.errors) {
            Promise.reject(result.errors);
        }

        // Make tag pages
        result.data.tagsGroup.group.forEach(tag => {
            createPage({
                path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
                component: tagTemplate,
                context: {
                    tag: tag.fieldValue,
                }
            })
        });
    });

	// Return a Promise which would wait for both the queries to resolve
	return Promise.all([blogs, category, pages, tags]);
};