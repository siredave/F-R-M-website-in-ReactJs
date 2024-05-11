import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
	const [getData, setGetDAta] = useState([]);
	const [url, setUrl] = useState("http://localhost:3000/Trips");


	// fetch("http://localhost:3000/Trips")
	// 	.then((response) => response.json())
	// 	.then((data) => setGetDAta(data));

	useEffect(() => {
		axios
			.get(url)
			.then((response) => {
				console.log("Datass:", response.data);
				setGetDAta(response.data);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}, [url]);

	return (
		<>
			<div>
				<h2>Trip List</h2>
				<ul className="divide-y divide-gray-200 mx-auto max-w-md border border-gray-200 shadow-md">
					{getData.map((item, idx) => (
						<li key={idx} className="py-4 flex flex-col items-center">
							<h3 className="text-lg font-semibold">{item.title}</h3>
							<p className="text-gray-500">{item.price}</p>
						</li>
					))}
				</ul>
				<div className="flex flex-col items-center text-center mt-2 mb-2">
					<button onClick={() => setUrl("http://localhost:3000/Trips?loc=europe")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[30%] mt-2 mb-2">
						European trips
					</button>
					<button onClick={() => setUrl("http://localhost:3000/Trips")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[30%]">
						All trips
					</button>
				</div>
			</div>
		</>
	);
}

export default App;
