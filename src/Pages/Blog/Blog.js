import React from "react";
import PageInfo from "../Shared/PageInfo/PageInfo";

const Blog = () => {
	return (
		<div className="container mt-5">
			<div>
				Question 1: What is Different JavaScript and Nodejs? JavaScript is
				programming languages and writing scripts on the website. Nodejs is a
				JavaScript runtime environment.JavaScript used on the client
				side,frontend development and nodeJs used on the server side
				development.javascript is the upgraded version of ECMA script engine
				written in C++.NodeJs written c, c++ and javascript.
			</div>
			<div>
				Question 2: When used Nodejs or Mongodb? Nodejs is a JavaScript runtime
				environment.Actually nodejs used when we develop server site. And
				Mongodb doing work store data. So, mongodb used for data store.
			</div>
			<div>
				Question 3: What is Different SQL and NoSQL? SQL Data structure is
				relational or NoSQL is no relational data structure.SQL databases
				defines and manipulates data based structured query language.NoSQL is
				database dynamic schema for unstructured data.SQL vertically scalable ,
				NoSQL is horizontally scalable.NoSQL is follows CAP,SQL follows ACID
				property.
			</div>
		</div>
	);
};

export default Blog;
