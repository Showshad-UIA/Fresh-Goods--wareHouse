import React from "react";
import PageInfo from "../Shared/PageInfo/PageInfo";

const Blog = () => {
	return (
		// <div className="container mt-5 mb-5">
		// 	<div>
		// 		Question-1: What is Different JavaScript and Nodejs? JavaScript is
		// 		programming languages and writing scripts on the website. Nodejs is a
		// 		JavaScript runtime environment.JavaScript used on the client
		// 		side,frontend development and nodeJs used on the server side
		// 		development.javascript is the upgraded version of ECMA script engine
		// 		written in C++.NodeJs written c, c++ and javascript.
		// 	</div>

		// 	<div>
		// 		Question-2: When used Nodejs or Mongodb? Nodejs is a JavaScript runtime
		// 		environment.Actually nodejs used when we develop server site. And
		// 		Mongodb doing work store data. So, mongodb used for data store.
		// 	</div>
		// 	<div>
		// 		Question-3: What is Different SQL and NoSQL? SQL Data structure is
		// 		relational or NoSQL is no relational data structure.SQL databases
		// 		defines and manipulates data based structured query language.NoSQL is
		// 		database dynamic schema for unstructured data.SQL vertically scalable ,
		// 		NoSQL is horizontally scalable.NoSQL is follows CAP,SQL follows ACID
		// 		property.
		// 	</div>
		// </div>
		<div className="mt-5 mx-auto w-50 ">
			<div>
				<div className="card mx-auto mb-5  product g-4 w-100 col d-flex justify-content-center ">
					<h3 className="text-center mb-5">Question-1:</h3>
					<div>
						<h4>What is the different between JavaScript and Nodejs?</h4>
						<p>
							JavaScript is programming languages and writing scripts on the
							website. Nodejs is a JavaScript runtime environment.JavaScript
							used on the client side,frontend development and nodeJs used on
							the server side development.javascript is the upgraded version of
							ECMA script engine written in C++.NodeJs written c, c++ and
							javascript.
						</p>
					</div>
				</div>
			</div>
			<div>
				<div className="card mx-auto mb-5  product g-4 w-100 col d-flex justify-content-center ">
					<h3 className="text-center mb-5">Question-2:</h3>
					<div>
						<h4>When we used Nodejs or Mongodb?</h4>
						<p>
							Nodejs is a JavaScript runtime environment.Actually nodejs used
							when we develop server site. And Mongodb doing work store data.
							So, mongodb used for data store.
						</p>
					</div>
				</div>
			</div>
			<div>
				<div className="card mx-auto mb-5  product g-4 w-100 col d-flex justify-content-center ">
					<h3 className="text-center mb-5">Question-3:</h3>
					<div>
						<h4>What is the different between SQL and NoSQL? </h4>
						<p>
							SQL Data structure is relational or NoSQL is no relational data
							structure.SQL databases defines and manipulates data based
							structured query language.NoSQL is database dynamic schema for
							unstructured data.SQL vertically scalable , NoSQL is horizontally
							scalable.NoSQL is follows CAP,SQL follows ACID property.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
