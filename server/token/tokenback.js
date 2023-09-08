import jwt from 'jsonwebtoken'

export const getDataFromToken = (token) =>{
    try {
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET); 
        // console.log('Decoded token: ', decodedToken)
        return decodedToken;
    } catch (error) {
        res.json(
            {
                error: error.message
            }
        )
    }
}