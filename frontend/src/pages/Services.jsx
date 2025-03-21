import React, { useState } from 'react';
import { Typography, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import ServiceForm from '../component/ServiceForm';
import ServiceList from '../component/ServiceList';
import { createService, updateService, deleteService } from '../services/api';
import { useQueryClient, useQuery } from '@tanstack/react-query';
import { getCategories } from '../services/api';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [editingService, setEditingService] = useState(null);
  const queryClient = useQueryClient();

  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  const handleServiceSubmit = async (data) => {
    try {
      if (editingService) {
        await updateService(selectedCategory, editingService._id, data);
      } else {
        await createService(selectedCategory, data);
      }
      queryClient.invalidateQueries({ queryKey: ['services', selectedCategory] });
      setEditingService(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteService = async (id) => {
    await deleteService(selectedCategory, id);
    queryClient.invalidateQueries({ queryKey: ['services', selectedCategory] });
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Services</Typography>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Select Category</InputLabel>
        <Select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories?.data.map((category) => (
            <MenuItem key={category._id} value={category._id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {selectedCategory && (
        <>
          <ServiceForm
            categoryId={selectedCategory}
            onSubmit={handleServiceSubmit}
            initialData={editingService}
          />
          <ServiceList
            categoryId={selectedCategory}
            onEdit={setEditingService}
            onDelete={handleDeleteService}
          />
        </>
      )}
    </Box>
  );
};

export default Services;