import {useState} from "react";

interface PaginateData {
    total: number,
    pageSize: number,
    changePage: (page: number) => void


}

const Pagination = ({total, pageSize,changePage}: PaginateData) => {



    const pages = []
    for (let i = 1; i <= Math.ceil(total / pageSize); i++) {
        pages.push(i);
    }


    return (
        <div className="pagination-container">
            <div className="pagination">
                {pages.map((page) => (
                    <button key={page} className="number-btn" onClick={()=>changePage(page)}>
                        {page}
                    </button>
                ))}
            </div>
        </div>
    )


}

export default Pagination;