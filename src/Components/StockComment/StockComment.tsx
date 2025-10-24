import React, { useEffect, useState } from 'react'
import StockCommentForm from './StockCommentForm/StockCommentForm';
import { createCommentApi, getCommentApi } from '../../Services/CommentService';
import { toast } from 'react-toastify';
import { CommentGet } from '../../Models/Comment';
import StockCommentList from '../StockCommentList/StockCommentList';
import Spinner from '../Spinner/Spinner';

type Props = {
    stockSymbol: string;
};

type CommentFormInputs = {
    title: string;
    content: string;
}

const StockComment = ({stockSymbol}: Props) => {
    const[comments, setComment] = useState<CommentGet[] | null>(null)
    const[loading, setLoading] = useState<boolean>()

    useEffect(()=>{
        getComments();
    },[]);

    const handleCommentObj = (e: CommentFormInputs) =>{
        createCommentApi(e.title, e.content, stockSymbol).then((res) => {if (res) {//createCommentApi is the function that call the API COMMENT POST
            toast.success("Comment created successfully.");
            getComments();
        }}).catch((e) => {
            toast.warning(e);
        })
    }

    const getComments = () =>{
        setLoading(true);
        getCommentApi(stockSymbol).then((res) => {
            setLoading(false);
            setComment(res?.data!);
        })
    }
  return (
    <div className="flex flex-col">
        {loading ? <Spinner/> : <StockCommentList comments={comments!}/>}
        <StockCommentForm symbol={stockSymbol} handleComment={handleCommentObj}/>
    </div>
    
  )
}

export default StockComment