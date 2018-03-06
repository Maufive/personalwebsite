import React from "react";
import Link from "gatsby-link";
import FaClock from "react-icons/lib/fa/clock-o";

export default ({ data }) => {
	return (
		<div className={"blog-page"}>
			<div className="avocado flex col-12">
				<div className="blog-header col-12 flex center">
					<h1 className={"main-heading"}>BLOG</h1>
				</div>
				{/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4> */}
				<div className="blogposts-container flex center">
					{data.allMarkdownRemark.edges.map(({ node }) => (
						<div className={"blogpost col-12 flex"} key={node.id}>
							<Link to={node.fields.slug}>
								<div>
									<h2>{node.frontmatter.title}</h2>
									<h3>
										<FaClock /> {node.timeToRead} min | publicerat:{" "}
										{node.frontmatter.date}
									</h3>
								</div>
								<p>{node.excerpt}</p>
								{/* Excerpt = utdraget för varje bloginlägg */}
							</Link>
							{/* <div className="divider" /> */}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export const query = graphql`
	query IndexQuery {
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			totalCount
			edges {
				node {
					id
					timeToRead
					frontmatter {
						title
						date(formatString: "DD MMMM, YYYY")
						tags
					}
					fields {
						slug
					}
					excerpt
				}
			}
		}
	}
`;
