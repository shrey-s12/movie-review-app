import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function useForceUpdate() {
    const [, setValue] = useState(0);
    return () => setValue(value => value + 1);
}

const View = ({ setFormValues }) => {
    const navigate = useNavigate();
    const forceUpdate = useForceUpdate();

    const reviewsString = localStorage.getItem("review") || "[]";
    const reviews = JSON.parse(reviewsString);
    console.log(reviews);

    const handleDelete = (index) => {
        reviews.splice(index, 1);
        const remainingReviews = JSON.stringify(reviews);
        localStorage.setItem("review", remainingReviews);
        forceUpdate();
    }

    const handleEdit = (index) => {
        const review = reviews[index];
        setFormValues({ ...review, index: index });
        navigate("/review");
    }

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-300">
                {/* Table Head */}
                <thead>
                    <tr className="bg-blue-600 text-white">
                        <th className="px-4 py-2 text-left border border-gray-300">Movie Name</th>
                        <th className="px-4 py-2 text-left border border-gray-300">Category</th>
                        <th className="px-4 py-2 text-left border border-gray-300">Stars</th>
                        <th className="px-4 py-2 text-left border border-gray-300">Description</th>
                        <th className="px-4 py-2 text-left border border-gray-300">Action</th>
                    </tr>
                </thead>
                {/* Table Body */}
                <tbody>
                    {reviews.map((review, index) => (
                        <tr
                            key={index}
                            className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-200`}
                        >
                            <td className="px-4 py-2 border border-gray-300">{review.movieName}</td>
                            <td className="px-4 py-2 border border-gray-300">{review.category}</td>
                            <td className="px-4 py-2 border border-gray-300">{review.stars}</td>
                            <td className="px-4 py-2 border border-gray-300">{review.description}</td>
                            <td className="px-4 py-2 border border-gray-300 space-x-2">
                                <button
                                    onClick={() => handleDelete(index)}
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                >
                                    Delete
                                </button>
                                <button
                                    onClick={() => handleEdit(index)}
                                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                                >
                                    Edit
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}

export default View