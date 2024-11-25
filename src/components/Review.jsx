import React from 'react';
import { CategoryInput, DescriptionInput, NameInput, StarInput } from './Inputs';

const Review = ({ onSaveReview, formValues, setFormValue, resetFormValues }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSaveReview(
            {
                movieName: formValues.movieName,
                category: formValues.category,
                stars: formValues.stars,
                description: formValues.description,
            },
            formValues.index
        );
        resetFormValues();
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto space-y-4"
        >
            {/* Title */}
            <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
                {formValues["index"] ? "Edit Review" : "Add Review"}
            </h2>

            {/* Movie Name Input */}
            <NameInput
                value={formValues["movieName"]}
                onchange={(val) => setFormValue(val, "movieName")}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Category Input */}
            <CategoryInput
                selectedCategory={formValues["category"]}
                onchange={(val) => setFormValue(val, "category")}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Star Input */}
            <StarInput
                selectedCategory={formValues["stars"]}
                onchange={(val) => setFormValue(val, "stars")}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Description Input */}
            <DescriptionInput
                value={formValues["description"]}
                onchange={(val) => setFormValue(val, "description")}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
            >
                {formValues["index"] ? "Edit Review" : "Add Review"}
            </button>
        </form>
    );
};

export default Review;
