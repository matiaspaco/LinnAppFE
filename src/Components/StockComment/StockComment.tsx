import React from 'react'
import StockCommentForm from './StockCommentForm/StockCommentForm';
import { createCommentApi } from '../../Services/CommentService';
import { toast } from 'react-toastify';

type Props = {
    stockSymbol: string;
};

type CommentFormInputs = {
    title: string;
    content: string;
}

const StockComment = ({stockSymbol}: Props) => {
    const handleCommentObj = (e: CommentFormInputs) =>{
        createCommentApi(e.title, e.content, stockSymbol).then((res) => {if (res) {//createCommentApi is the function that call the API COMMENT POST
            toast.success("Comment created successfully.")
        }}).catch((e) => {
            toast.warning(e);
        })
    }
  return (
    <StockCommentForm symbol={stockSymbol} handleComment={handleCommentObj}/>
  )
}

export default StockComment