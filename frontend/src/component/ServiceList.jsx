// import React from 'react';
// import { useQuery } from '@tanstack/react-query';
// import { getServices } from '../services/api';

// const ServiceList = ({ categoryId, onEdit, onDelete }) => {
//   const { data: services, isLoading } = useQuery({
//     queryKey: ['services', categoryId],
//     queryFn: () => getServices(categoryId),
//     enabled: !!categoryId
//   });

//   if (isLoading) return <div>Loading...</div>;

//   return (
//     <div className="space-y-4">
//       {services?.data.map(service => (
//         <div key={service._id} className="p-4 bg-gray-100 rounded">
//           <div className="flex justify-between">
//             <span>{service.name} ({service.type})</span>
//             <div>
//               <button onClick={() => onEdit(service)} className="mr-2 text-blue-500">Edit</button>
//               <button onClick={() => onDelete(service._id)} className="text-red-500">Delete</button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ServiceList;
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getServices } from '../services/api';
import { Table, TableBody, TableCell, TableHead, TableRow, Button, CircularProgress } from '@mui/material';

const ServiceList = ({ categoryId, onEdit, onDelete }) => {
  const { data: services, isLoading } = useQuery({
    queryKey: ['services', categoryId],
    queryFn: () => getServices(categoryId),
    enabled: !!categoryId,
  });

  if (isLoading) return <CircularProgress />;

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Type</TableCell>
          <TableCell align="right">Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {services?.data.map((service) => (
          <TableRow key={service._id}>
            <TableCell>{service.name}</TableCell>
            <TableCell>{service.type}</TableCell>
            <TableCell align="right">
              <Button onClick={() => onEdit(service)} color="primary">Edit</Button>
              <Button onClick={() => onDelete(service._id)} color="error">Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ServiceList;