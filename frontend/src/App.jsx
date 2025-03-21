// import React, { useState } from 'react';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import Login from './component/Login';
// import CategoryList from './component/CategoryList';
// import CategoryForm from './component/CategoryForm';
// import ServiceList from './component/ServiceList';
// import ServiceForm from './component/ServiceForm';
// import { createCategory, updateCategory, deleteCategory, createService, updateService, deleteService } from './services/api';

// const queryClient = new QueryClient();

// function App() {
//   const [token, setToken] = useState(localStorage.getItem('token'));
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [editingCategory, setEditingCategory] = useState(null);
//   const [editingService, setEditingService] = useState(null);

//   const handleCategorySubmit = async (data) => {
//     try {
//       if (editingCategory) {
//         await updateCategory(editingCategory._id, data);
//       } else {
//         await createCategory(data);
//       }
//       queryClient.invalidateQueries({ queryKey: ['categories'] });
//       setEditingCategory(null);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleServiceSubmit = async (data) => {
//     try {
//       if (editingService) {
//         await updateService(selectedCategory, editingService._id, data);
//       } else {
//         await createService(selectedCategory, data);
//       }
//       queryClient.invalidateQueries({ queryKey: ['services', selectedCategory] });
//       setEditingService(null);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleDeleteCategory = async (id) => {
//     await deleteCategory(id);
//     queryClient.invalidateQueries({ queryKey: ['categories'] });
//     setSelectedCategory(null);
//   };

//   const handleDeleteService = async (id) => {
//     await deleteService(selectedCategory, id);
//     queryClient.invalidateQueries({ queryKey: ['services', selectedCategory] });
//   };

//   if (!token) return <Login setToken={setToken} />;

//   return (
//     <QueryClientProvider client={queryClient}>
//       <div className="container mx-auto p-4">
//         <div className="flex justify-between mb-4">
//           <h1 className="text-3xl font-bold">Service Management</h1>
//           <button onClick={() => { localStorage.removeItem('token'); setToken(null); }} className="text-red-500">
//             Logout
//           </button>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div>
//             <CategoryForm onSubmit={handleCategorySubmit} initialData={editingCategory} />
//             <CategoryList
//               onSelectCategory={setSelectedCategory}
//               onEdit={setEditingCategory}
//               onDelete={handleDeleteCategory}
//             />
//           </div>
//           {selectedCategory && (
//             <div className="col-span-2">
//               <ServiceForm
//                 categoryId={selectedCategory}
//                 onSubmit={handleServiceSubmit}
//                 initialData={editingService}
//               />
//               <ServiceList
//                 categoryId={selectedCategory}
//                 onEdit={setEditingService}
//                 onDelete={handleDeleteService}
//               />
//             </div>
//           )}
//         </div>
//       </div>
//     </QueryClientProvider>
//   );
// }

// export default App;


import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Login from './component/Login';
import DashboardLayout from './component/DashboardLayout';
import Categories from './pages/Categories';
import Services from './pages/Services';

const queryClient = new QueryClient();

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route
            path="/login"
            element={!token ? <Login setToken={setToken} /> : <Navigate to="/categories" />}
          />
          <Route
            element={token ? <DashboardLayout setToken={setToken} /> : <Navigate to="/login" />}
          >
            <Route path="/categories" element={<Categories />} />
            <Route path="/services" element={<Services />} />
            <Route path="/" element={<Navigate to="/categories" />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;