// // import React, { useState } from 'react';

// // const CategoryForm = ({ onSubmit, initialData = {} }) => {
// //   const [formData, setFormData] = useState({
// //     name: initialData.name || '',
// //   });

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     onSubmit(formData);
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="space-y-4">
// //       <input
// //         type="text"
// //         value={formData.name}
// //         onChange={(e) => setFormData({ ...formData, name: e.target.value })}
// //         placeholder="Category Name"
// //         className="w-full p-2 border rounded"
// //       />
// //       <button type="submit" className="bg-green-500 text-white p-2 rounded hover:bg-green-600">
// //         {initialData._id ? 'Update' : 'Create'} Category
// //       </button>
// //     </form>
// //   );
// // };

// // export default CategoryForm;
// // src/components/CategoryForm.jsx
// import React, { useState } from 'react';

// const CategoryForm = ({ onSubmit, initialData = {} }) => {
//   // Ensure initialData is always an object with a default empty name
//   const [formData, setFormData] = useState({
//     name: initialData?.name || '', // Use optional chaining to safely access name
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <input
//         type="text"
//         value={formData.name}
//         onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//         placeholder="Category Name"
//         className="w-full p-2 border rounded"
//       />
//       <button type="submit" className="bg-green-500 text-white p-2 rounded hover:bg-green-600">
//         {initialData?._id ? 'Update' : 'Create'} Category
//       </button>
//     </form>
//   );
// };

// export default CategoryForm;


import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const CategoryForm = ({ onSubmit, initialData = {} }) => {
  const [formData, setFormData] = useState({ name: initialData?.name || '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2 }}>
      <TextField
        fullWidth
        label="Category Name"
        variant="outlined"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained" color="success">
        {initialData?._id ? 'Update' : 'Create'} Category
      </Button>
    </Box>
  );
};

export default CategoryForm;