export const NameInput = ({ value, onchange }) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Movie Name</label>
            <input
                type="text"
                value={value}
                onChange={(e) => onchange(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
};

const categories = [
    "Action", "Adventure", "Comedy", "Drama", "Horror", "Thriller",
    "Science Fiction (Sci-Fi)", "Fantasy", "Romance", "Mystery",
    "Crime", "Documentary", "Animation", "Family", "Musical",
    "Historical", "War", "Western", "Biographical (Biopic)", "Sports"
];

export const CategoryInput = ({ onchange }) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Select Category</label>
            <select
                onChange={(e) => onchange(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="" disabled selected>
                    Select a category
                </option>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
};

const stars = [
    "5 ⭐⭐⭐⭐⭐",
    "4 ⭐⭐⭐⭐",
    "3 ⭐⭐⭐",
    "2 ⭐⭐",
    "1 ⭐"
];

export const StarInput = ({ onchange }) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Gave Stars/Star</label>
            <select
                onChange={(e) => onchange(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="" disabled selected>
                    Select
                </option>
                {stars.map((star) => (
                    <option key={star} value={star}>
                        {star}
                    </option>
                ))}
            </select>
        </div>
    );
};

export const DescriptionInput = ({ value, onchange }) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
                Write a description about the movie
            </label>
            <textarea
                value={value}
                onChange={(e) => onchange(e.target.value)}
                rows="4"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
        </div>
    );
};
