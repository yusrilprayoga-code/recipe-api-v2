const receipe = require('./recipes');

const addRecipeHandler = (request, h) => {
    const { name, region, portion, image, cookTime, difficulty, ingredients, steps } = request.payload;
    const id = receipe[receipe.length - 1].id + 1;
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const newRecipe = {
        id, name, region, portion, image, cookTime, difficulty, ingredients, steps, createdAt, updatedAt,
    };

    receipe.push(newRecipe);

    const response = h.response({
        status: 'success',
        message: 'Resep berhasil ditambahkan',
        data: {
            recipeId: id,
        },
    });
    response.code(201);
    return response;
};

const getAllRecipeHandler = (request, h) => {
    const { name, region, difficulty } = request.query;

    let recipes = receipe;
    if (name !== undefined) {
        recipes = recipes.filter((recipe) => recipe.name.toLowerCase().includes(name.toLowerCase()));
    }
    if (region !== undefined) {
        recipes = recipes.filter((recipe) => recipe.region.toLowerCase().includes(region.toLowerCase()));
    }
    if (difficulty !== undefined) {
        recipes = recipes.filter((recipe) => recipe.difficulty.toLowerCase().includes(difficulty.toLowerCase()));
    }

    const response = h.response({
        status: 'success',
        data: {
            recipes,
        },
    });
    response.code(200);
    return response;
};

const getRecipeByIdHandler = (request, h) => {
    const { id } = request.params;

    const recipe = receipe.filter(r => r.id === parseInt(id))[0];

    if (recipe !== undefined) {
        return {
            status: 'success',
            data: {
                recipe,
            },
        };
    }

    const response = h.response({
        status: 'fail',
        message: 'resep tidak ditemukan',
    });
    response.code(404);
    return response;
};

const editRecipeByIdHandler = (request, h) => {
    const { id } = request.params;

    const { name, region, portion, image, cookTime, difficulty, ingredients, steps } = request.payload;
    const updatedAt = new Date().toISOString();

    const index = receipe.findIndex((recipe) => recipe.id === parseInt(id));

    if (index !== -1) {
        receipe[index] = {
            ...receipe[index],
            name,
            region,
            portion,
            image,
            cookTime,
            difficulty,
            ingredients,
            steps,
            updatedAt,
        };

        const response = h.response({
            status: 'success',
            message: 'Resep berhasil diperbarui',
        });
        response.code(200);
        return response;
    }

    const response = h.response({
        status: 'fail',
        message: 'Gagal memperbarui resep. Id tidak ditemukan',
    });
    response.code(404);
    return response;
};

const deleteRecipeByIdHandler = (request, h) => {
    const { id } = request.params;

    const index = receipe.findIndex((recipe) => recipe.id === id);

    if (index !== -1) {
        receipe.splice(index, 1);
        const response = h.response({
            status: 'success',
            message: 'Resep berhasil dihapus',
        });
        response.code(200);
        return response;
    }

    const response = h.response({
        status: 'fail',
        message: 'Resep gagal dihapus. Id tidak ditemukan',
    });
    response.code(404);
    return response;
};

module.exports = { addRecipeHandler, getAllRecipeHandler, getRecipeByIdHandler, editRecipeByIdHandler, deleteRecipeByIdHandler };


