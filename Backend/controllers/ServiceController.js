const Category  = require('../models/Category.model')
const Service = require('../models/Service.model');


const CreateService = async(req,res)=>{
    try {
        const service = new Service({
            ...req.body,
            categoryId: req.params.categoryId
        });
        await service.save();
        res.status(201).json(service);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const FindByCategory = async(req,res)=>{
    try {
        const services = await Service.find({ categoryId: req.params.categoryId })
            .populate('categoryId');
        res.json(services);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const FindandUpdate = async(req,res)=>{
    try {
        const service = await Service.findByIdAndUpdate(
            req.params.serviceId,
            req.body,
            { new: true, runValidators: true }
        );
        
        if (!service) {
            return res.status(404).json({ message: 'Service not found' });
        }

        // Handle price options if provided
        if (req.body.priceOptions) {
            await ServicePrice.deleteMany({ serviceId: req.params.serviceId });
            const priceOptions = req.body.priceOptions.map(option => ({
                ...option,
                serviceId: req.params.serviceId
            }));
            await ServicePrice.insertMany(priceOptions);
        }

        res.json(service);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


const Delete = async(req,res)=>{
    try {
        const service = await Service.findByIdAndDelete(req.params.serviceId);
        if (!service) {
            return res.status(404).json({ message: 'Service not found' });
        }
        await ServicePrice.deleteMany({ serviceId: req.params.serviceId });
        res.json({ message: 'Service deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



module.exports = {CreateService, FindByCategory , FindandUpdate , Delete}