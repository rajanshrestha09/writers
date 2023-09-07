import jwt from 'jsonwebtoken';
    

export default async function token(username,response){
    // Create token data
    const tokenData = {
        id: username.id,
        username: username.username,
        email: username.email
    }

    // create token
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
        expiresIn: "1h"
    })

    response.cookie('authcookie', token, {
        httpOnly: true
    })

    return response.json({
        message: "token Created success"
    })
}