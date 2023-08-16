// useApiRequest.js
import { useState } from "react";
import axios from "axios";
import usePaymentHttpPost from "./usePaymentHttpPost";

const PaymentSystemURLHandler = (Index) => {
  switch (Index) {
    case 0:
      return "https://i.celistracraft.net/api/payment/yookassa";
    default:
      return null;
  }
};

const useApiRequest = () => {
  const { IsPostSuccess, sendPostRequest } = usePaymentHttpPost();
  const [isSuccessNick, setisSuccessNick] = useState(true);
  const [IsSuccessPayment, setIsSuccessPayment] = useState(true);

  const requestAPIPayment = (nickName, email, amount, index) => {
    if (typeof nickName === "string") {
      axios
        .get(`https://i.celistracraft.net/api/player/${nickName}`)
        .then((response) => {
          setisSuccessNick(true);

          const URL = PaymentSystemURLHandler(index);

          if (IsPostSuccess) {
            if (URL !== null) {
              sendPostRequest(URL, {
                uuid: response.data.uuid,
                email: email,
                amount: amount,
              });
            } else {
              setIsSuccessPayment(false);
            }
          }
        })
        .catch((errors) => {
          if (errors.response.status === 404) {
            setisSuccessNick(false);
          } else {
            setIsSuccessPayment(false);
          }
        });
    } else {
      setisSuccessNick(false);
    }
  };

  return { IsPostSuccess, IsSuccessPayment, isSuccessNick, requestAPIPayment };
};

export default useApiRequest;
