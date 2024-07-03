import { useState } from "react"

const CategoryBtn = ({ name }) => {
    const [isSelected, setIsSelected] = useState(false);

    return(
        <div className={`text-white py-2 px-4 rounded-3xl cursor-pointer select-none ${isSelected ? 'bg-[#19A5F3]' : 'bg-[#A6A6A6]'}`}
            onClick={(e) => {setIsSelected(!isSelected);}}>
            { name }
        </div>
    )
}
const CategoryBtnList = () => {
    return(
        <>
        <div className='grid grid-cols-8 gap-5'>
            <CategoryBtn name = {'Searching Product'}/>
            <CategoryBtn name = {'Discuss Trending'}/>
            <CategoryBtn name = {'Special Service'}/>
            <CategoryBtn name = {'Lorem Ipsum'}/>
            <CategoryBtn name = {'Lorem Ipsum'}/>
            <CategoryBtn name = {'Lorem Ipsum'}/>
            <CategoryBtn name = {'Lorem Ipsum'}/>
            <CategoryBtn name = {'Lorem Ipsum'}/>
        </div>
        </>
    )
}

export default CategoryBtnList;