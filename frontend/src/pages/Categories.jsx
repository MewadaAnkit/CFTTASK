import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import CategoryForm from '../component/CategoryForm';
import CategoryList from '../component/CategoryList';
import { createCategory, updateCategory, deleteCategory } from '../services/api';
import { useQueryClient } from '@tanstack/react-query';

const Categories = () => {
  const [editingCategory, setEditingCategory] = useState(null);
  const queryClient = useQueryClient();

  const handleCategorySubmit = async (data) => {
    try {
      if (editingCategory) {
        await updateCategory(editingCategory._id, data);
      } else {
        await createCategory(data);
      }
      queryClient.invalidateQueries({ queryKey: ['categories'] });
      setEditingCategory(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteCategory = async (id) => {
    await deleteCategory(id);
    queryClient.invalidateQueries({ queryKey: ['categories'] });
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Categories</Typography>
      <CategoryForm onSubmit={handleCategorySubmit} initialData={editingCategory} />
      <CategoryList
        onSelectCategory={() => {}}
        onEdit={setEditingCategory}
        onDelete={handleDeleteCategory}
      />
    </Box>
  );
};

export default Categories;