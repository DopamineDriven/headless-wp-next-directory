import { AllPosts_posts_edges, AllPosts_posts_edges_node } from '@graphql/__generated__/AllPosts'

export const removeNode = (
    array: (AllPosts_posts_edges | null)[]
): (AllPosts_posts_edges_node | null)[] => {
    console.log('inside remove node function....')
    let newArray = [];

    for (let i of array) {
        const arrayIndexData = i != null ? i.node : null;
        newArray.push(arrayIndexData);
    }
    console.log('remove node, new array: ', newArray)
    return newArray;
};
