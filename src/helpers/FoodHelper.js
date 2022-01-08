export function make_grocery_table_list(groceries) {
    let grocerySections = groceries.map(x => x.section).filter((v, i, a) => a.indexOf(v) === i);
    let [temp, outPut] = make_grocery_template(grocerySections, groceries);
    let out = map_groceries(temp, outPut);

    return out;
}

function make_grocery_template(sections, groceries) {
    let groceryTableTemplate = {};
    let outputFormat = {};
    sections.forEach(x => {
        groceryTableTemplate[x] = '';
        outputFormat[x] = []; 
    });
    groceries.forEach(x => {
        outputFormat[x.section].push(x.norwegian);
    })

    return [groceryTableTemplate, outputFormat]
}

function map_groceries(groceryTableTemplate, outputFormat) {
    let allLists = [];
    let outTable = [];
    Object.values(outputFormat).forEach(x => {
        allLists.push(x);
    })
    let flat = allLists.flat();
    flat.forEach(() => {
        let template = {... groceryTableTemplate};
        Object.keys(groceryTableTemplate).forEach(x => {
            if (outputFormat[x].length) {
                template[x] = outputFormat[x].pop();
            }
        });
        const isEmpty = Object.values(template).every(t => t === '')
        if (!isEmpty) {
            outTable.push(template);
        }
    })

    return outTable;
}

export function makeRecipeTableWithAmount(groceries) {
    let out = groceries.map(x => {
        return {
            Amount: `${x.amount} ${x.uom}`,
            Name: x.norwegian
        }
    })

    return out;
}
