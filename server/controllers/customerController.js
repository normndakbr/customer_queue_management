const Queue = require('../models/Queue')

class customerController {
    static async newQueue(request, response) {
        const newQueue = new Queue(request.body)

        try {
            const queue = await newQueue.save()
            if(!queue) throw Error('Something wrong while saving the queue')

            response.status(200).json(queue)
        } catch(err) {
            response.status(400).json({ msg: err})
        }
    }
}

module.exports = customerController