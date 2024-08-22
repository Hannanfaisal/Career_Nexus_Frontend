
import React, {useState} from 'react'

const usePagination = (data) => {

    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(10)
    const lastPostIndex = currentPage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage
    const currentRecords = data.slice(firstPostIndex, lastPostIndex)

  return [currentPage, postPerPage, setCurrentPage, currentRecords]
}

export default usePagination