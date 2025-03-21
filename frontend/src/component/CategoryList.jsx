// import React from 'react';
// import { useQuery } from '@tanstack/react-query';
// import { getCategories } from '../services/api';

// const CategoryList = ({ onSelectCategory, onEdit, onDelete }) => {
//   const { data: categories, isLoading } = useQuery({
//     queryKey: ['categories'],
//     queryFn: getCategories
//   });

//   if (isLoading) return <div>Loading...</div>;

//   return (
//     <div className="space-y-4">
//       {categories?.data.map(category => (
//         <div key={category._id} className="flex items-center justify-between p-4 bg-gray-100 rounded">
//           <span onClick={() => onSelectCategory(category._id)} className="cursor-pointer">
//             {category.name}
//           </span>
//           <div>
//             <button onClick={() => onEdit(category)} className="mr-2 text-blue-500">Edit</button>
//             <button onClick={() => onDelete(category._id)} className="text-red-500">Delete</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CategoryList;
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../services/api';
import { Table, TableBody, TableCell, TableHead, TableRow, Button, CircularProgress } from '@mui/material';

const CategoryList = ({ onSelectCategory, onEdit, onDelete }) => {
  const { data: categories, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  if (isLoading) return <CircularProgress />;

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell align="right">Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {categories?.data.map((category) => (
          <TableRow key={category._id}>
            <TableCell onClick={() => onSelectCategory(category._id)} sx={{ cursor: 'pointer' }}>
              {category.name}
            </TableCell>
            <TableCell align="right">
              <Button onClick={() => onEdit(category)} color="primary">Edit</Button>
              <Button onClick={() => onDelete(category._id)} color="error">Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CategoryList;