import React from "react";
import Link from "gatsby-link";
import FaClock from "react-icons/lib/fa/clock-o";

export default ({ data }) => {
	const post = data.markdownRemark;
	return (
		<div className={"blog-page"}>
			<div className="avocado flex col-12 post-container">
				<div className="blog-header flex center col">
					<h1 className={"main-heading"}>{post.frontmatter.title}</h1>
					<div className="tags-container">
						Taggar:
						{post.frontmatter.tags.map(tag => <span key={tag.id}>{tag} </span>)}
						|
						<span>
							<FaClock /> {post.timeToRead} min
						</span>
					</div>
				</div>
				<div className="col-12 flex center">
					<div dangerouslySetInnerHTML={{ __html: post.html }} />
				</div>
			</div>
		</div>
	);
};

export const query = graphql`
	query BlogPostQuery($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				tags
				date
			}
			timeToRead
		}
	}
`;
