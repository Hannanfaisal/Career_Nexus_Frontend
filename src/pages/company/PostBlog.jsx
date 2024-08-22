
import React, {useState} from 'react'
import TitleBar from '../../components/TitleBar'
import { MdTitle } from "react-icons/md";
import { TbLogs } from "react-icons/tb";
import { MdCategory } from "react-icons/md";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import BlogForm from '../../components/BlogForm';

const PostBlog = () => {

  
  return (
    <div>
        <TitleBar title='Post Blog'/>
        <div className='mt-5 p-5 rounded shadow-md bg-slate-50'>
        
          <BlogForm/>
        </div>
    </div>
  )
}

export default PostBlog