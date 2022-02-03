
class AccountController {

    login(req,res,next){
            res.render('account/login')
    }
    register(req,res,next){
        res.render('account/register')
    }
    resetpassword(req,res,next){
        res.render('account/resetpassword')
    }

}

module.exports  = new AccountController;