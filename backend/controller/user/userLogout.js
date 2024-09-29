async function userLogout(req, res) {
    try {
        const tokenOption = {
            httpOnly : true,
            secure : true,
            sameSite : 'None'
          }

        console.log("Clearing cookie with options:", cookieOptions); // Debugging log

        res.clearCookie("token", tokenOption);

        res.json({
            message: "Logged out Successfully",
            error: false,
            success: true,
            data: []
        });
    } catch (err) {
        res.json({
            message: err.message || err,
            error: true,
            success: false,
        });
    }
}

module.exports = userLogout;



/*async function userLogout(req, res) {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Match the secure option in login
            sameSite: 'Strict',
            path: '/',
        });

        res.json({
            message: "Logged out Successfully",
            error: false,
            success: true,
            data: []
        });
    } catch (err) {
        res.json({
            message: err.message || err,
            error: true,
            success: false,
        });
    }
}

module.exports = userLogout;*/


/*async function userLogout(req,res) {
    try{
        res.clearCookie("token")

        res.json({
            message : "Logged out Successfully",
            error : false,
            success : true,
            data : []

        })
    }catch(err){
        res.json({
            message:   err.message || err,
            error: true,
            success: false,
        });
    }
}

module.exports = userLogout*/