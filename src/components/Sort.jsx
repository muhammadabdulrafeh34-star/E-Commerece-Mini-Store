import React from 'react'
import Select from 'react-select'

function Sort({ sortOption, setSortOption }) {
    const options = [
        { value: 'price-asc', label: 'Price: Low to High' },
        { value: 'price-desc', label: 'Price: High to Low' },
        { value: 'rating', label: 'Customer Rating' }
    ]

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            backgroundColor: '#1f2937', // bg-gray-800
            borderColor: state.isFocused ? '#f97316' : '#374151',
            borderRadius: '0.75rem',
            padding: '2px 4px',
            boxShadow: 'none',
            '&:hover': {
                borderColor: '#f97316'
            },
            cursor: 'pointer',
            minHeight: '38px',
            width: '180px'
        }),
        valueContainer: (provided) => ({
            ...provided,
            padding: '0px 6px',
        }),
        singleValue: (provided) => ({
            ...provided,
            color: '#f3f4f6',
            fontSize: '13px',
            fontWeight: '500'
        }),
        placeholder: (provided) => ({
            ...provided,
            color: '#9ca3af',
            fontSize: '13px'
        }),
        menu: (provided) => ({
            ...provided,
            backgroundColor: '#1f2937',
            borderRadius: '0.75rem',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)',
            overflow: 'hidden'
        }),
        // Yeh line portal menu ko sabse upar rakhe gi
        menuPortal: (provided) => ({
            ...provided,
            zIndex: 99999, 
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected 
                ? '#f97316' 
                : state.isFocused 
                ? '#374151' 
                : 'transparent',
            color: '#f3f4f6',
            fontSize: '13px',
            cursor: 'pointer',
            padding: '8px 12px',
        }),
        indicatorSeparator: () => ({
            display: 'none'
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            color: '#9ca3af',
            padding: '4px',
            '&:hover': {
                color: '#f3f4f6'
            }
        })
    }

    return (
        <div>
            <Select
                options={options}
                value={sortOption}
                onChange={(selectedOption) => setSortOption(selectedOption)}
                styles={customStyles}
                placeholder="Sort By"
                isSearchable={false}
                // Yeh sabse main prop hai jo menu ko HTML ke body ke sath attach kar deta hai
                menuPortalTarget={document.body} 
                menuPosition={'fixed'}
            />
        </div>
    )
}

export default Sort