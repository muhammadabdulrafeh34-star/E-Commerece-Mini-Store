import React from 'react'
import Select from 'react-select'

function Sort({ sortOption, setSortOption }) {
    // const [sortOption, setSortOption] = React.useState(null)

    const options = [
        { value: 'price-asc', label: 'Price: Low to High' },
        { value: 'price-desc', label: 'Price: High to Low' },
        { value: 'rating', label: 'Customer Rating' }
    ]

    return (
        <div>
            <Select
                options={options}
                value={sortOption}
                onChange={(selectedOption) => setSortOption(selectedOption)}
            />
        </div>
    )
}

export default Sort