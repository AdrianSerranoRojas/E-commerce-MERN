import React, {useState, useContext, useEffect} from "react";

import axios from "axios";

import Header from "../../components/Header/Header";

import NewProductForm from "../../components/NewProductForm";

import AuthContext from "../../context/AuthContext";
import { getCurrentUserToken } from "../../firebase/firebase";

async function fetchUserToken(setUserToken, setLoading, setError) {
  setLoading(true);

  try {
    const token = await getCurrentUserToken();
    setUserToken(token);
  } catch (error) {
    setError(error);
  } finally {
    setLoading(false);
  }
}


function NewProduct() {
const [userToken, setUserToken] = useState();
const [loading, setLoading] = useState();
const [error, setError] = useState();

const currentUser = useContext(AuthContext);


  useEffect(() => {
    if (userToken && !currentUser) {
      setUserToken(null);
    }
  }, [userToken, currentUser]);

  useEffect(() => {
    if (!userToken) {
      fetchUserToken(setUserToken, setLoading, setError);
    }
  }, [userToken]);

  async function saveNewProductDB(newProduct){
    try{
console.log(currentUser)
    console.log(newProduct)
  const {uid, email } = currentUser
  var config = {
    method: 'post',
    url: 'http://localhost:4000/admin/products',
    headers: {
      Authorization: `Bearer ${userToken}`,
   
    },
    data : {newProduct, uid, email}
  };

await axios(config)
.then((response)=> {
  console.log(JSON.stringify(response.data));
})
.catch( (error)=> {
  console.log(error);
});
  } catch(e){
      console.log(e.message)
}
}
    


  return (
    <div className="row justify-content-center">
      <Header />
      <div className="col col-8">
        <div className="row">
          <header className="col col-12">
            <h1>New product</h1>
          </header>
          <div className="col col-12">
            <hr />
          </div>

          <div className="col col-12">
            <NewProductForm
            saveNewProduct={saveNewProductDB}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewProduct;
