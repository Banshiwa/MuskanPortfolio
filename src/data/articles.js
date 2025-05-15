import React from "react";

function article_1() {
	return {
		date: "15 May 2025",
		title: "Real-World Impact of AI and Machine Learning",
		description:
			"AI and ML are no longer just buzzwords—they are driving innovation in energy systems, education, and interactive applications. Explore how these technologies are shaping the future.",
		keywords: [
			"AI and ML Applications",
			"Muskan Kumari",
			"Artificial Intelligence",
			"Machine Learning",
			"Tech Projects",
		],
		style: `
			.article-content {
				display: flex;
				flex-direction: column;
				align-items: center;
			}

			.randImage {
				align-self: center;
				outline: 2px solid #4A90E2;
			}
		`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						Artificial Intelligence (AI) and Machine Learning (ML) are revolutionizing how we solve real-world problems—from optimizing solar panel performance to building intelligent decision systems in education. With a strong foundation in AI/ML, I’ve implemented smart algorithms in my solar tracking project and continue exploring the vast potential of these technologies in various domains.
					</div>
					<img
						src="https://picsum.photos/300/200"
						alt="AI Impact"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "15 May 2025",
		title: "Building a College System with the MERN Stack",
		description:
			"A detailed look into how I designed and developed a full-stack college management system using MongoDB, Express, React, and Node.js.",
		keywords: [
			"College Management System",
			"Muskan Kumari",
			"MERN Stack",
			"ReactJS",
			"Full-stack Project",
		],
		style: ``,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						The College System project was built to simplify administration through automated student management, attendance tracking, and seamless internal communication. Using the MERN stack allowed me to ensure responsiveness, maintainability, and real-time updates in the system. This project reflects my skills in backend logic, frontend design, and full-stack deployment.
					</div>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;