import axios from "axios";
import { toast } from "react-toastify";

export const handleError = (error: any) => {
    if (axios.isAxiosError(error)) {
        var err = error.response;
        if (Array.isArray(err?.data.errors)) {
            for(let val of err.data.errors){
                toast.warning(val.description);//To use the toast it's required to install npm install react-toastify and added in the App.tsx
            }
        }
    }else if(typeof err?.data.errors === 'object'){
        for(let z in err?.data.errors){
            toast.warning(err.data.errors[z][0]);
        }
    } else if(err?.data){
        toast.warning(err.data);
    } else if (err?.status == 401) {
        toast.warning("Please login");
        window.history.pushState({}, "LoginPage", "/login");//pushState redirect to the page
    } else if(err){
        toast.warning(err?.data);
    }
}