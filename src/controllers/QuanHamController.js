const QuanHamService = require('../services/QuanHamService')

const createQuanHam = async (req, res) => {
    try {
        const { QuanHamId, TenQuanHam, NgayNhan,  NgayKT,  MaQN  } = req.body
        if (!QuanHamId || !TenQuanHam || !NgayNhan || !NgayKT || !MaQN) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await QuanHamService.createQuanHam(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateQuanHam = async (req, res) => {
    try {
        const quanhamId = req.params.id
        const data = req.body
        if (!quanhamId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The quanhamId is required'
            })
        }
        const response = await QuanHamService.updateQuanHam(quanhamId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsQuanHam = async (req, res) => {
    try {
        const quanhamId = req.params.id
        if (!quanhamId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The quanhamId is required'
            })
        }
        const response = await QuanHamService.getDetailsQuanHam(quanhamId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteQuanHam = async (req, res) => {
    try {
        const quanhamId = req.params.id
        if (!quanhamId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The quanhamId is required'
            })
        }
        const response = await QuanHamService.deleteQuanHam(quanhamId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteMany = async (req, res) => {
    try {
        const ids = req.body.ids
        if (!ids) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The ids is required'
            })
        }
        const response = await QuanHamService.deleteManyQuanHam(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllQuanHam = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await QuanHamService.getAllQuanHam(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await QuanHamService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createQuanHam,
    updateQuanHam,
    getDetailsQuanHam,
    deleteQuanHam,
    getAllQuanHam,
    deleteMany,
    getAllType
}
