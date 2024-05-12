const { 
    addRecipeHandler,
    getAllRecipeHandler,
    getRecipeByIdHandler,
    editRecipeByIdHandler,
    deleteRecipeByIdHandler,
} = require('./handler');

const route = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
           return `
            <h1>Simple Recipe Apps V2</h1>
            <p>API ini digunakan untuk menambahkan, mengubah dan menghapus resep masakan</p><br>
            <p>Available Routes</p><br>
            <p>GET /recipes</p>
            <p>GET /recipes/{id}</p>
            <p>POST /recipes</p>
            <p>PUT /recipes/{id}</p>
            <p>DELETE /recipes/{id}</p>`
        },
    },
    {
        method: 'GET',
        path: '/recipes',
        handler: getAllRecipeHandler,
    },
    {
        method: 'POST',
        path: '/recipes',
        handler: addRecipeHandler,
    },
    {
        method: 'GET',
        path: '/recipes/{id}',
        handler: getRecipeByIdHandler,
    },
    {
        method: 'PUT',
        path: '/recipes/{id}',
        handler: editRecipeByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/recipes/{id}',
        handler: deleteRecipeByIdHandler,
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            const response = h.response({
                status: 'fail',
                message: 'Halaman tidak ditemukan',
            });
            response.code(404);
            return response;
        },
    },
];

module.exports = route;