import { error } from "console"
import { useSearchParams  , useRouter} from "next/navigation"
// import { useRouter } from "next/router"
import { useEffect, useState } from "react"
// import { useNavigation } from "react-day-picker"



export default function VerifyEmail(){
    const [searchParams , setSearchParams] = useSearchParams()
    const emailToken = searchParams.get("emailToken")
    // const emailToken = useSearchParams()
    const [user , setUser] = useState(null)
    const [isLoading , setIsLoading] = useState(true)
      const router = useRouter();
    
    // const navigate = useNavigate

    useEffect(() => {
        async function ver(){
            if(user?.isVerfied){
                setTimeout(() => {
                    router.push("/")
                } , 3000)
            }else{
                if(emailToken){
                    setIsLoading(true)
                    try{
                        const response = await fetch(`http://localhost:8000/ELACO/users/verify-email`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(emailToken)
                        })

                        const data = await response.json()

                        if(!response.ok){
                            let message;
                            if(data?.message){
                                message = data.message
                            }else{
                                message = data
                            }
                            return {error: true , status: response.status , message}
                        }
                        return data


                    }catch(err){
                        console.log(err)
                    }
                }
            }
        }
    })

}