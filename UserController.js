import User from "./User.js"

class UserController{
    async create(req, res) {
        try {
            const {name, email, phone, adress} = req.body
            const user = await User.create({name, email, phone, adress})
            res.status(200).json(user)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getAll(req, res){
        try {
            const users = await User.find()
            return res.status(200).json(users)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getUserId(req,res){
        try {
            const {id} = req.params
            const user = await User.findById(id)
            return res.status(200).json(user)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async deleteUserId(req,res){
        try {
            const {id} = req.params
            const userDel = await User.findByIdAndDelete(id)
            return res.status(200).json(userDel)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new UserController()