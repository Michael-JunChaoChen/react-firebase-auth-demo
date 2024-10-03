import React, { useEffect, useState } from 'react'
import { useAuth } from '../../contexts/authContext'
import { db } from '../../firebase/firebase'
import { doc, getDoc, getDocs, collection } from "firebase/firestore"

const Home = () => {
    const { currentUser } = useAuth()
    const [response, setResponse] = useState([])


    useEffect(() => {
        // get specific doc from collection
        // getDoc(doc(db, "skin_diag_response", "uK5mkHUF9iORNGO3dY6P");).then((data) => {
        //     setResponse(data.data())
        // })
        // get all docs from collection
        const response = []
        getDocs(collection(db, "skin_diag_response")).then((res) => {
            res.forEach((doc) => {
                response.push(doc.data())
            })
            setResponse(response)
        })
      }, []);

    return (
        <div className='text-2xl font-bold pt-14'>
            Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.
            <div>
                {response.map(function(data, index) {
                    return (
                        <div key={index}>
                            <div>
                                {data.image_name}
                            </div>
                            <div>
                                {data.json_response}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home