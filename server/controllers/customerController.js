const Queue = require('../models/Queue')

class customerController {
    static async newQueue(request, response) {
        const newQueue = new Queue(request.body)
        try {
            const queue = await newQueue.save()
            if(!queue) throw Error('Something wrong while saving the queue')
            response.status(201).json(queue)
            console.log("newQueue added!")
        } catch(err) {
            response.status(400).json({ msg: err})
        }
    }

    static async getAllQueue(request, response) {
        try {
            const queue = await Queue.find()
            if(!queue) throw Error('No Items')
            response.status(200).json(queue)
        } catch(err) {
            response.status(400).json({ msg: err})
        }
    }

    static async getQueueById(request, response) {
        try {
            const queue = await Queue.findById(request.params.id)
            if(!queue) throw Error('Item not found')
            response.status(200).json(queue)
        } catch(err) {
            response.status(400).json({ msg: err })
        }
    }
}

module.exports = customerController