const treeData = [
    {
      id: 1,
      name: 'Root',
      children: [
        {
          id: 2,
          name: 'Child 1',
          children: [
            { id: 3, name: 'Grandchild 1', children: [] },
            { id: 4, name: 'Grandchild 2', children: [] },
          ],
        },
        {
          id: 5,
          name: 'Child 2',
          children: [],
        },
      ],
    },
  ];
  
  export default treeData;