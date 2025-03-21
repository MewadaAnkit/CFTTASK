// import React, { useState } from 'react';

// const ServiceForm = ({ categoryId, onSubmit, initialData = {} }) => {
//   const [formData, setFormData] = useState({
//     name: initialData.name || '',
//     type: initialData.type || 'Normal',
//     priceOptions: initialData.priceOptions || [{ duration: '', price: '', type: 'Hourly' }]
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   const addPriceOption = () => {
//     setFormData({
//       ...formData,
//       priceOptions: [...formData.priceOptions, { duration: '', price: '', type: 'Hourly' }]
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <input
//         type="text"
//         value={formData.name}
//         onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//         placeholder="Service Name"
//         className="w-full p-2 border rounded"
//       />
//       <select
//         value={formData.type}
//         onChange={(e) => setFormData({ ...formData, type: e.target.value })}
//         className="w-full p-2 border rounded"
//       >
//         <option value="Normal">Normal</option>
//         <option value="VIP">VIP</option>
//       </select>
//       {formData.priceOptions.map((option, index) => (
//         <div key={index} className="flex space-x-2">
//           <input
//             type="text"
//             value={option.duration}
//             onChange={(e) => {
//               const newOptions = [...formData.priceOptions];
//               newOptions[index].duration = e.target.value;
//               setFormData({ ...formData, priceOptions: newOptions });
//             }}
//             placeholder="Duration"
//             className="p-2 border rounded"
//           />
//           <input
//             type="number"
//             value={option.price}
//             onChange={(e) => {
//               const newOptions = [...formData.priceOptions];
//               newOptions[index].price = e.target.value;
//               setFormData({ ...formData, priceOptions: newOptions });
//             }}
//             placeholder="Price"
//             className="p-2 border rounded"
//           />
//           <select
//             value={option.type}
//             onChange={(e) => {
//               const newOptions = [...formData.priceOptions];
//               newOptions[index].type = e.target.value;
//               setFormData({ ...formData, priceOptions: newOptions });
//             }}
//             className="p-2 border rounded"
//           >
//             <option value="Hourly">Hourly</option>
//             <option value="Weekly">Weekly</option>
//             <option value="Monthly">Monthly</option>
//           </select>
//         </div>
//       ))}
//       <button type="button" onClick={addPriceOption} className="text-blue-500">
//         Add Price Option
//       </button>
//       <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
//         {initialData._id ? 'Update' : 'Create'} Service
//       </button>
//     </form>
//   );
// };

// export default ServiceForm;

import React, { useState } from 'react';
import { TextField, Button, MenuItem, Box, Select, InputLabel, FormControl } from '@mui/material';

const ServiceForm = ({ categoryId, onSubmit, initialData = {} }) => {
  const [formData, setFormData] = useState({
    name: initialData.name || '',
    type: initialData.type || 'Normal',
    priceOptions: initialData.priceOptions || [{ duration: '', price: '', type: 'Hourly' }],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const addPriceOption = () => {
    setFormData({
      ...formData,
      priceOptions: [...formData.priceOptions, { duration: '', price: '', type: 'Hourly' }],
    });
  };

  const updatePriceOption = (index, field, value) => {
    const newOptions = [...formData.priceOptions];
    newOptions[index][field] = value;
    setFormData({ ...formData, priceOptions: newOptions });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2 }}>
      <TextField
        fullWidth
        label="Service Name"
        variant="outlined"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        sx={{ mb: 2 }}
      />
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Type</InputLabel>
        <Select
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
        >
          <MenuItem value="Normal">Normal</MenuItem>
          <MenuItem value="VIP">VIP</MenuItem>
        </Select>
      </FormControl>
      {formData.priceOptions.map((option, index) => (
        <Box key={index} sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <TextField
            label="Duration"
            value={option.duration}
            onChange={(e) => updatePriceOption(index, 'duration', e.target.value)}
          />
          <TextField
            label="Price"
            type="number"
            value={option.price}
            onChange={(e) => updatePriceOption(index, 'price', e.target.value)}
          />
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel>Type</InputLabel>
            <Select
              value={option.type}
              onChange={(e) => updatePriceOption(index, 'type', e.target.value)}
            >
              <MenuItem value="Hourly">Hourly</MenuItem>
              <MenuItem value="Weekly">Weekly</MenuItem>
              <MenuItem value="Monthly">Monthly</MenuItem>
            </Select>
          </FormControl>
        </Box>
      ))}
      <Button onClick={addPriceOption} variant="outlined" color="primary" sx={{ mb: 2 }}>
        Add Price Option
      </Button>
      <Button type="submit" variant="contained" color="success" fullWidth>
        {initialData?._id ? 'Update' : 'Create'} Service
      </Button>
    </Box>
  );
};

export default ServiceForm;