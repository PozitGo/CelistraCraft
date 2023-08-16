import { useState } from "react";
import axios from "axios";

const usePaymentHttpPost = () => {
  const [IsPostSuccess, setIsPostSuccess] = useState(true);

  const sendPostRequest = async (url, data) => {
    axios
      .post(url, data)
      .then((response) => {
        if (response.status === 200) {
          window.location.href = response.data.payment_url;
          setIsPostSuccess(true);
        } else {
          setIsPostSuccess(false);
        }
      })
      .catch((error) => {
        setIsPostSuccess(false);
      });
  };

  return { IsPostSuccess, sendPostRequest };
};

export default usePaymentHttpPost;
